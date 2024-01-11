import React from "react";
import transition from "../transition";
import Navbar from "./Navbar";

const Initial = () => {
    return (
        <div>
            <Navbar />
            <h1>Hello</h1>
        </div>
    )
}

export default transition(Initial)