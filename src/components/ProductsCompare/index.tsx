import React, { FC, useEffect } from "react";
import { useProducts } from "../../hooks/useProducts";
import Checkbox from "../Checkbox";
import {
  Cell,
  Column,
  ColumnHeader,
  Products,
  ProductsSelect,
  Table,
  Title,
  Wrapper,
} from "./styled";

const ProductsComparison: FC = () => {
  const { fetchProducts, products, features } = useProducts();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <Wrapper>
      <Title>Compare Products</Title>
      <Table>
        <Column>
          <ColumnHeader>
            <ProductsSelect>
              {products?.map(({ name, sku }) => (
                <Checkbox key={sku} name={sku} label={name} />
              ))}
            </ProductsSelect>
          </ColumnHeader>
          {features.map((feature, idx) => (
            <Cell key={`FeatureLabel_${idx}`}>{feature}</Cell>
          ))}
        </Column>
        <Products>
          {products?.map((product) => (
            <Column key={product.sku}>
              <ColumnHeader />
              {features.map((feature, idx) => (
                <Cell key={`ProductFeature_${product.sku}_${idx}`}>
                  {product[feature]}
                </Cell>
              ))}
            </Column>
          ))}
        </Products>
      </Table>
    </Wrapper>
  );
};

export default ProductsComparison;
