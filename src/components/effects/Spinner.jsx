import React from 'react'

const Spinner = () => {
    const parentStyle = {
        position: "relative",
        minHeight: "92.5vh",
        backgroundColor: "grey"
    }
    const childStyle = {
        position: "absolute",
        width: "4rem",
        height: "4rem",
        top: "50%",
        left: "50%",
        margin: "-4rem 0 0 -4rem"
    }
    return (
        <div style={parentStyle}>
            <div className="spinner-border" style={childStyle} role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}

export default Spinner;