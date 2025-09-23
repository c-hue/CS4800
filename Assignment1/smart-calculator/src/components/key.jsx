import React from 'react'

function Key({text, type=0, area="", onClick}) {
    return (
        <div className="key" onClick={onClick}>
            <p className="key-text">{text}</p>
        </div>
    )
}

export default Key