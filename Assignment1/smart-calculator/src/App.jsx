import { useState } from 'react'
import { evaluate } from 'mathjs'
import './App.css'
import Header from "./components/header"
import Display from "./components/display"
import Keypad from "./components/keypad"

function App() {
  // states
  const [expr, setExpr] = useState("")
  const [output, setOutput] = useState("")

  function tryEvaluate(input) {
    try {
      return evaluate(input)
    } catch {
      setExpr("")
      return "Error"
    }
  }

  function equals() {
    setOutput(String(tryEvaluate(expr)))
    setExpr(String(tryEvaluate(expr)))
  }

  function clearAll() {
    setExpr("")
    setOutput("");
  }

  function backspace() {
    if (output != "Error" && output != "undefined") {
      setOutput(output.slice(0, -1))
      setExpr(expr.slice(0, -1))
    }
    else {
      setOutput("")
      setExpr("")
    }
  }

  function addExpr(char) {
    setOutput("")
    setExpr(expr + char)
  }

  return (
    <main className="main">
      <div className="calculator">
        <Header/>
        <Display value={[expr,output]}/>
        <Keypad
          addChar={addExpr}
          delChar={backspace}
          reset={clearAll}
          handleEquals={equals}
        />
        
      </div>
    </main>
  )
}

export default App
