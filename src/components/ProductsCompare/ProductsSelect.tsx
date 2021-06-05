import React, { FC } from "react";
import styled from "styled-components";
import Checkbox from "components/Checkbox";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Title = styled.h4`
  font-size: 1.2rem;
  margin: 20px 0 10px 0;
  color: ${({ theme }) => theme.colors.primary};
`;

type PropType = {
  products: Product.Product[];
  value: string[];
  onChange: (value: string[]) => void;
};

const ProductsSelect: FC<PropType> = ({
  products,
  value,
  onChange,
}: PropType) => {
  return (
    <Wrapper>
      <Title>Je selectie</Title>
      {products?.map(({ name, sku }) => (
        <Checkbox
          key={`Checkbox_Product_${sku}`}
          name={`Checkbox_Product_${sku}`}
          label={name}
          checked={value.includes(sku)}
          onChange={(checked) =>
            checked
              ? onChange([...value, sku])
              : onChange(value.filter((item) => item !== sku))
          }
        />
      ))}
    </Wrapper>
  );
};

export default ProductsSelect;
