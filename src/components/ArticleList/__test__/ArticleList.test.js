import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";

import ArticleList from "../ArticleList";
import { ArticleItem } from "../ArticleList";

import testData from "../../../../mockup/article.json";

configure({ adapter: new Adapter() });
const testProps = testData.articles;

describe("ArticleList component", () => {
  describe("WHEN the component is render", () => {
    const wrapper = shallow(<ArticleList articles={testProps} />);

    it("THEN should display ArticleList component", () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});

describe("ArticleItem component", () => {
  describe("WHEN the component is render", () => {
    const wrapper = shallow(<ArticleItem content={testProps[0].content} />);

    it("THEN should display ArticleItem component", () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
