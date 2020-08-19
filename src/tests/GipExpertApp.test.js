import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import GipExpertApp from "../GipExpertApp";

describe("pruebas en <GipExpertApp></GipExpertApp>", () => {
  test("should render GifGridItem", () => {
    const wrapper = shallow(<GipExpertApp></GipExpertApp>);
    expect(wrapper).toMatchSnapshot();
  });

  test("should render una lista de categorias", () => {
    const categories = ["One Punch", "Friends"];

    const wrapper = shallow(
      <GipExpertApp defaultCategories={categories}></GipExpertApp>
    );

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find("GifGrid").length).toBe(categories.length)

  });
});
