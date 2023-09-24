import { Link } from "react-router-dom";
import Banner from "../assets/CA banner.png";
import { useState } from "react";
import axios from "axios";
const Signup = () => {
  const [signupFields, setSignupFields] = useState({
    username: "",
    email: "",
    password: "",
  });
  const onSubmit = () => {
    console.log("response", signupFields);
    let jsonData = JSON.stringify(signupFields);
    console.log(jsonData)
    axios
      .post("https://goldfish-app-kl4y2.ondigitalocean.app/users/register/", jsonData)
      
      .then((response) => console.log(response));
  };

  return (
    <div className=" py-8 mx-16 h-screen">
      <div className="flex">
        {/* Image container */}
        <div className="w-1/2 sm:w-0 md:w-0">
          <img
            src={Banner}
            alt=""
            className=" h-[650px] md:hidden sm:hidden"
          ></img>
        </div>

        {/* -----------Signup container------------- */}
        <div className="w-1/2 flex flex-col justify-center items-center sm:w-full sm:mt-10 md:w-full md:mt-10">
          <div className="">
            <div>
              <h1 className=" font-bold text-5xl text-center sm:text-[30px]">
                Create an account
              </h1>
              <div className="flex items-center justify-center mt-5">
                <p className="text-gray-700 font-normal text-lg sm:text-base">
                  Already have an account?
                </p>
                <Link to="/login" className=" text-[#4790F8] underline ml-1">
                  Sign In
                </Link>
              </div>
            </div>

            {/* ----------FORM CONTAINER--------- */}
            <div className="flex flex-col mt-14 sm:mt-6">
              <input
                placeholder="Username"
                type="text"
                style={styles.input}
                onChange={(text) =>
                  setSignupFields({
                    ...signupFields,
                    username: text.target.value,
                  })
                }
              />

              <div className="w-full overflow-hidden">
                <input
                  placeholder="First Name"
                  type="text"
                  style={styles.input}
                  className=" sm:w-[93%]"
                />
                <input
                  placeholder="Last Name"
                  type="text"
                  style={styles.input}
                  className=" sm:w-[93%]"
                />
              </div>
              <input
                placeholder="E-mail"
                type="email"
                style={styles.input}
                onChange={(text) =>
                  setSignupFields({
                    ...signupFields,
                    email: text.target.value,
                  })
                }
              />
              <input
                placeholder="Password"
                type="password"
                style={styles.input}
                onChange={(text) =>
                  setSignupFields({
                    ...signupFields,
                    password: text.target.value,
                  })
                }
              />
              <div></div>
              <div className="flex mt-3 ml-2 sm:mt-8">
                <input type="checkbox" className="bg-[#F4F4F4] mr-2" />
                <p>I have read and agree to Terms of Service</p>
              </div>

              <button
                className=" bg-[#1075FF] h-11 rounded-lg text-white mt-8"
                onClick={onSubmit}
              >
                Sign Up
              </button>
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
export default Signup;
