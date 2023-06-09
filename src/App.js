import React, { useState, useRef } from "react";
import "./App.css";

function App() {
  const inputRefs = useRef([]);

  const [numbers, setNumbers] = useState(["", "", "", "", "", ""]);

  function handleChange(event, index) {
    const input = event.target.value;
    if (!isNaN(input) && input.length <= 1) {
      const newNumbers = [...numbers];
      newNumbers[index] = input;
      setNumbers(newNumbers);

      // shift focus to the next input field
      if (index < inputRefs.current.length - 1) {
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

export default App;
