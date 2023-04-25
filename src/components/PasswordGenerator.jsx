import React, { useState } from "react";
import {
   lowercaseLetters,
   uppercaseLetters,
   specialChars,
   numbers,
} from "../characters/";

export default function PasswordGenerator({ setPassword }) {
   const [passwordLength, setPasswordLength] = useState(10);
   const [includeUppercase, setIncludeUppercase] = useState(false);
   const [includeSpecialChars, setIncludeSpecialChars] = useState(false);
   const [includeNumbers, setIncludeNumbers] = useState(false);

   function generatePassword() {
      let characters = [...lowercaseLetters];
      if (includeUppercase) {
         characters.push(...uppercaseLetters);
      }
      if (includeSpecialChars) {
         characters.push(...specialChars);
      }
      if (includeNumbers) {
         characters.push(...numbers);
      }

      let password = "";
      for (let i = 0; i < passwordLength; i++) {
         password += characters[Math.floor(Math.random() * characters.length)];
      }

      return password;
   }
   return (
      <div className="generator-container">
         <div className="character-box">
            <h5>Character Length</h5>
            <h3>{passwordLength}</h3>
         </div>
         <div className="character-bar">
            <input
               type="range"
               name="password-length"
               min="1"
               max="20"
               value={passwordLength}
               onChange={(e) => {
                  setPasswordLength(e.target.value);
               }}
            />
            <div className="checkbox">
               <input
                  type="checkbox"
                  id="uppercase"
                  onChange={() => setIncludeUppercase(!includeUppercase)}
               />
               <label htmlFor="uppercase">Include uppercase letters</label>
            </div>
         </div>
         <div className="checkbox">
            <input
               type="checkbox"
               id="special-chars"
               checked={includeSpecialChars}
               onChange={() => setIncludeSpecialChars(!includeSpecialChars)}
            />
            <label htmlFor="special-chars">Include symbols</label>
         </div>
         <div className="checkbox">
            <input
               type="checkbox"
               id="numbers"
               checked={includeNumbers}
               onChange={() => setIncludeNumbers(!includeNumbers)}
            />
            <label htmlFor="numbers">Include numbers</label>
         </div>
         <button
            className="generate-button"
            onClick={() => setPassword(generatePassword())}
         >
            Generate
         </button>
      </div>
   );
}
