import { NextPage } from 'next';
import Head from 'next/head';
import { NavigationConstant } from '../../components/NavigationBar';
import styles from '../../styles/ArticleHome.module.scss';

const Articles: NextPage = () => {
    return (
        <div className={styles.container}>
            <main>
                <NavigationConstant/>
                <h1>Articles</h1>
            </main>
        </div>
    );
}

export default Articles;
