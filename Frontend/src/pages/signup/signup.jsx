import './sign-up.css'
function Signup(){
  return(
    <div className="page-body">
      
      <div className="signup-box">
        <div className="new-account">Create New Account</div>
        
        <div className="user-input-box">
          <div className="email-box">
            <label htmlFor="email">Email</label>
            <input className="email" id="email" type="email" placeholder="email"></input>
          </div>

          <div className="password-box">
            <label htmlFor="password">Password</label>
            <input className="password" id="password" type="password" placeholder="password"></input>
          </div>
          
          <div className="confirm-pass-box">
            <label htmlFor="conf-pass">Confirm</label>
            <input className="confirm-password" id="conf-pass" type="password" placeholder="password"></input>
          </div>

          <button className="signup-btn">Sign Up</button>
          <div className="Terms-box">
            <p className="terms">By Signing up, you agree to <b>Terms of Use</b> and <b>Privacy Policy</b></p>
          </div>

          <div className="sign-in-option">
            <p>Already have an account? <b>Sign in</b></p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Signup;