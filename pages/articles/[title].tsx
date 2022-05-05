import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import { Document, MongoClient, WithId } from 'mongodb';
import { NavigationConstant } from "../../components/NavigationBar";
import styles from "../../styles/Article.module.scss";
import fs from "fs"

type ArticleType = {
    article: {
        title: string,
        text: string
    }
}

const Article = ( { article }: ArticleType ) => {

    return (
        <div className={styles.container}>
            <NavigationConstant />
            {article == null ? null : (
                <p>{article.text}</p>
            )}
        </div>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
    const { title } = context.params as { title: string }
    const file = require("../../private/mongo.json")
    const url = `mongodb+srv://${file.username}:${file.password}@thegreenalliance.5xwjk.mongodb.net/thegreenalliance?retryWrites=true&w=majority`
    const client = await MongoClient.connect(url)
    const articles = client.db().collection("articles")
    const article = await articles.findOne( { title: title } )
    client.close()

    
    return article != null ? {
        props: {
            article: {
                title: article.title,
                text: article.text
            }
        }
    } : {
        props: {
            article: null
        }
    }
}

export const getStaticPaths: GetStaticPaths<{ title: string }> = async () => {

    return {
        paths: [],
        fallback: 'blocking'
    }
}

export default Article
