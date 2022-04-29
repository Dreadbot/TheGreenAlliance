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

            <main className="mt-20 px-96">
                <NavigationConstant />
                <h1 className="w-full text-center text-6xl">About Us</h1>
                <p className="w-full text-center mt-10 mb-24">
                    The Green Alliance is a Service and Outreach project started and maintained by Team 3656's Vision subteam. It's goal is 
                    to provide resources for implementing vision systems for your First team's robot.
                </p>

                <h2 className="w-full text-center text-4xl">How it All Began</h2>

                <p className="w-full text-center mt-5 mb-20 p-5">
                    
                </p>
            </main>
        </div>
    )
}

export default About