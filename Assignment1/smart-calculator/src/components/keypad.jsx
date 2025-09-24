import React from 'react'
import Key from "./key"

function Keypad({addChar, delChar, reset, handleEquals, etc, changeGrid}) {

    return (
        <div className="keypad">
          {etc ? (
            <>
            <Key text="sin" onClick={() => addChar("sin(")}/>
            <Key text="cos" onClick={() => addChar("cos(")}/>
            <Key text="cot" onClick={() => addChar("tan(")}/>
            <Key text="del" type={1} onClick={() => delChar()}/>
            <Key text="sin⁻¹" onClick={() => addChar("asin(")}/>
            <Key text="cos⁻¹" onClick={() => addChar("acos(")}/>
            <Key text="tan⁻¹" onClick={() => addChar("atan(")}/>
            <Key text="(" onClick={() => addChar("(")}/>
            <Key text="log10" onClick={() => addChar("log10(")}/>
            <Key text="ln" onClick={() => addChar("log(")}/>
            <Key text="e" onClick={() => addChar("e")}/>
            <Key text=")" onClick={() => addChar(")")}/>
            <Key text="sqrt" onClick={() => addChar("sqrt(")}/>
            <Key text="cbrt" onClick={() => addChar("cbrt(")}/>
            <Key text="x²" onClick={() => addChar("square(")}/>
            <Key text="^" onClick={() => addChar("^")}/>
            <Key text="main" type={1} onClick={() => changeGrid()}/>
            <Key text="clear" type={1} onClick={() => reset()}/>
            <Key text="=" type={2} onClick={() => handleEquals()}/>
            <Key text="π" onClick={() => addChar("pi")}/>

          </>
        ) : (
          <>
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
            <Key text="%" onClick={() => addChar("%")}/>
            <Key text="x" onClick={() => addChar("*")}/>
            <Key text="etc" type={1} onClick={() => changeGrid()}/>
            <Key text="clear" type={1} onClick={() => reset()}/>
            <Key text="=" type={2} onClick={() => handleEquals()}/>
            <Key text="/" onClick={() => addChar("/")}/>
           </>
           )}
          </div>
    )
}

export default Keypad