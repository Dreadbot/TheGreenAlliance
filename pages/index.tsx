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
        <h2 className={styles.subtitle}>Our Mission</h2>
        <div className={styles.divider}> </div>
        <p className={styles.bodytext}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis in eu mi bibendum. Lacus sed viverra tellus in. Vulputate ut pharetra sit amet aliquam id diam maecenas. Fames ac turpis egestas maecenas pharetra convallis posuere. Ultrices gravida dictum fusce ut placerat orci. Morbi blandit cursus risus temper advaces
        </p>
        <h2 className={styles.subtitle}>What you need</h2>
        <div className={styles.divider}> </div>
        <p className={styles.bodytext}>
          Non consectetur a erat nam at lectus. Auctor urna nunc id cursus. Mauris ultrices eros in cursus turpis massa. Vel turpis nunc eget lorem. Lectus proin nibh nisl condimentum id. Pellentesque id nibh tortor id aliquet. Lorem ipsum dolor sit amet. Tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra. Volutpat commodo sed egestas egestas. Aenean pharetra magna ac placerat vestibulum lectus mauris ultrices. Rutrum quisque non tellus orci. Urna id volutpat lacus laoreet. In nulla posuere sollicitudin aliquam ultrices sagittis orci.
        </p>
      </main>
    </div>
  );
}

export default Home;
