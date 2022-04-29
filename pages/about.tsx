import { NextPage } from "next";
import Head from "next/head";
import { NavigationConstant } from "../components/NavigationBar";

const About: NextPage = () => {
    return (
        <div>
            <Head>
                <title>About</title>
                <link rel="icon" href="/eye.svg" />
            </Head>

            <main>
                <NavigationConstant />
            </main>
        </div>
    )
}

export default About