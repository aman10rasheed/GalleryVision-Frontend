import React from "react";

const Register = () => {
  return (
    <div className="bg-primary h-screen w-screen flex justify-center items-center">
      <div className="2xl:w-1/4 lg:w-1/3 md:w-1/2 w-full">
        <div className="card overflow-hidden sm:rounded-md rounded-none">
          <div className="px-6 py-8">
            <a href="index.html" className="flex justify-center mb-8">
              <img className="h-6" src="assets/images/logo-dark.png" alt="" />
            </a>

            <div className="mb-4">
              <label className="mb-2" htmlFor="LoggingName">
                Name
              </label>
              <input
                id="LoggingName"
                className="form-input"
                type="text"
                placeholder="Enter your name"
              />
            </div>

            <div className="mb-4">
              <label className="mb-2" htmlFor="LoggingEmailAddress">
                Email Address
              </label>
              <input
                id="LoggingEmailAddress"
                className="form-input"
                type="email"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-4">
              <label className="mb-2" htmlFor="loggingPassword">
                Password
              </label>
              <input
                id="loggingPassword"
                className="form-input"
                type="password"
                placeholder="Enter your password"
              />
            </div>

            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                className="form-checkbox rounded"
                id="checkbox-signin"
              />
              <label className="ms-2" htmlFor="checkbox-signin">
                I accept{" "}
                <a href="#" className="text-primary">
                  Terms and Conditions
                </a>
              </label>
            </div>

            <div className="flex justify-center mb-3">
              <button className="btn w-full text-white bg-primary">
                {" "}
                Sign Up Free{" "}
              </button>
            </div>
          </div>
        </div>

        <p className="text-white text-center mt-8">
          Already have an account ?
          <a href="auth-login.html" className="font-medium ms-1">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
