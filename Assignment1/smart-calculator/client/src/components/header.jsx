import React from 'react'

function Header({mode, aiMode}) {
    return (
        <header className = "header">
            <p className="header-logo">smart calculator</p>

            <div className="header-switch">
                <p className="header-switch-prompt">AI Mode</p>
                <div className="header-switch-container">
                    <div className={`header-switch-slider header-switch-toggle ${mode == 1 ? "right" : "left"}`}></div>

                    <div className="header-switch-slider ghost ghost-1" onClick={() => aiMode(0)}></div>
                    <div className="header-switch-slider ghost ghost-2" onClick={() => aiMode(1)}></div>

                    <div className="header-switch-positions">
                        <p className="header-switch-position">Off</p>
                        <p className="header-switch-position">On</p>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header