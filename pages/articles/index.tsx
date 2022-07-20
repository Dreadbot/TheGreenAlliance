import { NavigationConstant } from "../../components/NavigationBar";
import { GetServerSideProps } from "next";
import { MongoClient } from 'mongodb';

type ArticleHomeType = {
    articles: string[]
}

const ArticleHome = ({ articles }: ArticleHomeType) => {
    return (
        <div>
            <NavigationConstant />
	    <ul>
		{articles.map(title => {
		    console.log(title)
		    return <li><a href={`/articles/${title}`}>{title}</a></li> 
		})}
		<li><a href="/">Among Us</a></li>
	    </ul>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    const file = require("../../private/mongo.json")
    const url = `mongodb+srv://${file.username}:${file.password}@thegreenalliance.5xwjk.mongodb.net/thegreenalliance?retryWrites=true&w=majority`
    const client = await MongoClient.connect(url)
    const articles = client.db().collection("articles")

    let articleTitles: string[] = []

    await articles.find().toArray().then((docs) => {
	docs.forEach(doc => {
	    articleTitles.push(doc.title)
	})
    })

    client.close()

    console.log(articleTitles)
    
    return articles != null ? {
        props: {
            articles: articleTitles
        }
    } : {
        props: {
            articles: null
        }
    }
}


export default ArticleHome
