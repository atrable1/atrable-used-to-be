import React from "react";
import "./VerifyEmail.css"

function VerifyEmail() {
  return (
    <div className="verifyemail_container">
      <div className="verifyemail_title">Verification email has been sent</div>
      <div className="verifyemail_content">Please verify your email</div>
      <button className="verifyemail_button">Resend verification email</button>
    </div>
  );
}

export default VerifyEmail;
