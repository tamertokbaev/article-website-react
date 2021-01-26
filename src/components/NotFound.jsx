import React from 'react'

const NotFound = () => {
    const parentStyle = {
        display: "flex",
        height: "85vh",
    }
    let styles = {
        verticalAlign: "middle",
        alignItems: "center",
        width: "10rem",
        height: "10rem",
        margin: "auto 0"
    }
    return (
        <div style={parentStyle}>
            <img src={require("../assets/404.svg").default} alt="Not found" style={styles}/>
        </div>
    )
}

export default NotFound