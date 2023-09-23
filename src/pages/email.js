import Banner from "../assets/CA banner.png";
import { MdEmail } from "react-icons/md";
import { TextInput } from "../components/Textfield";

//Update forgotten password using Email
const Email = () => {
  return (
    <div className=" py-8 ml-12 h-screen">
      <div className="flex justify-center">
        <div>
          <img src={Banner} alt="" className="w-[765px] h-[665px]"></img>
        </div>

        <div className="w-3/4 flex flex-col mt-3 items-center">
          <h1 className=" font-medium text-[55px] text-center text-[#2457FF]">
            Forgot Password?
          </h1>
          <div className="mt-3 w-[330px] mr-28">
            <p className="text-gray-700 font-normal text-lg">
              Please select one of the contact methods to reset your password.
            </p>
          </div>

          <div style={styles.container} className="relative">
            <MdEmail className="w-[66px] h-[105px]" />
            <p className=" font-semibold text-base">
              Enter your registered email
            </p>
            <p className=" text-sm">
              The recovery code was sent to your provided mobile number
            </p>
            <div className=" w-4/5 mt-10">
              <TextInput type="email" placeholder="Enter your email here" />
            </div>
            <div className=" absolute bottom-10">
              <button className=" text-white bg-[#0477EA] w-[350px] h-[50px] rounded-xl">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#F7F7F7",
    borderRadius: "30px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justify: "center",
    padding: 10,
    width: "450px",
    height: "450px",
    marginTop: "25px",
  },
  input: {
    width: "60px",
    height: "70px",
    backgroundColor: "#E6E6E6",
    borderRadius: "10px",
    marginRight: "20px",
  },
};

export default Email;
