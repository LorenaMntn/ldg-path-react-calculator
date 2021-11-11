import React, { useState } from "react";
import './buttons.css'

function Buttons (props) {
    return(
        <div>
            <section className="action-buttons">
                <button className="reset" onClick={props.resetClick} value={'AC'}>AC</button>
                <button className="negate">+/-</button>
                <button className="percentage" onClick={props.operatorClick} value={'%'}>%</button>
                <button className="divide" onClick={props.operatorClick} value={"/"}>/</button>
                <button onClick={props.numberClick} value={'7'}>7</button>    
                <button onClick={props.numberClick} value={'8'}>8</button>        
                <button onClick={props.numberClick} value={'9'}>9</button>        
                <button className="multiply" onClick={props.operatorClick} value={'x'}>x</button>
                <button onClick={props.numberClick} value={'4'}>4</button>    
                <button onClick={props.numberClick} value={'5'}>5</button>        
                <button onClick={props.numberClick} value={'6'}>6</button>        
                <button className="subtract" onClick={props.operatorClick} value={"-"}>-</button>  
                <button onClick={props.numberClick} value={'1'}>1</button>    
                <button onClick={props.numberClick} value={'2'}>2</button>        
                <button onClick={props.numberClick} value={'3'}>3</button>        
                <button className="add" onClick={props.operatorClick} value={"+"}>+</button>
                <button className="btn-zero" onClick={props.numberClick} value={"0"}>0</button>        
                <button value={"."}>.</button>        
                <button className="result" onClick={props.resultClick} value={'='}>=</button>    
        </section>
        </div>
    )
}

export default Buttons;