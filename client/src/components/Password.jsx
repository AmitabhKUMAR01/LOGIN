import { Link } from "react-router-dom"
import avtar from "../assets/newavtar.webp";
import {Toaster} from 'react-hot-toast'
import {useFormik} from 'formik'
import { passwordValidate } from "../helper/validate"
import '../styles/Username.css'
const Password = () => {

    const formik = useFormik({
        initialValues:{
            password:''
        },
        validate:passwordValidate,
        validateOnBlur:false,
        validateOnChange:false,
        onSubmit:async values => {
            console.log(values);
        }

    })

  return (
    <div className="container mx-auto">
    <Toaster position="top-center " reverseOrder={false}></Toaster>
        <div className="flex  h-screen justify-center items-center" >
            <div className={"bg-indigo-0 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10 border border-gray-100  justify-center items-center px-5 py-4   shadow-sm text-lg"}>
            <div className="title flex flex-col items-center">
                <h4 className="text-5xl text-green-300 font-bold">Hello Again</h4>
                <span className="py-4 text-xl w-2/3 text-center text-gray-500">
                    Explore more by connecting with us
                </span>
            </div>
            <form  className="py-1 " onSubmit={formik.handleSubmit}>
                <div className="profile flex justify-center py-4">
                    <img src={avtar}  className={"border-4 border-gray-100 w-[135px] rounded-full shadow-lg cursor-pointer"} alt="avtar" />
                </div>
                <div className="textbox flex flex-col items-center gap-6">
                    <input {...formik.getFieldProps('password')} type="text" name="password" className="p-2 rounded-xl" placeholder="Password"  />
                    <button className="text-green-300 rounded-lg border-green-300 border-2 px-10 font-bold hover:text-black transition hover:bg-blue hover:bg-opacity-5 hover:border-none hover:bg-gradient-to-r hover:from-indigo-500 hover:from-10% via-sky-500 hover:via-30% hover:to-emerald-500 to-90%" type="submit" ><span className="text-white">sign</span> in</button>
                </div>
                <div className="text-center py-4">
                    <span className="text-gray-500">forgot password <Link to="/recovery" className="text-blue-400 font-bold">- Recover now</Link></span>
                </div>
            </form>
            </div>
        </div>
    </div>
  )
}

export default Password