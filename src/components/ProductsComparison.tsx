import React, { FC, useEffect } from "react";
import styled from "styled-components";
import { useProducts } from "../hooks/useProducts";
import Checkbox from "./Checkbox";

const Wrapper = styled.div``;

const Title = styled.h1`
  font-size: 2rem;
  color: #0000ff;
`;

const Table = styled.div`
  display: flex;
  border-top: 1px solid #ccc;
  border-bottom: 2px solid #0000ff;
  padding-bottom: 20px;
`;

const Column = styled.div`
  border-right: 1px solid #ccc;
  width: 250px;
  min-width: 250px;
`;

const Products = styled.div`
  display: flex;
  overflow-x: auto;
`;

const ColumnHeader = styled.div`
  height: 400px;
`;

const Selection = styled.div`
  padding: 20px 20px 0 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Cell = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid #ccc;
  height: 30px;
`;

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
            <Selection>
              {products?.map(({ name, sku }) => (
                <Checkbox key={sku} name={sku} label={name} />
              ))}
            </Selection>
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
