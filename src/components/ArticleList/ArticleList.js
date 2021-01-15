import React from "react";
import styles from "./styles";

const ArticleList = ({ articles }) => {
  return (
    <div style={styles.container}>
      {articles.map(
        (article, index) =>
          index > 0 && (
            <ArticleItem content={article.content} />
          )
      )}
    </div>
  );
};

const ArticleItem = ({ content, title }) => (
  <div dangerouslySetInnerHTML={{ __html: content }}></div>
);

export default ArticleList;
