import './login.css';

function Login(){

  function generateCaptcha(length = 6) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let captcha = "";
    for (let i = 0; i < length; i++) {
        captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return captcha;
  }


  return(
    <div className="page">
       
      <div className="login-box">

        <div className="heading">Log In</div>

        <div className="credentials-input-box">

          <div className="username-input-box">
            <label  className="username-label" htmlFor="username">Username</label>
            <input className="username" id="username" type="text" placeholder="username"></input>
          </div>

          <div className="password-input-box">
            <label className="password-label" htmlFor="password">Password</label>
            <input className="pin" id="password" type="password" placeholder="password"></input>
          </div>

          <div className="captcha-input-box">
            <label className="captcha-label" htmlFor="captcha-input">Captcha</label>

             <div className="captcha">
                <div className="captcha-display">{generateCaptcha()}</div>
                <input className="captcha-input" id="captcha-input" type="text" placeholder="captcha" ></input>
              </div>
                
          </div>

        </div>

        <div className="forgot-password"><a>Forgot Password?</a></div>

        <div className="log-in">
          <button  className="login-button" >log in</button>
          <p>Don&apos;t have an account? <span className="signup" ><a>Sign Up</a></span></p>
        </div>

       </div>

    </div>
  );
}
export default Login;