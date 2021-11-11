import React, { useState } from "react";
import Screen from './Screen/Screen'
import Buttons from './Buttons/Buttons'
import * as math from "mathjs";
import './app.css'

function App() {

  const [initialValue, setInitalValue] = useState('0');
  const [newValue, setNewValue] = useState('0');
  const [operator, setOperator] = useState(null);

  const clearHandle = () => setInitalValue('0');

  const percentageCalc = () => setInitalValue(String(initialValue / Math.pow(10, 2)));

  const signHandle = () => {
    setInitalValue(initialValue > 0 ? `-${initialValue}` : `${initialValue.substring(1)}`);
  }

  const setDecimal = () => {
    if (!initialValue.toString().includes(".")) {
      setInitalValue(initialValue.toString() + ".");
    }
  }

  function resultHandle() {  
    switch (operator) {
      case "+":
          console.log(operator) 
          setInitalValue(String(parseInt(newValue) + parseInt(initialValue)));
          break;
        case "-":
          setInitalValue(String(parseInt(newValue) - parseInt(initialValue)));
          break;
        case "/":
          setInitalValue(String(parseInt(newValue) / parseInt(initialValue)));
          break;
        case "x":
          setInitalValue(String(parseInt(newValue) * parseInt(initialValue)));
          break;
        default:
          break;
      }
  }

  const operatorHandle = (e) => {
    switch(e.target.value) {
      case "+":
        resultHandle();
        setOperator("+");
        break;
      case "-":
        resultHandle();
        setOperator("-");
        break;
      case "/":
        resultHandle();
        setOperator("/");

        break;
      case "x":
        resultHandle();
        setOperator("x");
        break;
      default:
        return;
    }
  }

  const getResult = () => {
    resultHandle();
    setOperator("");
  };

  function handleChange(e){
    let newValue = e.target.value;

    if(initialValue !== '0' && !operator){
      setInitalValue (prevItems => {
        return [...prevItems, newValue];
      });
      setNewValue(initialValue)
    }
    else{
        setInitalValue (() => {
          return [...newValue];
        });
        setNewValue(initialValue)
    }

    if(e.target.value === 'AC') return clearHandle();
    if(e.target.value === '%') return percentageCalc();
    if(e.target.value === 'sign') return signHandle();
    if(e.target.value === '=') return resultHandle(newValue);
    if(e.target.value === '.') return setDecimal();
  }

  return (
    <div>
      <main>
        <Screen value={initialValue} />
        <Buttons 
          numberClick={handleChange} 
          resetClick = {clearHandle}
          percentageClick = {percentageCalc}
          operatorClick = {operatorHandle}
          resultClick = {getResult}
          signClick = {signHandle}
          decimalClick = {setDecimal}
          />
      </main>
    </div>
  );
}

export default App;
