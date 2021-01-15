import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";

import Footer from "../Footer";

configure({ adapter: new Adapter() });
const testProps = {
  articles: [],
};

describe("Footer component", () => {
  describe("WHEN the component is render", () => {
    const wrapper = shallow(<Footer {...testProps} />);

    it("THEN should display Footer component", () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
