const express = require('express');
const User = require('../modules/User');
const router = express.Router();
const crypto = require('crypto'); 
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');


//create user using: post "/api/auth/createuser". no login require
router.post('/createuser',[
    
body('name','Enter a Valid Name').isLength({ min: 3 }),
body('email','Enter a valid Email Adress').isEmail(),
body('password',' Password must be atleast 5 character').isLength({ min: 5 }),
body('phonenumber',' phone number must be atleast 10 character').isLength({ max: 10 }),


],async (req, res) =>{
    //if there are errors,return bad request and errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
   //check whether the user with this email exits already 
   try {
   
   let user = await User.findOne({email: req.body.email});
    if(user){
     return res.status(400).json({error: "sorry a user with this email already exists"})
    }
// create a new user

this.salt = crypto.randomBytes(16).toString('hex'); 
  
// Hashing user's salt and password with 1000 iterations, 
 
this.hash = crypto.pbkdf2Sync(req.body.password, this.salt,  
1000, 64, `sha512`).toString(`hex`); 
   user = {
        
        name: req.body.name,
        email: req.body.email,
       
        password: this.hash,
        phonenumber: req.body.phonenumber,

        
      }
      //.then(user => res.json(user))
       // .catch(err=> {console.log(err)
   // res.json({error: 'please enter uniqe value for email'})})
   res.json(user);
    }catch(error){
    console.error(error.message);
    
    }

})
module.exports = router;