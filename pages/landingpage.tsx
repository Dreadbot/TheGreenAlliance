import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Landing.module.scss'

const Landing:NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Landing Page</title>
                <link rel="icon" href="/eye.svg" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.welcome}>The <em>Landing Page</em></h1>
            </main>
        </div>
    )
}

export default Landing