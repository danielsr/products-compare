import React, { FC } from "react";
import styled from "styled-components";
import { Product, ProductFeature } from "../../types";
import {
  CompareTableCell,
  CompareTableColumn,
  CompareTableColumnHeader,
} from "./styled";

const Image = styled.img`
  height: 100px;
  object-fit: contain;
  margin-top: 50px;
`;

const Name = styled.h4`
  color: #0050bc;
`;

const Price = styled.div`
  display: flex;
  flex-direction: column;
`;

const PriceValue = styled.span`
  font-size: 1.2rem;
  font-weight: 600;
`;

const PricePer = styled.span`
  color: #ccc;
  font-size: 0.9rem;
`;

const Badges = styled.div`
  display: flex;
  gap: 5px;
  padding-bottom: 5px;
`;

const Divider = styled.hr`
  width: 100%;
  height: 1px;
  background-color: #eaeaea;
  border: none;
`;

const Badge = styled.img`
  width: 25px;
`;

type PropType = {
  product: Product;
  features: ProductFeature[];
};

const ProductColumn: FC<PropType> = ({ product, features }: PropType) => {
  return (
    <CompareTableColumn>
      <CompareTableColumnHeader>
        <Image src={product.productImage} alt={product.name} />
        <Name>{product.name}</Name>
        <Price>
          <PriceValue>{product.salePrice}</PriceValue>
          <PricePer>per stuk / excl. btw</PricePer>
        </Price>
        <Divider />
        <Badges>
          {product.badges.split("|").map((badge, idx) => (
            <Badge src={badge} key={`ProductBadge_${product.sku}_${idx}`} />
          ))}
        </Badges>
      </CompareTableColumnHeader>
      {features.map((feature, idx) => (
        <CompareTableCell
          highlight={feature.highlight}
          bold
          key={`ProductFeature_${product.sku}_${idx}`}
        >
          {product[feature.name]}
        </CompareTableCell>
      ))}
    </CompareTableColumn>
  );
};

export default ProductColumn;
