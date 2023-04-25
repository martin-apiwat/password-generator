import React from "react";

export default function PasswordDisplay({ password }) {
   return (
      <div className="password-container">
         <h2>Password Generator</h2>
         <div className="password-box">
            <h3>{password}</h3>
         </div>
      </div>
   );
}
