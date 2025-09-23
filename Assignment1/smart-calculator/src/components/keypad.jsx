import React from 'react'
import Key from "./key"

function Keypad({addChar, delChar, reset, handleOperator, handleEquals}) {

    return (
        <div className="keypad">
      <Key text="7" onClick={() => addChar("7")}/>
      <Key text="8" onClick={() => addChar("8")}/>
      <Key text="9" onClick={() => addChar("9")}/>
      <Key text="del" type={1} onClick={() => delChar()}/>
      <Key text="4" onClick={() => addChar("4")}/>
      <Key text="5" onClick={() => addChar("5")}/>
      <Key text="6" onClick={() => addChar("6")}/>
      <Key text="+" onClick={() => addChar("+")}/>
      <Key text="1" onClick={() => addChar("1")}/>
      <Key text="2" onClick={() => addChar("2")}/>
      <Key text="3" onClick={() => addChar("3")}/>
      <Key text="-" onClick={() => addChar("-")}/>
      <Key text="." onClick={() => addChar(".")}/>
      <Key text="0" onClick={() => addChar("0")}/>
      <Key text="/" onClick={() => addChar("/")}/>
      <Key text="x" onClick={() => addChar("*")}/>
      <Key text="clear" type={1} area="clear" onClick={() => reset()}/>
      <Key text="=" type={2} area="equals" onClick={() => handleEquals()}/>
        </div>
    )
}

export default Keypad