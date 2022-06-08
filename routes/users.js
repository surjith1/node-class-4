import express  from 'express';
import {createUser,getUsersByName} from './helper.js';
import bcrypt from 'bcrypt';

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
  
    // const result = await createUser({
    //   username:username, 
    //   password:hashedPassword
    // })
    // isUserExist ? console.log("User Already Exist") :  createUser()
    
    //res.send(isUserExist);
    //res.send(result);
    //  const hashedPassword = await genHashedPassword(password);
    //  const isUserExist = await getUsersByName(username);
    // console.log(username, isUserExist)
    // res.send(isUserExist);
  });


  export const userRouter = router;


