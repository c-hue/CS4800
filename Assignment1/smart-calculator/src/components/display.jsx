import React from 'react'

function Display({value}) {
    return (
        <div className="display">
            <p className="display-text">
                {value || "0"}
            </p>
        </div>
    )
}

export default Display