import { useState, useEffect } from 'react'
import * as math from 'mathjs'
import './App.css'
import Header from "./components/header"
import Display from "./components/display"
import Keypad from "./components/keypad"

function App() {
  // states
  const [mode, setMode] = useState(0)
  const [aiOutput, setAiOutput] = useState("")
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

  async function handleAI() {
    if (!expr.trim()) return;

    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({prompt: expr}),
      })
      const data = await res.json()
      setAiOutput(data.reply)
      setExpr("")
    } catch (err) {
      setAiOutput("Error: AI request failed.")
    }
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
    if (output == "Error" || output == "undefined") {
      setExpr(char)
      setOutput("")
    }
    else {
      setExpr(expr + char)
      setOutput("")
    }
  }

  function etcPressed() {
    setEtc(prev => !prev)
  }
  
  function aiPressed(mode) {
    setMode(mode)
  }

  useEffect(() => {
    const keyboard = (e) => {
      if (e.key == "Enter") {
        if (mode == 1) {
          e.preventDefault();
          handleAI()
        } else{
          equals()
        }
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
        <Header
          mode={mode}
          aiMode={aiPressed}
        />
        <div className={`calc-body ${mode == 1 ? "ai-mode" : ""}`}>
          <Display 
            value={mode == 1 ? [expr, ""] : [expr,output]}
            aiMode={mode==1}
            className="display"
          />
          <Keypad
            etc={change}
            addChar={addExpr}
            delChar={backspace}
            reset={clearAll}
            handleEquals={equals}
            changeGrid={etcPressed}
            aiOutput={mode == 1 ? aiOutput : null}
          />
        </div>
      </div>
    </main>
  )
}

export default App
