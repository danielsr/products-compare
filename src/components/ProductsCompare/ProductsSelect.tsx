import React, { FC } from "react";
import styled from "styled-components";
import { Product } from "../../types";
import Checkbox from "../Checkbox";

const Wrapper = styled.div`
  padding: 20px 20px 0 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

type PropType = {
  products: Product[];
};

const ProductsSelect: FC<PropType> = ({ products }: PropType) => {
  return (
    <Wrapper>
      {products?.map(({ name, sku }) => (
        <Checkbox key={sku} name={sku} label={name} />
      ))}
    </Wrapper>
  );
};

export default ProductsSelect;
