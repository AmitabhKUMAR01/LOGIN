import { Router } from "express";

//* import all controllers 

import * as controllers from "../controller/appController.js"

const router = Router();

/*POST  METHODS */

router.route("/register").post(controllers.register); //register user
// router.route("/registerMails").post(); //send email
router.route("/authenticate").post((req,res)=>res.end()); //aouthenticate user
router.route("/login").post(controllers.verifyUser,controllers.login); // login in the app

/*GET METHODS */

router.route("/user/:username").get(controllers.getUser); //user with username
router.route("/generateOTP").get(controllers.generateOTP); //generateOTP
router.route("/verifyOTP").get(controllers.verifyOTP); //verifyOTP
router.route("/createResetSession").get(controllers.createResetSession); //reset all variables

/*PUT METHOD*/

router.route("/updateuser").put(controllers.updateUser); //use to update user profile
router.route("/resetPassword").put(controllers.resetPassword); // use to reset password

export default router;

