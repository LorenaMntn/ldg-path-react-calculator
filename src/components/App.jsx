import React, { useState } from "react";
import Screen from './Screen/Screen'
import Buttons from './Buttons/Buttons'
import * as math from "mathjs";
import './app.css'

function App() {

  const [initialValue, setInitalValue] = useState('0');
  const [newValue, setNewValue] = useState('');
  const [operator, setOperator] = useState('');

  const clearHandle = () => {
    setInitalValue('0');
    setNewValue('0');
    setOperator('');
  }

  function operatorHandle (e) {
    setOperator(e.target.value);
  }

  const percentageCalc = () => {
    console.log(initialValue);
    return setInitalValue(String(Number(initialValue) / 100))
  };

  function resultHandle() {
      switch (operator) {
        case "+":
          setNewValue(Number(initialValue) + Number(newValue));
          break;
        case "-":
          setNewValue(Number(initialValue) - Number(newValue));
          break;
        case "/":
          setNewValue(Number(initialValue) / Number(newValue));
          break;
        case "x":
          setInitalValue(Number(initialValue) * Number(newValue));
          break;
        default:
          break;
      }
  }

  function handleChange(e){
    let newValue = e.target.value;

    if(initialValue !== '0' && !operator){
      setInitalValue (prevItems => {
        return [...prevItems, newValue];
      });
    }
    else{
        setInitalValue (() => {
          return [...newValue];
        });
        setOperator('');
    }

    if(e.target.value === '%') return percentageCalc();
    if(e.target.value === 'AC') return clearHandle();
    if(e.target.value === '=') return resultHandle();

  }

  return (
    <div>
      <main>
        <Screen value={initialValue}/>
        <Buttons 
          numberClick={handleChange} 
          operatorClick={operatorHandle}
          resetClick = {clearHandle}
          resultClick = {resultHandle}
          />
      </main>
    </div>
  );
}

export default App;
