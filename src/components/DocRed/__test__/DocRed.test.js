import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";

import DocRed from "../DocRed";

configure({ adapter: new Adapter() });
const testProps = {
  articles: [],
};

describe("DocRed component", () => {
  describe("WHEN the component is render", () => {
    const wrapper = shallow(<DocRed {...testProps} />);

    it("THEN should display DocRed component", () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
