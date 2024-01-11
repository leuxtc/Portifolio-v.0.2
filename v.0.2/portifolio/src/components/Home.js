import React from "react"
import transition from "../transition"
import styles from "./Home.module.css"
import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div className={styles.home_page}>
            <div className={styles.name}>
                <p className={styles.name_lrg}>Leon
                    ardo
                    Rodr
                    igues
                </p>
                <p className={styles.name_smll}>Leonardo Rodrigues</p>
            </div>

            <h1>Portifolio</h1>

            <div className={styles.home_links}>
                <div>
                    <Link className={styles.home_link} to="/initial">Initial</Link>
                </div>
                <div>
                    <Link className={styles.home_link} to="/about">about</Link>
                </div>
                <div>
                    <Link className={styles.home_link} to="/contact">contact</Link>
                </div>
            </div>
        </div>
    )
}

export default transition(Home)