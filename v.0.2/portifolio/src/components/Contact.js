import React from "react"
import transition from "../transition"
import Navbar from "./Navbar"

const Contact = () => {
    return (
        <div>
            <Navbar />
            <h1>Contact</h1>
        </div>
    )
}

export default transition(Contact)