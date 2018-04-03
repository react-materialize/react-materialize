/* global describe, it, expect, context */

import React from "react";
import { shallow, mount } from "enzyme";
import Collapsible from "../src/Collapsible";
import CollapsibleItem from "../src/CollapsibleItem";

describe("<Collapsible />", () => {
  context("default", () => {
    let wrapper = shallow(<Collapsible />);

    it("renders", () => {
      expect(wrapper.hasClass("collapsible"), "with a collapsible class").to.be
        .true;
      expect(
        wrapper.find('[data-collapsible="expandable"]').length,
        "with a expandable data attribute"
      ).to.eq(1);
    });
  });

  context("accordion", () => {
    let wrapper = shallow(<Collapsible accordion />);

    it("renders", () => {
      expect(wrapper.find('[data-collapsible="accordion"]').length).to.eq(1);
    });
  });

  context("with invalid elements", () => {
    let wrapper = shallow(
      <Collapsible>
        {null}
        <CollapsibleItem header="First">A</CollapsibleItem>
        {null}
        <CollapsibleItem header="Second">B</CollapsibleItem>
      </Collapsible>
    );

    it("purges elements", () => {
      expect(wrapper.children().length).to.eq(2);
    });
  });

  context("with expanded prop", () => {
    let wrapper = mount(
      <Collapsible>
        <CollapsibleItem expanded header="First">
          A
        </CollapsibleItem>
        <CollapsibleItem header="Second">B</CollapsibleItem>
      </Collapsible>
    );

    it("adds active class to CollapsibleItem", () => {
      expect(
        wrapper
          .find(".collapsible-header")
          .first()
          .hasClass("active")
      ).to.be.true;
    });
  });

  context("mounting", () => {
    let wrapper = mount(
      <Collapsible accordion>
        <CollapsibleItem header="First">A</CollapsibleItem>
        <CollapsibleItem header="Second">B</CollapsibleItem>
      </Collapsible>
    );

    it("handles state on click", () => {
      expect(wrapper.state().activeKey).to.be.undefined;
      wrapper
        .find(".collapsible-header")
        .first()
        .simulate("click");
      expect(wrapper.state().activeKey).to.eq(0);
    });
  });

  context("defaultActiveKey", () => {
    const activeKey = 0;
    let wrapper = mount(
      <Collapsible accordion defaultActiveKey={activeKey}>
        <CollapsibleItem header="First">A</CollapsibleItem>
        <CollapsibleItem header="Second">B</CollapsibleItem>
      </Collapsible>
    );

    it("handles state on click", () => {
      wrapper
        .find(".collapsible-header")
        .at(0)
        .simulate("click");
      expect(wrapper.state().activeKey, "resets").to.be.null;
      wrapper
        .find(".collapsible-header", "activates again")
        .at(1)
        .simulate("click");
      expect(wrapper.state().activeKey).to.eq(1);
    });
  });
});
