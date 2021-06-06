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

  it("fetches products and selects all", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useProducts());

    act(() => {
      result.current.fetchProducts();
    });

    await waitForNextUpdate();

    expect(result.current.products).toHaveLength(4);
    expect(result.current.selectedProductSkus).toHaveLength(4);
    expect(result.current.selectedProducts).toHaveLength(4);
  });

  it("handles selection", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useProducts());

    act(() => {
      result.current.fetchProducts();
    });

    await waitForNextUpdate();

    act(() => {
      result.current.unselectProduct(data.products[0]);
    });

    expect(result.current.selectedProductSkus).toHaveLength(3);
    expect(result.current.selectedProducts).toHaveLength(3);

    act(() => {
      result.current.setSelectedProductSkus(
        data.products.map(({ sku }) => sku),
      );
    });

    expect(result.current.selectedProductSkus).toHaveLength(4);
    expect(result.current.selectedProducts).toHaveLength(4);
  });

  it("sorts features alphabetically", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useProducts());

    act(() => {
      result.current.fetchProducts();
    });

    await waitForNextUpdate();

    expect(result.current.features[0].name).toBe("Hardheid");
    expect(
      result.current.features[result.current.features.length - 1].name,
    ).toBe("stepQuantity");
  });

  it("highlights differences between features for selected products", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useProducts());

    act(() => {
      result.current.fetchProducts();
    });

    await waitForNextUpdate();

    expect(
      result.current.features.filter(({ highlight }) => highlight),
    ).toHaveLength(3);

    act(() => {
      result.current.setSelectedProductSkus(["11545A", "115576"]);
    });

    expect(
      result.current.features.filter(({ highlight }) => highlight),
    ).toHaveLength(2);
  });
});
