import React,{useState} from "react";
import "./newPass.css";

const newPass = ()=>{
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");
    const [isChecked,setIsChecked] = useState(false);
    const [error,setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(password !== confirmPassword){
            setError("Passwords do not match!");
            return;
        }
        setError("");
        alert("Password successfully Reset!");
    };

    return (
        <div className = "container">
            <div className = "pass-box">
                <h2>Change Password</h2>
                <form onSubmit={handleSubmit}>
                    <label>New Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                        required
                    />
                    <label>Confirm Password</label>
                    <input
                        type = "password"
                        value = {confirmPassword}
                        onChange={(e)=> setConfirmPassword(e.target.value)}
                        required
                    />

                    {error && <p className="errorMessage">{error}</p>}

                    <div className="checkbox-container">
                        <input
                            type = "checkbox"
                            value = {isChecked}
                            onChange={(e)=> setIsChecked(!isChecked)}
                            required
                        />
                        <label>
                            I hereby accept the 
                            <a href="#">Terms & Conditions</a>
                        </label>
                    </div>
                    <button type="submit" className="reset-btn" disabled = {!isChecked}>
                        Reset Password
                    </button>
                </form>
            </div>
        </div>
    );
};

export default newPass ;