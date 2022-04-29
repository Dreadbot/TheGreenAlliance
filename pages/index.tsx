import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { NavigationConstant } from '../components/NavigationBar'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>TGA</title>
        <link rel="icon" href="/eye.svg" />
      </Head>

      <main className={styles.main}>
        <NavigationConstant />
        <h1 className={styles.title}>
            Welcome to <em>The Green Alliance</em>!
        </h1>
      </main>
    </div>
  )
}

export default Home
