import express  from 'express';
import {createUser,getUsersByName} from './helper.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { response } from 'express';

const router = express.Router();
// async function genHashedPassword(password) {
//     const NO_OF_Rounds=10;
//     const salt =await bcrypt.genSalt(NO_OF_Rounds);
//     const hashedPassword = await bcrypt.hash(password,salt);
//     return hashedPassword;
//   }
async function genHashedPassword(password) {
  const NO_OF_Rounds=10;
  const salt =await bcrypt.genSalt(NO_OF_Rounds);
  const hashedPassword = await bcrypt.hash(password,salt);
  return hashedPassword;
}

  router.post('/signup', async function (req, res) {
    const {username, password} = req.body;
    const hashedPassword= await genHashedPassword(password);
    const isUserExist = await getUsersByName(username);
    if(isUserExist) {
      res.status(400).send({msg:"Choose another Usernmae"})
    }
    else {
      const result = await createUser({
      username:username, 
      password:hashedPassword
    })
    res.send(result);
    }
  
    
  });

  router.post('/login', async function (req, res) {
    const {username, password} = req.body;
    const userFromDB = await getUsersByName(username);
 console.log(userFromDB);
 if(!userFromDB) {
   res.status(401).send({msg: "Invalid Credentials"})
 }
 else {
   const dbStoredPassword = userFromDB.password;
   const isPasswordMatch= await bcrypt.compare(password,dbStoredPassword)
 console.log(isPasswordMatch);
 if(isPasswordMatch) {
  const token= jwt.sign({id: userFromDB._id},process.env.SECRET_KEY)
res.send({msg:"Successfully Loged in",token:token})
 }
 else{
  res.status(401).send({msg: "Invalid Credentials"})
 }
   res.send(isPasswordMatch);
 
  }
   
  });


  export const userRouter = router;


