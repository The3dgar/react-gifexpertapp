import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";

jest.mock("../../hooks/useFetchGifs");

describe("pruebas en <GifGrid></GifGrid>", () => {
  // Para saber cuantas veces fue llamada
  const category = "Friends";
  // let wrapper = shallow(<GifGrid category={category}></GifGrid>)

  beforeEach(() => {
    jest.clearAllMocks();
    // wrapper = shallow(<GifGrid category={category}></GifGrid>)
  });

  test("debe de mostrar correctamente", () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });
    const wrapper = shallow(<GifGrid category={category}></GifGrid>);
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de mostrar items cuando se cargan imagenes", () => {
    const gifs = [
      {
        id: "ABC",
        url: "https://localhost/cosa/cosa.jpg",
        title: "Cualquier cosa",
      },
      {
        id: "ABC",
        url: "https://localhost/cosa/cosa.jpg",
        title: "Cualquier cosa",
      },
    ];

    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });
    const wrapper = shallow(<GifGrid category={category}></GifGrid>);
    expect(wrapper).toMatchSnapshot();

    expect(wrapper.find("p").exists()).toBe(false);
    expect(wrapper.find("GifGridItem").length).toBe(gifs.length);
  });
});
