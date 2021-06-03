import React, { FC } from "react";
import { Product } from "../../types";

type PropType = {
  products: Product[];
};

const ProductsSelect: FC<PropType> = () => {
  return (
    <ProductsSelect>
      {products?.map(({ name, sku }) => (
        <Checkbox key={sku} name={sku} label={name} />
      ))}
    </ProductsSelect>
  );
};

export default ProductsSelect;
