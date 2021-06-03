import React, { FC } from "react";
import { Product } from "../../types";
import {
  CompareTableCell,
  CompareTableColumn,
  CompareTableColumnHeader,
} from "./styled";

type PropType = {
  product: Product;
  features: string[];
};

const ProductColumn: FC<PropType> = ({ product, features }: PropType) => {
  return (
    <CompareTableColumn>
      <CompareTableColumnHeader />
      {features.map((feature, idx) => (
        <CompareTableCell key={`ProductFeature_${product.sku}_${idx}`}>
          {product[feature]}
        </CompareTableCell>
      ))}
    </CompareTableColumn>
  );
};

export default ProductColumn;
