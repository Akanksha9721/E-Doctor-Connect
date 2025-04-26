const express = require('express');
const Model = require('../models/paydetailModel');
const router = express.Router();
const jwt = require('jsonwebtoken');
const verifyToken = require('../middleware/verifytoken');
require('dotenv').config();

router.post('/add', verifyToken,(req, res) => {
  req.body.user = req.user._id;
  console.log(req.body);
  new Model(req.body).save()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      
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

})

module.exports = router;