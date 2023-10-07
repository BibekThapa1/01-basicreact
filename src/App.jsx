import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
let [counter, setCounter] = useState(15)

  let addValue = () =>{
    if(counter == 20) return;
    counter++;
    setCounter(counter);
  }
  let decreaseValue = () =>{
    if(counter == 0) return;
    counter--;
    setCounter(counter);
  }
  return (
    <>
      <h1>Hello everyone</h1>
      <p>Counter value : : {counter}</p>
      <button onClick={addValue}>Add value : {counter}</button>
      <br />
      <button onClick={decreaseValue}> Decrease value : {counter}</button>
    </>
  );
}

export default App;
