import type { NextPage } from 'next';
import Head from 'next/head';
import { NavigationConstant } from "../components/NavigationBar";
import styles from '../styles/Home.module.scss';

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
        <h2 className={styles.subtitle}>Our Mission</h2>
        <div className={styles.divider} />
        <p className={styles.bodytext}>
          Our mission is to provide beginner friendly, easy to implement documentation and articles to help you implement hand written vision into your FIRST team's robot
        </p>
        <h2 className={styles.subtitle}>What you need</h2>
        <div className={styles.divider} />
        <p className={styles.bodytext}>
          To get started, we recommend a webcam (anything around 720p or above will do), and a computer with python and an IDE of your choice to write it in.
        </p>
      </main>
    </div>
  );
}

export default Home;
