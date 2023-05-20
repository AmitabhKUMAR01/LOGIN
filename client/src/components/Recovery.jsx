import { Link } from "react-router-dom"
import {Toaster} from 'react-hot-toast'
import '../styles/Username.css'
const Recovery = () => {


  return (
    <div className="container mx-auto">
    <Toaster position="top-center " reverseOrder={false}></Toaster>
        <div className="flex  h-screen justify-center items-center" >
            <div className={"bg-indigo-0 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10 border border-gray-100  justify-center items-center px-5py-4   shadow-sm text-lg"}>
            <div className="title flex flex-col items-center">
                <h4 className="text-5xl text-green-300 font-bold">Recovery</h4>
                <span className="py-4 text-xl w-2/3 text-center text-gray-500">
                    Enter OTP to recover password .
                </span>
            </div>
            <form  className="pt-20 " >
                
                <div className="textbox flex flex-col items-center gap-6">
                    <div className="input text-center flex flex-col">

                    <span className="py-4 text-sm text-left text-gray-200 ">
                      Enter OTP sent to your email address
                    </span>
                    <input  type="text" name="password" className="p-2 rounded-xl" placeholder="OTP"  />
                    </div>
                    <button className="text-green-300 rounded-lg border-green-300 border-2 px-10 font-bold hover:text-black transition hover:bg-blue hover:bg-opacity-5 hover:border-none hover:bg-gradient-to-r hover:from-indigo-500 hover:from-10% via-sky-500 hover:via-30% hover:to-emerald-500 to-90%" type="submit" >Recover</button>
                </div>
                <div className="text-center py-4">
                    <span className="text-gray-400">Can't get OTP <Link to="/recovery" className="text-blue-400 font-bold">- Recover now</Link></span>
                </div>
            </form>
            </div>
        </div>
    </div>
  )
}

export default Recovery