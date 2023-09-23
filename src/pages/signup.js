import { Link } from "react-router-dom";
import Banner from "../assets/CA banner.png";
import { TextInput } from "../components/Textfield";
import { register } from "../api/register";
import { useState } from "react";
const Signup = () => {
  const [signupFields, setSignupFields] = useState({
    username: "",
    email: "",
    password: "",
  });
  const onSubmit = async (e) => {
    console.log("Clicked");
    e.preventDefault();

    const response = await register(signupFields);
    // console.log("response", signupFields);
  };

  return (
    <div className=" py-8 ml-12 h-screen sm:ml-0">
      <div className="flex justify-center">
        {/* Image container */}
        <div className="w-1/3 sm:hidden">
          <img src={Banner} alt="" className=" h-[650px]"></img>
        </div>

        {/* -----------Signup container------------- */}
        <div className="w-2/3 flex flex-col justify-center items-center sm:w-4/5 sm:mt-10">
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
              <div>
                
              </div>
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
