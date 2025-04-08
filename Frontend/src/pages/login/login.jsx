import './login.css';
import { useNavigate } from 'react-router-dom';
import {useState} from 'react';

function Login(){
  const navigate = useNavigate();

  const [captcha, setCaptcha]=useState("");
  const [gcaptcha, setgCaptcha]=useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogIn(){

    if(captcha===gcaptcha){

      const res = await fetch("http://localhost:5001/api/login", {
        method : "POST",
        headers : {'Content-Type':'application/json'},
        body : JSON.stringify({email:email, password:password}),
      });

      const data = await res.json();
      if(data.message == "success"){
        alert("account logged in!");
        setTimeout(()=>{
          navigate('/home');
        }, 1500);

        return;
      }else{
        alert("wrong login!");
        return;
      }

    }else{

      alert("Wrong Captcha");
      generateCaptcha();

    }
  }

  function generateCaptcha(length = 6) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let capt=""
    for (let i = 0; i < length; i++) {
        capt += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setgCaptcha(capt)
    return capt;
  }

  function handleEmailChange(event){
    setEmail(event.target.value);
  }

  function handlePasswordChange(event){
    setPassword(event.target.value);
  }

  function handleCaptchaChange(event){
    setCaptcha(event.target.value);
  }

  function handleForgot(){
    navigate('/forgotPass');
  }

  function handleSignUp(){
    console.log("working...");
    navigate('/signup');
  }

  return(
    <div className="page">
       
      <div className="login-box">

        <div className="heading">Log In</div>

        <div className="credentials-input-box">

          <div className="username-input-box">
            <label  className="username-label" htmlFor="username">Username</label>
            <input className="username" id="username" type="text" placeholder="username" onChange={handleEmailChange}></input>
          </div>

          <div className="password-input-box">
            <label className="password-label" htmlFor="password">Password</label>
            <input className="pin" id="password" type="password" placeholder="password" onChange={handlePasswordChange}></input>
          </div>

          <div className="captcha-input-box">
            <label className="captcha-label" htmlFor="captcha-input">Captcha</label>

             <div className="captcha">
                <div className="captcha-display">{generateCaptcha()}</div>
                <input className="captcha-input" id="captcha-input" type="text" placeholder="captcha" onChange={handleCaptchaChange}></input>
              </div>
                
          </div>

        </div>

        <div className="forgot-password"><a onClick={handleForgot}>Forgot Password?</a></div>

        <div className="log-in">
          <button onClick={handleLogIn}  className="login-button" >log in</button>
          <p>Don&apos;t have an account? <span className="signup" ><a onClick={handleSignUp}>Sign Up</a></span></p>
        </div>

       </div>

    </div>
  );
}
export default Login;
