import { renderHook, act } from "@testing-library/react-hooks";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { baseURL } from "services/axiosConfig";
import data from "unit-test/mocks/products.json";
import { useProducts } from "../useProducts";

describe("useProducts", () => {
  const server = setupServer(
    rest.get(`${baseURL}/products/all`, (req, res, ctx) => {
      return res(ctx.json(data));
    }),
  );

  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it("fetches products and handle selection", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useProducts());

    act(() => {
      result.current.fetchProducts();
    });

    await waitForNextUpdate();

    expect(result.current.products).toHaveLength(2);
    expect(result.current.selectedProductSkus).toHaveLength(2);

    act(() => {
      result.current.unselectProduct(data.products[0]);
    });

    expect(result.current.selectedProductSkus).toHaveLength(1);
    expect(result.current.selectedProducts).toHaveLength(1);

    act(() => {
      result.current.setSelectedProductSkus(
        data.products.map(({ sku }) => sku),
      );
    });

    expect(result.current.selectedProductSkus).toHaveLength(2);
    expect(result.current.selectedProducts).toHaveLength(2);
  });

  it("returns features in alphabetical order", async () => {
    const { result } = renderHook(() => useProducts());

    expect(result.current.features[0].name).toBe("Hardheid");
    expect(
      result.current.features[result.current.features.length - 1].name,
    ).toBe("uom");
  });
});
