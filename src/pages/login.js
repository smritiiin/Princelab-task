import { Link, useNavigate } from "react-router-dom";
import Banner from "../assets/CA banner.png";
import { useState } from "react";
import { login } from "../api/login";

const Login = () => {
  const navigate = useNavigate();
  const [loginFields, setLoginFields] = useState({
    email: "",
    password: "",
  });

  // Dropdown Menu
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const onLogin = async (e) => {
    e.preventDefault();
    const resp = await login({ email, password });
    alert("Login Sucessful..");
    navigate("/");
  };

  // Onclick function for forgot password
  const forgotPass = () => {
    navigate("/forgotpass");
  };

  return (
    <div className=" py-8 ml-12 h-screen sm:ml-0">
      <div className="flex justify-center">
        {/* Image container */}
        <div className=" w-1/3 sm:hidden">
          <img src={Banner} alt="" className="h-[650px]"></img>
        </div>

        {/* -----------Login Content----------- */}
        <div className="w-2/3 flex flex-col justify-center items-center sm:w-4/5 sm:mt-24">
          <div className="">
            <div>
              <h1 className=" font-bold text-5xl text-center sm:text-[28px]">
                Login to your account
              </h1>
              <div className="flex items-center justify-center mt-5">
                <p className="text-gray-700 font-normal text-lg sm:text-base">
                  Don't have an account?
                </p>
                <Link to="/signup" className=" text-[#4790F8] underline ml-1">
                  Sign Up
                </Link>
              </div>
            </div>

            {/* ----------FORM CONTAINER--------- */}
            <div className="flex flex-col mt-14 sm:mt-5">
              <input
                placeholder="Username/ E-mail"
                type="text"
                style={styles.input}
                onChange={(text) =>
                  setLoginFields({
                    ...loginFields,
                    email: text.target.value,
                  })
                }
              />
              <input
                placeholder="Password"
                type="password"
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
                <div className="border ">
                  <ul>
                    <li>Option 1</li>
                    <li>Option 2</li>
                    <li>Option 3</li>
                  </ul>
                </div>
              )}
            </div>
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
};
export default Login;
