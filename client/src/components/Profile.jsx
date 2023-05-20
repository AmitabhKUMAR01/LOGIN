import { Link } from "react-router-dom";
import avtar from "../assets/newavtar.webp";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import {  profileValidate } from "../helper/validate";
import "../styles/Username.css";
import { useState } from "react";
import convertToBase64 from "../helper/convert";
const Profile = () => {
  const [file,setFile] = useState()

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      mobile:'',
      emial: "email@example.com",
      address: "",
    },
    validate: profileValidate,
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
            "bg-indigo-0 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10 border border-gray-100  justify-center items-center mt-10 px-24 py-4   shadow-sm text-lg "
          }
        >
          <div className="title flex flex-col text-center   items-center">
            <h4 className="text-5xl  text-green-300 font-bold">Profile</h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              You can update the details.
            </span>
          </div>
          <form className="py-1  text-center justify-center self-center items-center" onSubmit={formik.handleSubmit}>
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
            <div className="textbox flex flex-col md:items-stretch items-center justify-center  gap-10">
            <div className="name flex w-3/4  gap-10 md:flex-row flex-col">
              <input
                {...formik.getFieldProps("firstname")}
                type="text"
                name="firstname"
                className="p-2 rounded-xl"
                placeholder="First Name"
              />
              <input
                {...formik.getFieldProps("lastname")}
                type="text"
                name="lastname"
                className="p-2 rounded-xl"
                placeholder="Last Name"
              />
            </div>
            <div className="name flex w-3/4 gap-10 md:flex-row flex-col">
              <input
                {...formik.getFieldProps("mobile")}
                type="text"
                name="mobile"
                className="p-2 rounded-xl"
                placeholder="mobile number"
              />
              <input
                {...formik.getFieldProps("email")}
                type="text"
                name="email"
                className="p-2 rounded-xl"
                placeholder="email*"
              />
            </div>
            
              <input
                {...formik.getFieldProps("address")}
                type="text"
                name="address"
                className="p-2 md:w-auto w-3/4 rounded-xl"
                placeholder="Address"
              />
              
              <button
                className="text-green-300 rounded-lg border-green-300 border-2 px-10 font-bold hover:text-black transition hover:bg-blue hover:bg-opacity-5 hover:border-none hover:bg-gradient-to-r hover:from-indigo-500 hover:from-10% via-sky-500 hover:via-30% hover:to-emerald-500 md:w-auto md:p-1 p-2 w-3/4 to-90%"
                type="submit"
              >
                upadate
              </button>
            
              
            </div>
            <div className="text-center py-4">
              <span className="text-gray-500">
                come back later{" "}
                <Link to="/" className="text-blue-400 font-bold">
                  - Logout
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
