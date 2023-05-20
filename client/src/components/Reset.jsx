import { Link } from "react-router-dom";

import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { resetPasswordValidate } from "../helper/validate";
import "../styles/Username.css";
const Reset = () => {
  const formik = useFormik({
    initialValues: {
      password: "",
      confirm_pwd: "",
    },
    validate: resetPasswordValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  return (
    <div className="container mx-auto">
      <Toaster position="top-center " reverseOrder={false}></Toaster>
      <div className="flex  h-screen justify-center items-center">
        <div
          className={
            "bg-indigo-0 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10 border border-gray-100  justify-center items-center px-5py-4   shadow-sm text-lg"
          }
        >
          <div className="title flex flex-col items-center">
            <h4 className="text-5xl text-green-300 font-bold">Reset</h4>
            <span className="py-4 text-lg w-2/3 text-center text-gray-500">
              Enter new passwrod
            </span>
          </div>
          <form className="pt-20 pb-20 px-6" onSubmit={formik.handleSubmit}>
            <div className="textbox flex flex-col items-center gap-6">
              <input
                {...formik.getFieldProps("password")}
                type="text"
                name="password"
                className="p-2 rounded-xl"
                placeholder="New password"
              />
              <input
                {...formik.getFieldProps("confirm_pwd")}
                type="text"
                name="confirm_pwd"  
                className="p-2 rounded-xl"
                placeholder="Confirm password"
              />
              <button
                className="text-green-300 rounded-lg border-green-300 border-2 px-10 font-bold hover:text-black transition hover:bg-blue hover:bg-opacity-5 hover:border-none hover:bg-gradient-to-r hover:from-indigo-500 hover:from-10% via-sky-500 hover:via-30% hover:to-emerald-500 to-90%"
                type="submit"
              >
                <span className="text-white">sign</span> in
              </button>
            </div>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reset;
