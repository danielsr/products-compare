import React, { FC } from "react";
import { CompareTableCell } from "./styled";

type PropType = {
  product: Product.Product;
  features: Product.Feature[];
};

const ProductFeatures: FC<PropType> = ({ product, features }: PropType) => {
  return (
    <>
      {features.map((feature, idx) => (
        <CompareTableCell
          highlight={feature.highlight}
          bold
          key={`ProductFeature_${product.sku}_${idx}`}
        >
          {product[feature.name]}
        </CompareTableCell>
      ))}
    </>
  );
};

export default ProductFeatures;
