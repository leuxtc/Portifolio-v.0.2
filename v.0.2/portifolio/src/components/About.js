import React from "react"
import transition from "../transition"
import styles from "./About.module.css"
import Navbar from "./Navbar"

const About = () => {
    return (
        <div className={styles.about}>
            <Navbar />
            <h1>About</h1>        
        </div>
    )
}

export default transition(About)