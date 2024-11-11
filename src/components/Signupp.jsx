import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase.init";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Signupp = () => {
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSignup = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);

    // reset error and status
    setErrorMessage("");
    setSuccess(false);

    if (password.length < 6) {
      setErrorMessage("PAssword should be 6 characters!");
      return;
    }

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;
    if (!passwordRegex.test(password)) {
      setErrorMessage("Password use properly");
      return;
    }

    // create user with email and password
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess(true);
      })
      .catch((error) => {
        console.log("Error", error);
        setErrorMessage(error.message);
        setSuccess(false);
      });
  };
  return (
    <div className="card bg-base-100 w-full max-w-sm mx-auto mb-8 shrink-0 shadow-2xl">
      <h1 className="text-3xl font-bold">Signup now!</h1>
      <form onSubmit={handleSignup} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control relative">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
          <button
            onClick={() => setShowPassword(!showPassword)}
            className="btn btn-xs absolute right-2 top-12"
          >
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </button>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control">
          <label className="cursor-pointer justify-start gap-4 label">
            
            <input
              type="checkbox"
              defaultChecked
              className="checkbox checkbox-success"
            />
            <span className="label-text">Accept Our Terms And Condition.</span>
          </label>
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      {errorMessage && <p className="text-red-600">{errorMessage}</p>}
      {success && <p className="text-green-700">SignUp Successful!</p>}
    </div>
  );
};

export default Signupp;
