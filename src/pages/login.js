import { Link, useNavigate } from "react-router-dom";
import Banner from "../assets/CA banner.png";
import { useState } from "react";
// import { login } from "../api/login";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  // State management
  const [loginFields, setLoginFields] = useState({
    email: "",
    password: "",
  });

  const onLogin = (e) => {
    console.log(loginFields);
    e.preventDefault();
    axios
      .post(
        "https://goldfish-app-kl4y2.ondigitalocean.app/users/login/",
        loginFields
      )
      .then((response) => console.log(response));
  };

  // Dropdown Menu
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  // Onclick function for forgot password
  const forgotPass = () => {
    navigate("/forgotpass");
  };

  return (
    <div className=" py-8 mx-16 h-screen">
      <div className="flex">
        {/* -------Image container--------- */}
        <div className=" w-1/2 sm:w-0 md:w-0 ">
          <img
            src={Banner}
            alt=""
            className="h-[650px] sm:hidden md:hidden"
          ></img>
        </div>

        {/* -----------Login Content----------- */}
        <div className="w-1/2 flex flex-col justify-center items-center sm:w-full sm:mt-24 md:w-full md:mt-24">
          <div>
            <h1 className=" font-bold text-[40px] text-center sm:text-[25px]">
              Login to your account
            </h1>
            <div className="flex items-center justify-center">
              <p className="text-gray-700 font-normal text-lg sm:text-base">
                Don't have an account?
              </p>
              <Link to="/signup" className=" text-[#4790F8] underline ml-1">
                Sign Up
              </Link>
            </div>
          </div>

          {/* ----------FORM CONTAINER--------- */}
          <div className="flex flex-col w-2/3 mt-14 sm:mt-5">
            <input
              placeholder="Username/ E-mail"
              type="text"
              name="email"
              style={styles.input}
              onChange={(text) =>
                setLoginFields({ ...loginFields, email: text.target.value })
              }
            />
            <input
              placeholder="Password"
              type="password"
              name="password"
              style={styles.input}
              onChange={(text) =>
                setLoginFields({
                  ...loginFields,
                  password: text.target.value,
                })
              }
            />
            <div className="flex mt-3">
              <button
                className=" w-full text-right text-[#4790F8]"
                onClick={forgotPass}
              >
                Forgot Password?
              </button>
            </div>

            <button
              className=" bg-[#1075FF] h-11 rounded-lg text-white mt-8"
              onClick={onLogin}
            >
              Sign In
            </button>
          </div>

          <div className="flex justify-center">
            <button
              className="rounded-xl text-black border px-10 py-3 mt-8"
              onClick={toggleDropdown}
            >
              Sign-in with social media
            </button>
            {isOpen && (
              <div className="border rounded-lg flex flex-col">
                <h1 className=" font-medium text-xl">
                  Sign-in with social media
                </h1>
                <div className=" p-3.5">
                  <div style={styles.dropdown}>
                    <MdEmail />
                    Sign-in with Gmail
                  </div>

                  <div className="flex justify-center items-center">
                    <FaFacebook /> Sign-in with Facebook
                  </div>
                  <div className="flex justify-center items-center">
                    <AiFillGithub />
                    Sign-in with Github
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  input: {
    backgroundColor: "#F4F4F4",
    height: "45px",
    borderRadius: ".5rem",
    margin: "0.5rem",
    padding: "0.5rem",
    fontWeight: 400,
    marginLeft: ".5rem",
    marginTop: ".5rem",
  },

  dropdown: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F4F4F4",
    borderRadius: "10px",
    color: "#242424",
  },
};
export default Login;
