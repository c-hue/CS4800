import React, { useEffect, useRef } from 'react'

function Display({value, onChange, onEnter}) {
    const inputRef = useRef(null)

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus()
        }
    }, [])

    return (
        <input 
            ref={inputRef}
            type="text"
            className="display"
            value={value[0]}
            onChange={(e) => onChange(e.target.value)}
            onKeyDown={(e) => {
                if (e.key == "Enter") onEnter();
            }}
        />
    )
}

export default Display