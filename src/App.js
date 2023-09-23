import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/signup";
import Login from "./pages/login";
import ForgotPass from "./pages/forgotPass";
import Sms from "./pages/sms";
import Email from "./pages/email";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotpass" element={<ForgotPass />} />
        <Route path="/sms" element={<Sms />} />
        <Route path="/email" element={<Email />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
