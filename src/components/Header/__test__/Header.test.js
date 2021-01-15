import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";

import Header from "../Header";

configure({ adapter: new Adapter() });

describe("Header component", () => {
  describe("WHEN the component is render", () => {
    const wrapper = shallow(<Header />);

    it("THEN should display Header component", () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
