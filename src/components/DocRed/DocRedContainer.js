import DocRed from "./DocRed";
import { StoreService } from "../../state/StoreService.js";

const mapStateToProps = (state) => ({
  articles: state.articles.articleList,
});

const HomePageContainer = StoreService.connect(mapStateToProps)(DocRed);
export default HomePageContainer;
