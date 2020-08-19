import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";

describe("pruebas en AddCategory", () => {

  // Para saber cuantas veces fue llamada
  const setCategoy = jest.fn()

  let wrapper = shallow(<AddCategory setCategories={setCategoy}></AddCategory>)

  beforeEach(()=>{
    jest.clearAllMocks()
    wrapper  = shallow(<AddCategory setCategories={setCategoy}></AddCategory>)
  })

  test("debe de mostrar correctamente", () => {
    expect(wrapper).toMatchSnapshot()
  });

  // cambios en un input text

  test('debe de cambiar la caja de texto ', () => {
    const value = "Hola mundo"
    wrapper.find("input").simulate("change", {target: { value }})
  })

  // submit de formulario

  test('no debe de postear la información ', () => {
    wrapper.find("form").simulate("submit", {preventDefault(){}})
    expect(setCategoy).not.toHaveBeenCalled()
  })
  
  test('debe de llamar el setCategories y limpiar la caja de texto ', () => {
    // input change
    const value = "Goku"
    wrapper.find("input").simulate("change", {target: {value}})

    // submit
    wrapper.find("form").simulate("submit", {preventDefault(){}})
    
    // llamar el setCategories
    expect(setCategoy).toHaveBeenCalled()
    expect(setCategoy).toHaveBeenCalledTimes(1)
    expect(setCategoy).toHaveBeenCalledWith(expect.any(Function))
    // input debe ser ""

    expect(wrapper.find("input").prop("value")).toBe("")




    
  })
  
  
});
