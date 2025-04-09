import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './sign-up.css'


function Signup(){

  const navigate = useNavigate();

  function goToLogin(){
    navigate("/login");
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [isSignupDisabled, setSignupDisabled] = useState(true);

  function changePasswordColorGreen(){
    document.querySelector('.password')
    .setAttribute("style", "color:green;outline:2px solid rgb(16, 201, 16)");

    document.querySelector('.confirm-password')
    .setAttribute("style", "color:green;outline:2px solid rgb(16, 201, 16)");
  }

  function changePasswordColorRed(){
    document.querySelector('.password')
    .setAttribute("style", "color: rgb(245, 30, 30);outline:2px solid rgb(245, 30, 30)");

    document.querySelector('.confirm-password')
    .setAttribute("style", "color: rgb(245, 30, 30);outline:2px solid rgb(245, 30, 30)");
  }
  
  function handleEmailChange(event){
    setEmail(event.target.value);
  }

  function handlePasswordChange(event){
    setPassword(event.target.value);
  }

  function handleconfirmPasswordChange(event){
    setConfirmPassword(event.target.value);
  }

  useEffect(()=>{
    let newErrors = {};

    if(email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
      newErrors.email = 'Invalid email or username!'
    }

    if(password && password.length < 6){
      newErrors.password = 'must be atleast 6 characters!';
    }

    if(confirmPassword && confirmPassword !== password){
      newErrors.confirmPassword = 'Password does not match!'
      changePasswordColorRed();
    }

    if(password && confirmPassword && password === confirmPassword){
      changePasswordColorGreen();
    }

    if(!(email && password && confirmPassword)){
      newErrors.details = 'enter required details'
    }

    setErrors(newErrors);
    setSignupDisabled(Object.keys(newErrors).length > 0);

  }, [email, password, confirmPassword]);

  const handleSignUp =  async()=>{

    const res = await fetch("http://localhost:5001/api/signup", {
      method : "POST",
      headers : {'Content-Type':'application/json'},
      body : JSON.stringify({email:email, password:password}),
    });

    const data = await res.json();
    if(data.message == "success"){
      alert("account created!");
      setTimeout(()=>{
        navigate('/login');
      }, 1500);

    }else{
      alert(data.message);
    }  
    return;
  }

  return(
    <div className="page-body">
      
      <div className="signup-box">
        <div className="new-account">Create New Account</div>
        
        <div className="user-input-box">
          <div className="email-box">
            <label htmlFor="email">Email</label>
            <input value={email} className="email" id="email" type="email" placeholder="abc@gmail.com" onChange={handleEmailChange}></input>
            {errors.email && <p className="email-error">{errors.email}</p>}
          </div>

          <div className="password-box">
            <label htmlFor="password">Password</label>
            <input value={password} className="password" id="password" type="password" placeholder="" onChange={handlePasswordChange}></input>
            {errors.password && <p className="password-error">{errors.password}</p>}
          </div>
          
          <div className="confirm-pass-box">
            <label htmlFor="conf-pass">Confirm</label>
            <input value={confirmPassword} className="confirm-password" id="conf-pass" type="password" placeholder="" onChange={handleconfirmPasswordChange}></input>
            {errors.confirmPassword && <p className="confirmPassword-error">{errors.confirmPassword}</p>}
          </div>

          <button disabled={isSignupDisabled} className="signup-btn" onClick={handleSignUp}>Sign Up</button>
          <div className="Terms-box">
            <p className="terms">By Signing up, you agree to <b>Terms of Use</b> and <b>Privacy Policy</b></p>
          </div>

          <div className="sign-in-option">
            <p>Already have an account? <b style={{cursor:"pointer"}} onClick={goToLogin}>Sign in</b></p>
          </div>
        </div>

      </div>
    </div>
  );
}
export default Signup;
