import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';
import { NavigationConstant } from "../components/NavigationBar";

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Landing Page</title>
                <link rel="icon" href="/eye.svg" />
            </Head>

            <main className={styles.main}>
                <NavigationConstant />
                <h1 className={styles.welcome}>Welcome To</h1>
                <h1 className={styles.title}>The Green Alliance</h1>
                <div className={styles.divider}> </div>
                <h2 className={styles.subtitle}>Our Mission</h2>
            </main>
        </div>
    );
}

export default Home;
