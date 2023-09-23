import Banner from "../assets/CA banner.png";
import { AiFillMobile } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const ForgotPass = () => {
  const navigate = useNavigate();
  const sms = () => {
    navigate("/sms");
  };
  const email = () => {
    navigate("/email");
  };
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

          <div>
            <div>
              <div className="flex mt-[3.75rem]">
                <div style={styles.container} onClick={sms}>
                  <AiFillMobile className="h-[100px] w-[65px] text-[#404040]" />
                  <div className="ml-[40px]">
                    <p>Send via SMS:</p>
                    <p>..........431</p>
                  </div>
                </div>
              </div>
              <div style={styles.container} className="mt-10" onClick={email}>
                <MdEmail className="h-[100px] w-[65px] text-[#404040]" />
                <div className="ml-[40px]">
                  <p>Send via E-mail:</p>
                  <p>......ek@gmail.com</p>
                </div>
              </div>
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
    alignItems: "center",
    fontSize: "18px",
    fontWeight: 500,
    padding: 10,
    width: "450px",
    height: "80px",
    cursor: "pointer",
  },
};

export default ForgotPass;
