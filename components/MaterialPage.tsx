import Head from 'next/head'
import React, { Component } from 'react'
import styles from '../styles/Material.module.scss'

type MaterialPageProps = {
    title: string
}

const MaterialPage = (props: MaterialPageProps) => {
    return(
        <Head>
            <title>{props.title}</title>
        </Head>
    );
}

export default MaterialPage

