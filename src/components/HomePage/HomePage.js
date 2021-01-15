import React, {useEffect} from "react";

import DocRed from '../DocRed'
import styles from "./styles";

const HomePage = ({ isFetching, getArticles }) => {

  useEffect(() => {
    getArticles()
  }, []);
  
  return (
    <div style={styles.container}>
      {!isFetching && <DocRed />}
    </div>
  );
};

export default HomePage;
