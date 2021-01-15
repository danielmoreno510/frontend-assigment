import React, {useEffect} from "react";

import DocRed from '../DocRed'

const HomePage = ({ isFetching, getArticles }) => {

  useEffect(() => {
    getArticles()
  }, []);
  
  return (
    <div>
      {!isFetching && <DocRed />}
    </div>
  );
};

export default HomePage;
