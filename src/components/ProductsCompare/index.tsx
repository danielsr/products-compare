import React, { FC, useEffect } from "react";
import { useProducts } from "../../hooks/useProducts";
import {
  Wrapper,
  Title,
  CompareTable,
  CompareTableColumns,
  CompareTableColumn,
  CompareTableColumnHeader,
  QualityLabel,
} from "./styled";
import FeatureLabels from "./FeatureLabels";
import ProductsSelect from "./ProductsSelect";
import ProductColumn from "./ProductColumn";

const ProductsComparison: FC = () => {
  const { fetchProducts, products, features } = useProducts();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <Wrapper>
      <Title>Compare Products</Title>
      <CompareTable>
        <CompareTableColumn>
          <CompareTableColumnHeader>
            <ProductsSelect products={products} />
            <QualityLabel>Keurmerk</QualityLabel>
          </CompareTableColumnHeader>
          <FeatureLabels features={features} />
        </CompareTableColumn>
        <CompareTableColumns>
          {products?.map((product) => (
            <ProductColumn
              key={product.sku}
              product={product}
              features={features}
            />
          ))}
        </CompareTableColumns>
      </CompareTable>
    </Wrapper>
  );
};

export default ProductsComparison;
