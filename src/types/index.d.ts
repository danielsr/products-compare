declare namespace Product {
  type Product = {
    name: string;
    sku: string;
    productImage: string;
    salePrice: string;
    badges: string;
    [key: string]: string;
  };

  type Feature = {
    name: string;
    highlight: boolean;
  };
}
