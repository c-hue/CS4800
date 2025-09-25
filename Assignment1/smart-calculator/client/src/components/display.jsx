import React from 'react'

function Display({value, aiMode}) {
    return (
        <div className={`display ${aiMode ? "ai-display" : ""}`}>
            <p className="user-input">{value[0]}</p>
            {aiMode && value[1] && <p className="ai-output">{value[1]}</p>}
        </div>
    )
}

export default Display