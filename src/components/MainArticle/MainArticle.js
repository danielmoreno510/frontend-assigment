import React from "react";

import styles from './styles'
import mainArticle from '../../assets/images/mainArticle.png'

const MainArticle = ({article}) => {
  const content = article.content
  
  return (
    <div style={styles.container}>
      <img style={styles.mainArticle} src={mainArticle}/>
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </div>
  );
};

export default MainArticle;
