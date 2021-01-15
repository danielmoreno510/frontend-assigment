import React from "react";

import Header from "../Header"
import MainArticle from "../MainArticle"
import ArticleList from "../ArticleList"
import Footer from "../Footer"
import styles from "./styles";

const HomePage = ({ articles }) => {
  return (
    <div>
        <Header />
        <div style={styles.container}>
            <MainArticle article={articles[0]} />
            <ArticleList articles={articles} />
        </div>
        <Footer />
    </div>
  );
};

export default HomePage;
