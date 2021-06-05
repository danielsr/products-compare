import React, { FC, useEffect } from "react";
import { useProducts } from "hooks/useProducts";
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
  const {
    fetchProducts,
    products,
    features,
    selectedProductSkus,
    setSelectedProductSkus,
    selectedProducts,
    unselectProduct,
  } = useProducts();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <Wrapper>
      <Title>Compare Products</Title>
      <CompareTable>
        <CompareTableColumn>
          <CompareTableColumnHeader>
            <ProductsSelect
              products={products}
              value={selectedProductSkus}
              onChange={setSelectedProductSkus}
            />
            <QualityLabel>Keurmerk</QualityLabel>
          </CompareTableColumnHeader>
          <FeatureLabels features={features} />
        </CompareTableColumn>
        <CompareTableColumns>
          {selectedProducts?.map((product) => (
            <ProductColumn
              key={product.sku}
              product={product}
              features={features}
              onDelete={unselectProduct}
            />
          ))}
        </CompareTableColumns>
      </CompareTable>
    </Wrapper>
  );
};

export default ProductsComparison;
