import React from 'react'

function Display({value}) {
    return (
        <p className="display">
            {value || "0"}
        </p>
    )
}

export default Display