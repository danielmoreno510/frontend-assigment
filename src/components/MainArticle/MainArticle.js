import React from "react";
import PropTypes from "prop-types";

import styles from "./styles";
import mainArticle from "../../assets/images/mainArticle.png";

const MainArticle = ({ article }) => {
  const content = article.content;

  return (
    <div style={styles.container}>
      <img style={styles.mainArticle} src={mainArticle} />
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </div>
  );
};

MainArticle.propTypes = {
  article: PropTypes.object,
};

export default MainArticle;
