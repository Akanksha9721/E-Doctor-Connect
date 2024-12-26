const express = require('express');
const Model = require('../models/slotModel');
const verifyToken = require('../middleware/verifytoken');
const router = express.Router();

router.post('/add', verifyToken, (req, res) => {
  req.body.doctor = req.user._id;
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
router.put('/update/:id', (req, res) => {
  Model.findByIdAndUpdate(req.params.id,req.body,{new:TextTrackCueList})
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
        {expiresIn:'2 days'},
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