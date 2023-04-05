import React, { useState, useRef } from "react";
import "./App.css";

function Nextq() {
  const inputRefs = useRef([]);

  const [numbers, setNumbers] = useState(["", "", "", "", "", ""]);

  function handleChange(event, index) {
  const input = event.target.value;
  if (input === "" && index > 0) {
    const newNumbers = [...numbers];
    newNumbers[index] = "";
    setNumbers(newNumbers);
    inputRefs.current[index - 1].focus();
  } else if (!isNaN(input) && input.length <= 1) {
    const newNumbers = [...numbers];
    newNumbers[index] = input;
    setNumbers(newNumbers);
    
    if (input === "" && index === 0) {
      // if the first input box is empty after backspace, keep focus on it
      inputRefs.current[index].focus();
    } else if (index < inputRefs.current.length - 1) {
      // otherwise, shift focus to the next input box
      inputRefs.current[index + 1].focus();
    }
  } else {
    const newNumbers = [...numbers];
    newNumbers[index] = "";
    setNumbers(newNumbers);
  }
}

  
  

  function handleClear() {
    setNumbers(["", "", "", "", "", ""]);
    inputRefs.current[0].focus(); // shift focus back to the first input field
  }

  function handleGetOTP() {
    const otp = numbers.join("");
    console.log("OTP:", otp);
  }

  return (
    <div className="App">
      <div className="child_div">
        <h3>Enter verification code</h3>
        <div>
          {numbers.map((number, index) => (
            <input
              key={index}
              type="tel"
              value={number}
              onChange={(event) => handleChange(event, index)}
              ref={(el) => (inputRefs.current[index] = el)} // save a reference to each input element
            />
          ))}

          <ul>
            {numbers.every((number) => number !== "") && (
              <li>OTP number: {numbers.join("")}</li>
            )}
          </ul>

          <div>
            <button onClick={handleClear}>Clear</button>
            <button onClick={handleGetOTP}>Get OTP</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nextq;
