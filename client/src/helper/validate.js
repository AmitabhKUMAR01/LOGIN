import toast from "react-hot-toast";

//*validate login page username*//
export async function usernameValidate(values) {
    const errors = usernameVerify({},values)
    return errors
}
//*validate password page username*//

export async function passwordValidate(values) {
    const  errors = passwordVerify({},values)
    return errors
}

/**validate reset password */

export async function resetPasswordValidate(values) {
    const errors = passwordVerify({},values)

    if(values.password!==values.confirm_pwd)
    {
        errors.exist = toast.error("password not match")
    }
    return errors
}
/* validate register form*/
export async function registerValidate(values) {
    const errors=usernameVerify({},values)  
    passwordVerify(errors,values)
    emailVerify(errors,values)
    return errors

}
/* validate profile form*/

export async function profileValidate(values) {
    const errors = emailVerify({},values)
    return errors
}

/***********************************************     */


//*validate password *//

function passwordVerify(errors={},values){
    // const specialChars =/^(?)
    if(!values.password)
    {
        errors.password = toast.error("password is required!!!")
    }else if(values.password.includes(" "))
    {
        errors.password = toast.error("wrong password")
    }else if(values.password.length<4){
        errors.password = toast.error("password must be at least 4 characters")
    }
    // }else if(!specialChars.test(values.password)){
    //     errors.password = toast.error("password must have special characters")
    // }
    return errors
}

//* validate Username*/

function usernameVerify(error = {},values)
{
    if(!values.username)
    {
        error.username =toast.error("Username Required!!!!!");
    }else if(values.username.includes(" ")){
        error.username =toast.error("invalid username");
    }
    return error
}
/*validate email address */
function emailVerify(error = {},values){
    if(!values.email)
    {
        error.email =toast.error("Email Required!!!!!");
    }else if(values.email.includes(" ")){
        error.email =toast.error("wrong email address");
    }
    return error;
}