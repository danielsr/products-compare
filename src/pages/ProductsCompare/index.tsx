import React, { FC, useEffect } from "react";
import { useProducts } from "hooks/useProducts";
import Spinner from "elements/Spinner";
import Container from "elements/Container";
import {
  Wrapper,
  Title,
  CompareTable,
  CompareTableColumns,
  CompareTableColumn,
  CompareTableColumnHeader,
  QualityLabel,
  Loading,
} from "./styled";
import FeatureLabels from "./FeatureLabels";
import ProductsSelect from "./ProductsSelect";
import ProductColumn from "./ProductColumn";

const ProductsCompare: FC = () => {
  const {
    fetchProducts,
    products,
    features,
    selectedProductSkus,
    setSelectedProductSkus,
    selectedProducts,
    unselectProduct,
    isLoading,
  } = useProducts();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <Container>
      <Wrapper>
        <Title>4 producten vergelijken</Title>
        <CompareTable>
          {isLoading && (
            <Loading>
              <Spinner />
            </Loading>
          )}
          {!isLoading && products && (
            <>
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
            </>
          )}
        </CompareTable>
      </Wrapper>
    </Container>
  );
};

export default ProductsCompare;
