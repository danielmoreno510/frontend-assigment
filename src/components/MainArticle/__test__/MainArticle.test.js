import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";

import MainArticle from "../MainArticle";
import testData from "../../../../mockup/article.json";

configure({ adapter: new Adapter() });

const testProps = testData.articles[0];

describe("MainArticle component", () => {
  describe("WHEN the component is render", () => {
    const wrapper = shallow(<MainArticle article={testProps} />);

    it("THEN should display MainArticle component", () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
