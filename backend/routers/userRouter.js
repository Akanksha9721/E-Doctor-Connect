const express = require('express');
const Model = require('../models/userModel');
const router = express.Router();
const jwt = require('jsonwebtoken');
const verifyToken = require('../middleware/verifytoken');
require('dotenv').config();

router.post('/add', (req, res) => {
  console.log(req.body);
  new Model(req.body).save()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      if(err.code === 11000){
        res.status(500).json({message:'Email Aleady Registered'});

      }else{
        res.status(500).json({message:'internal server Error'});
      }
    })

});
//getall
router.get('/getall',(req, res) => {
  Model.find()
    .then((result) => {
      res.status(200).json(result);

    }).catch((err) => {
      console.log(err);
      res.status(500).json(err);

    });

});
router.get('/getbycity/:city', (req, res) => {
  Model.find({ city: req.params.city })
    .then((result) => {
      res.status(200).json(result);

    }).catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });

})
//getbyid
router.get('/getbyid/:id', (req, res) => {
  Model.findById(req.params.id)
   .then((result) => {
    res.status(200).json(result);
    
   }).catch((err) => {
    console.log(err);
    res.status(500).json(err);
   });
});
router.get('/getuser', verifyToken, (req, res) => {
  const { _id } = req.user;
  Model.findById(_id)
    .then((result) => {
      res.status(200).json(result);

    }).catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
router.get('/getdetails', verifyToken, (req, res) => {
  const { _id } = req.user;
  console.log(_id);
  
  Model.findById(_id)
    .then((result) => {
      console.log(result);
      
      res.status(200).json(result);

    }).catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
//delete
router.delete('/delete/:id', (req, res) => {
  Model.findByIdAndDelete(req.params.id)
  .then((result) => {
    res.status(200).json(result);
    
   }).catch((err) => {
    console.log(err);
    res.status(500).json(err);
   });
});

//update
router.put('/update', verifyToken, (req, res) => {
  Model.findByIdAndUpdate(req.user._id, req.body, { new: true })
  .then((result) => {
    res.status(200).json(result);
    
   }).catch((err) => {
    console.log(err);
    res.status(500).json(err);
   });
 
});
router.post('/authenticate',(req,res)=>{
  Model.findOne(req.body)
  .then((result) => {
    if(result){
      //email and password match
      //generate token
      const { _id, name,email}=result;
      const payload ={_id,name,email};

      jwt.sign(
        payload,
        process.env.JWT_SECRET,
        {expiresIn:'2d'},
        (err,token)=>{
          if(err){
            console.log(err);
            res.status(500).json(err);
          }else{
            res.status(200).json({token});

          }

        }
      )

    }else{
      //not match
      res.status(403).json({message:'Invalid credentials'});
    }
  }).catch((err) => {
    console.log(err);
    res.status(500).json(err);
    
  });

});

// Add password update endpoint
router.put('/update-password', verifyToken, async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;
    const userId = req.user._id;

    // Validate input
    if (!currentPassword || !newPassword) {
      return res.status(400).json({
        success: false,
        message: 'Current password and new password are required'
      });
    }

    // Get user
    const user = await Model.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    // Verify current password
    if (user.password !== currentPassword) {
      return res.status(401).json({
        success: false,
        message: 'Current password is incorrect'
      });
    }

    // Update password
    const updatedUser = await Model.findByIdAndUpdate(
      userId,
      { password: newPassword },
      { new: true }
    ).select('-password');

    res.status(200).json({
      success: true,
      message: 'Password updated successfully',
      data: updatedUser
    });

  } catch (error) {
    console.error('Password update error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message
    });
  }
});

// Reset password (after OTP verification)
router.post('/reset/update-password', async (req, res) => {
  try {
    const { email, newPassword } = req.body;

    // Validate input
    if (!email || !newPassword) {
      return res.status(400).json({
        success: false,
        message: 'Email and new password are required'
      });
    }

    // Update password
    const updatedUser = await Model.findOneAndUpdate(
      { email },
      { password: newPassword },
      { new: true }
    ).select('-password');

    if (!updatedUser) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Password updated successfully',
      data: updatedUser
    });

  } catch (error) {
    console.error('Password reset error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message
    });
  }
});

module.exports = router;