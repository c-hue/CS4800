import { useState, useEffect } from 'react'
import * as math from 'mathjs'
import './App.css'
import Header from "./components/header"
import Display from "./components/display"
import Keypad from "./components/keypad"

function App() {
  // states
  const [expr, setExpr] = useState("")
  const [output, setOutput] = useState("")
  const [change, setEtc] = useState(false)

  function tryEvaluate(input) {
    try {
      const answer = math.evaluate(input)
      if (math.typeOf(answer) == "Complex" && answer.im !== 0) {
        setExpr("")
        return "undefined"
      }
      if (Number.isNaN(answer) || answer == Infinity || answer == -Infinity) {
        setExpr("")
        return "undefined"
      }
      return math.format(answer, { notation: 'auto', precision: 10 });
    
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

  function etcPressed() {
    setEtc(prev => !prev)
  }

  useEffect(() => {
    const keyboard = (e) => {
      if (e.key == "Enter") {
        equals()
      } else if (e.key == "Backspace") {
        backspace()
      } else if (e.key == "Escape") {
        clearAll()
      } else if (["Tab", "CapsLock", "Shift", "Control", "Alt", "Meta"].includes(e.key)) {
      } else {
        addExpr(e.key)
      }
    }

  window.addEventListener("keydown", keyboard)
  return () => window.removeEventListener("keydown", keyboard)
 }, [expr])

  return (
    <main className="main">
      <div className="calculator">
        <Header/>
        <Display 
          value={[expr,output]}
        />
        <Keypad
          etc={change}
          addChar={addExpr}
          delChar={backspace}
          reset={clearAll}
          handleEquals={equals}
          changeGrid={etcPressed}
        />
        
      </div>
    </main>
  )
}

export default App
