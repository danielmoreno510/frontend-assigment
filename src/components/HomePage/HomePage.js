import React, { useEffect } from "react";
import PropTypes from "prop-types";

import DocRed from "../DocRed";
import styles from "./styles";

const HomePage = ({ isFetching, getArticles }) => {
  useEffect(() => {
    getArticles();
  }, []);

  return <div style={styles.container}>{!isFetching && <DocRed />}</div>;
};

HomePage.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  getArticles: PropTypes.func.isRequired,
};

export default HomePage;
