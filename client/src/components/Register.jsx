import { Link } from "react-router-dom";
import avtar from "../assets/newavtar.webp";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import {  registerValidate } from "../helper/validate";
import "../styles/Username.css";
import { useState } from "react";
import convertToBase64 from "../helper/convert";
const Register = () => {
  const [file,setFile] = useState()

  const formik = useFormik({
    initialValues: {
      emial: "email@example.com",
      username: "example123",
      password: "",
    },
    validate: registerValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      values = await Object.assign(values,{profile:file||''})
      console.log(values);
    },
  });

  /* fiel upload control */
  const onUpload = async e => {

    const base64 = await convertToBase64(e.target.files[0])
    setFile(base64)
  }

  return (
    <div className="container mx-auto">
      <Toaster position="top-center " reverseOrder={false}></Toaster>
      <div className="flex  h-screen justify-center items-center">
        <div
          // style={{width:"45%"}}
          className={
            "bg-indigo-0 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10 border border-gray-100  justify-center items-center px-5 py-4   shadow-sm text-lg "
          }
        >
          <div className="title flex flex-col items-center">
            <h4 className="text-5xl text-green-300 font-bold">Register</h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              Happy to join you
            </span>
          </div>
          <form className="py-1 " onSubmit={formik.handleSubmit}>
            <div className="profile flex justify-center py-4">
              <label htmlFor="profile">
                <img
                  src={file || avtar}
                  className={
                    "border-4 border-gray-100 w-[135px] rounded-full shadow-lg cursor-pointer"
                  }
                  alt="avtar"
                />
              </label>
              <input onChange={onUpload} type="file" name="profile" id="profile" />
            </div>
            <div className="textbox flex flex-col items-center gap-6">
              <input
                {...formik.getFieldProps("email")}
                type="text"
                name="email"
                className="p-2 rounded-xl"
                placeholder="email*"
              />
              <input
                {...formik.getFieldProps("username")}
                type="text"
                name="username"
                className="p-2 rounded-xl"
                placeholder="username*"
              />
              <input
                {...formik.getFieldProps("password")}
                type="text"
                name="password"
                className="p-2 rounded-xl"
                placeholder="Password*"
              />
              <button
                className="text-green-300 rounded-lg border-green-300 border-2 px-10 font-bold hover:text-black transition hover:bg-blue hover:bg-opacity-5 hover:border-none hover:bg-gradient-to-r hover:from-indigo-500 hover:from-10% via-sky-500 hover:via-30% hover:to-emerald-500 to-90%"
                type="submit"
              >
                Register
              </button>
            </div>
            <div className="text-center py-4">
              <span className="text-gray-500">
                Already Registered{" "}
                <Link to="/" className="text-blue-400 font-bold">
                  - Login now
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
