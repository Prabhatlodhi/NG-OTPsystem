import React, { useState } from "react";
import './App.css';

function App() {

  const [number, setNumber] = useState("");

  function handleChange(event) {
    const input = event.target.value;
    if (!isNaN(input) && input.length <= 1) {
      setNumber(input);
    } else {
      setNumber("");
    }
  }

   

  return (
    <div className="App">
       <div className="child_div" >
          <h3>Enter verification code</h3>
          <div>
     
        <input
          
          type="tel"
          value={number}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />

 
     
    </div>
          <div>
            <button>Clear</button>
            <button>Get OTP</button>
          </div>
       </div>
    </div>
  );
}

export default App;
