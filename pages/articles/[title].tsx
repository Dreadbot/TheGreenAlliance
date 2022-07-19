import { MongoClient } from 'mongodb';
import { GetServerSideProps } from "next";
import { NavigationConstant } from "../../components/NavigationBar";
import styles from "../../styles/Article.module.scss";

type ArticleType = {
    article: {
        title: string,
        text: string
    }
}

const Article = ( { article }: ArticleType ) => {
    return (
        <div className={styles.container} >
            <NavigationConstant />
            <div dangerouslySetInnerHTML={getArticleHtml(article)}/>
        </div>
    )
}

const getArticleHtml = (article: { title: string; text: string; }) => {
    if(!article) return {
	__html: "<h1>NA</h1>"
    }

    const showdown = require('showdown')
    const converter = new showdown.Converter()
    const text = article.text
    console.log(text)

    return {
        __html: converter.makeHtml(text)
    }
   
}

export const getServerSideProps: GetServerSideProps = async (context) => {
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

export default Article
