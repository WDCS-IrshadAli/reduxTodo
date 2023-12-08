import React, { useState } from 'react'
import { Button, Input, Alert, Spinner } from "@material-tailwind/react";
// import axios from "axios";


const Login = () => {

  const [data, setData] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const [isSuccess, setIsSuccess] = useState(null);
  // const [open, setOpen] = useState(true);

  //inputHandler function
  const inputHandler = (e) => {
    const {name, value} = e.target;
    setData({
      ...data,
      [name]: value
    })
  };

  //loginSubmit function
  const loginSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const { email, password } = data;
      if (email.trim() === "" || password.trim() === "") {
        setIsLoading(false);
        setIsSuccess(null);
        return setIsError("Please fill out all the fields!");
      }

      //config
      // const config = {
      //   headers: {
      //     "Content-Type": "application/json"
      //   }
      // };

      // const res = await axios.post("url", data, config);
      setIsLoading(false);
      setIsError(null);
      setIsSuccess("User logged in successfully.");
    } catch (err) {
      setIsLoading(false);
      setIsSuccess(null);
      setIsError(err ? err.message : "Something went wrong while logging user!");
    }
  }

  return (
    <>
    {/* Loading Spinner */}
      {
        isLoading ?
        <div className="absolute h-[91.5vh] w-screen z-50 flex flex-col justify-center items-center" style={{ background: "rgba( 255, 255, 255, 0.25 )", boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )", backdropFilter: "blur( 2px )", border: "1px solid rgba( 255, 255, 255, 0.18 )"}}>
          <Spinner className="h-16 w-16" color="indigo" />
          <span className="mt-3 text-black">Loading</span>
        </div>
        :
        ""
      }
      <div className="flex flex-col p-3 sm:p-5 items-center">
          <div className="w-full md:w-[50vw]">
              <h1 className="text-3xl pt-3 pb-5">LOGIN FORM</h1>
              {/* Error message showing */}
              {
                isError ? 
                <Alert color="red" className="mb-5" >
                  {isError}
                </Alert>
                :
                ""
              }
              {/* Success message showing */}
              {
                isSuccess ? 
                <Alert color="green" className="mb-5" >
                  {isSuccess}
                </Alert>
                :
                ""
              }

              <form className="flex flex-col gap-6" onSubmit={loginSubmit}>
                <Input variant="outlined" label="Email" type="email" name="email" onChange={inputHandler} value={data.email} required />
                <Input variant="outlined" label="Password" type="password" name="password" onChange={inputHandler} value={data.password} required />

                <Button type="submit">Submit</Button>
              </form>
          </div>
      </div>

    </>
  )
}

export default Login
