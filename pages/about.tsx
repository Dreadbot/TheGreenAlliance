import { NextPage } from "next";
import Head from "next/head";
import { NavigationConstant } from "../components/NavigationBar";
import styles from "../styles/About.module.scss";

const About: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>About</title>
                <link rel="icon" href="/eye.svg" />
            </Head>

            <main className={styles.main}>
                <NavigationConstant />
                <h1 className={styles.title}>About Us</h1>
                <p className={styles.text}>
                    The Green Alliance is a Service and Outreach project, started and maintained by Team 3656's Vision subteam. Its goal is 
                    to provide resources for implementing vision systems for your FIRST team's robot.
                </p>
            </main>
        </div>
    )
}

export default About