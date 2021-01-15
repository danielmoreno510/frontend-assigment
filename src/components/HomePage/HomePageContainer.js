import HomePage from "./HomePage";
import {
  fetchArticles,
} from "../../state/actions";
import { StoreService } from "../../state/StoreService.js";

const mapStateToProps = (state) => ({
  isFetching: state.articles.isFetching,
});
const mapDispatchToProps = (dispatch) => {
  return {
    getArticles: () => {
      dispatch(fetchArticles());
    }
  };
};
const HomePageContainer = StoreService.connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
export default HomePageContainer;
