import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import { getGifs } from "../../helpers/getGifs";


describe("pruebas en getGifs", () => {

  test("debe traer 10 elementos", async () => {
    const gifs = await getGifs("Goku")
    expect(gifs.length).toBe(10)
  })
  test("debe traer 0 elementos", async () => {
    const gifs = await getGifs("")
    expect(gifs.length).toBe(0)
  })

  
});
