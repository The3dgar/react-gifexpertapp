import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import {GifGridItem} from "../../components/GifGridItem"


describe("pruebas en GifGridItem", () => {
  const title = "A title"
  const url = "https://media3.giphy.com/media/yo3TC0yeHd53G/giphy.gif?cid=562ec969n2fygr06xiovb4paoa0ztco08uwp4fhkezy89wha&rid=giphy.gif"
  const wrapper = shallow(<GifGridItem title={title} url={url}></GifGridItem>);

  // beforeEach(()=>{
  //   wrapper = shallow(<GifGridItem></GifGridItem>);
  // })

  test("should render GifGridItem", () => {

    expect(wrapper).toMatchSnapshot()
    console.log("Corriendo el test")
  });

  test("debe de tener un parrafo con el title", ()=> {
    const p = wrapper.find("p")
    expect(p.text()).toBe(title)
  })

  test("debe de tener un imagen con url igual a props", ()=> {
    const img = wrapper.find("img")
    
    expect(img.props().src).toBe(url)
    expect(img.props().alt).toBe(title)
  })

  test("debe de tener un div con clase animate__fadeIn", ()=> {
    const div = wrapper.find("div")

    expect(div.prop("className").includes("animate__fadeIn")).toBe(true)
  })


  
});
