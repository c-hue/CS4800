import React from 'react'

function Key({text, type=0, area="", onClick}) {
    return (
        <div 
            className={`key
            ${type == 1 ? `key-type-1` : ""}
            ${type == 2 ? `key-type-2` : ""}
            ${area !== "" ? `key-area-${area}` : ""}
            `}
            onClick={onClick}
            >
            <p className="key-text">{text}</p>
        </div>
    )
}

export default Key