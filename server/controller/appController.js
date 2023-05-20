import UserModel from "../model/User.model.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'
import ENV from '../config.js'
/** middleware to verify user */
export async function verifyUser(req,res,next)
{
  try {
    const {username}=req.method=="GET" ? req.query :req.body;

    //check the userExistance
    let exist =  await UserModel.findOne({username});
    if(!exist) return res.status(404).send({error:"Can't find user"})
    next();

  } catch (error) {
    return res.status(404).send({error:"Authentication failed"})
  }
}
//post
export async function register(req, res) {
  try {
    const { username, password, profile, email } = req.body;
    //check the existing user
    const existUername = new Promise((resolve, reject) => {
      UserModel.findOne({ username },
        function (err, user) {
          if (err) reject(new Error(err));
          if (user) reject({ error: "please use unique username" });

          resolve();
        });
    });
    //check for existing email
    const existEmail = new Promise((resolve, reject) => {
      UserModel.findOne({ email },
        function (err, user) {
          if (err) reject(new Error(err));
          if (user) reject({ error: "please use unique email" });

          resolve();
        });
    });
    Promise.all([existUername, existEmail])
      .then(() => {
        if (password) {
          bcrypt
            .hash(password, 10)
            .then((hashedPassword) => {
              const user = new UserModel({
                username,
                password: hashedPassword,
                profile: profile || "",
                email,
              });
              //return save result as a response
              user
                .save()
                .then((result) =>
                  res.status(201).send({ msg: "use Registered successfully" })
                )
                .catch((error) => res.status(500).send(error));
            })
            .catch((error) => {
              return res.status(500).send({
                error: "Unable to encrypt password",
              });
            });
        }
      })
      .catch((error) => {
        return res.status(500).send({ error });
      });
  } catch (error) {
    return res.status(500).send(error);
  }
}
//post

export async function login(req, res) {
  const { username,password } = req.body;
  try {
    UserModel.findOne({username})
    .then(user=>{
      bcrypt.compare(password, user.password)
          .then(passwordCheck=>{
            
            if(!passwordCheck) return res.status(400).send({error:'password mismatch'})
            const token = jwt.sign({
                            userId:user._id,
                            username:user.username,


                          },ENV.JWT_SECRET,{expiresIn:"24h"})
            return res.status(200).send({
              msg: "login successfully",
              username:user.username,
              token
            })
          })
          .catch(error=>{
            return res.status(400).send({error:"password mismatch"});
          })
    }).catch(error=>{
      return res.status(404).send({error:"password not found"});
    })
    
  } catch (error) {
    return res.status(500).send({error})
  }
}
  //get
export async function getUser(req, res) {
  res.json("get user routes");
}
//put

export async function updateUser(req, res) {
  res.json("update user routes");
}
//get
export async function generateOTP(req, res) {
  res.json("generateOTP routes");
}
//get
export async function verifyOTP(req, res) {
  res.json("verifyOTP routes");
}
//get
export async function createResetSession(req, res) {
  res.json("createResetSession routes");
}

//put
export async function resetPassword(req, res) {
  res.json("resetPassword routes");
}
