import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { evaluate } from 'mathjs'
import './App.css'

function App() {
  const [expr, setExpr] = useState("")
  const [output, setOutput] = useState("")

  function tryEvaluate(input) {
    try {
      console.log(evaluate(input))
      return evaluate(input)
    } catch {
      return "Error"
    }
  }

  function equals() {
    console.log(expr)
    setOutput(String(tryEvaluate(expr)))
  }

  function clearAll() {
    setExpr("")
    setOutput("");
  }

  function backspace() {
    setExpr(expr.slice(0, -1))
  }

  return (
    <>
      <div className="smart-calculator">
        <div className="display">
          <div>{expr || "0"}</div>
          <div>= {output}</div>
        </div>
      <div className="buttons">
        {["7","8","9","/","4","5","6","*","1","2","3","-","0",".","^","+"].map(k => (
          <button key={k} onClick={() => setExpr(expr + k)}>
            {k}
          </button>
        ))}
      </div>

      <button onClick={clearAll} className="clear">C</button>
      <button onClick={backspace} className="delete">X</button>
      <button onClick={equals} className="equal">=</button>

      </div>
    </>
  )
}

export default App
