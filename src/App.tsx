import React, { useState } from "react";
import "./App.css";

const useInput = (initialValue: number) => {
  const [inputvalue, setInputvalue] = useState(initialValue);
  return {
    inputvalue,
    setInputvalue,
    bind: {
      inputvalue,
      onChange: (event: any) => {
        setInputvalue(event.target.value);
      }
    }
  };
};
const factorial = (n: number): number => {
  if (n == 0 || n == 1){
    return 1;
  }else {
    return factorial(n-1) * n
  }
} 

const App = () => {
  const { inputvalue, bind } = useInput(0);
  const [value, setValue] = useState(0);


  const handleSubmit = (evt: any) => {
    evt.preventDefault();
    setValue(factorial(inputvalue));
  };
  return (
    <div>
      <h1>Factorial Calculator</h1>
      <form onSubmit={handleSubmit}>
        <input 
        {...bind}
        type="number" 
        defaultValue="0"
        placeholder="Enter a number..." />
        <br />
        <button>Calculate Factorial</button>
      </form>
      <h2>Factorial: {value}</h2>
    </div>
  );
};

export default App;
