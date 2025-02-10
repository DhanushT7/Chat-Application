import React,{useState} from 'react';
import './forgotPass.css';

function forgotPass(){
  const [otp,setOtp] = useState(["","","",""]);

  const handleChange = (e,index) => {
    let newOtp = [...otp];
    newOtp[index] = e.target.value;
    setOtp(newOtp);

    if(e.target.value && index<3){
      document.getElementById(`otp-{index+1}`).focus();
    }
  };

  const handleVerify = () =>{
    alert(`Entered OTP : ${otp.join("")}`);
  };

  return(
    <div className="container">
      <div className="verify-box">
        <h2>E-mail Verification</h2>
        <p>We have sent a code to your email <strong>{email}</strong></p>
        <div className="otp-input">
          {otp.map((digits,index)=> (
            <input
              key = {index}
              id = {`otp-${index}`}
              type = "text"
              maxLength={1}
              value={digit}
              onChange={(e)=>handleChange(e,index)}
            />
          ))}
        </div>
        <button className="verify-btn" onClick={handleVerify}>Verify Account</button>
        <p>Didn't receive code? <a href="#">Resend OTP</a></p>
      </div>
    </div>
  );
}
export default forgotPass ;