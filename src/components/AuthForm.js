import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);

  const switchAuthModeHandler = (event) => {
    event.preventDefault();
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    // optional: Add validation

    if (isLogin) {
    } else {
      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB-D8lnvrKQETNrAXBpnRaaErMpzDicw4o",
        {
          method: "POST",
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((res) => {
        if (res.ok) {
          console.log("create new user!!!");
          navigate("/flights");
        } else {
          return res.json().then((data) => {
            // show an error modal
            console.log(data);
          });
        }
      });
    }
  };

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-blue-700 underline">
          {isLogin ? "Login" : "Sign Up"}
        </h1>
        <form className="mt-6">
          <div className="mb-2">
            <label className="block text-sm font-semibold text-gray-800">
              Email
            </label>
            <input
              type="email"
              className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              ref={emailInputRef}
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-semibold text-gray-800">
              Password
            </label>
            <input
              type="password"
              className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:blue-purple-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              ref={passwordInputRef}
            />
          </div>
          <a href="#" className="text-xs text-blue-600 hover:underline">
            {isLogin && "Forget Password?"}
          </a>
          <div className="mt-6">
            <button
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
              onSubmit={submitHandler}
            >
              {isLogin ? "Login" : "Create Account"}
            </button>
          </div>
          <button
            className="mt-8 text-xs font-light text-center text-gray-700"
            onClick={switchAuthModeHandler}
          >
            {" "}
            {isLogin ? "Create new account" : "Login with existing account"}
            {/* <a href="#" className="font-medium text-blue-600 hover:underline"> */}
            {/* </a> */}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
