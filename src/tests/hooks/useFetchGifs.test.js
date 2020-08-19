const { useFetchGifs } = require("../../hooks/useFetchGifs");
const { renderHook } = require("@testing-library/react-hooks");

describe("Pruebas al custom hook useFetchGifs", () => {
  test("deberia retornar data y loading", async () => {
    const category = "One Punch";
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs(category));
    const { data, loading } = result.current;

    await waitForNextUpdate()
    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });

  test('debe retornar un arreglo de imagenes y un false', async () => {
    const category = "One Punch";
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs(category));

    await waitForNextUpdate()
    const { data, loading } = result.current;

    expect(data.length).toEqual(10);
    expect(loading).toBe(false);
  })
  
});
1;
