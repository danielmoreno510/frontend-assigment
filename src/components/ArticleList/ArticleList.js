import React from "react";
import PropTypes from "prop-types";

import styles from "./styles";

const ArticleList = ({ articles = [] }) => {
  return (
    <div style={styles.container}>
      {articles.map(
        (article, index) =>
          index > 0 && (
            <ArticleItem content={article.content} key={article.id} />
          )
      )}
    </div>
  );
};

export const ArticleItem = ({ content }) => (
  <div dangerouslySetInnerHTML={{ __html: content }}></div>
);

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired,
};

ArticleItem.propTypes = {
  content: PropTypes.string.isRequired,
};

export default ArticleList;
