import React, { FC } from "react";
import styled from "styled-components";
import { Product } from "../../types";
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

const Name = styled.h4``;

const Price = styled.span``;

const PricePer = styled.span``;

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
  features: string[];
};

const ProductColumn: FC<PropType> = ({ product, features }: PropType) => {
  return (
    <CompareTableColumn>
      <CompareTableColumnHeader>
        <Image src={product.productImage} alt={product.name} />
        <Name>{product.name}</Name>
        <Price>{product.salePrice}</Price>
        <PricePer>per stuk / excl. btw</PricePer>
        <Divider />
        <Badges>
          {product.badges.split("|").map((badge, idx) => (
            <Badge src={badge} key={`ProductBadge_${product.sku}_${idx}`} />
          ))}
        </Badges>
      </CompareTableColumnHeader>

      {features.map((feature, idx) => (
        <CompareTableCell key={`ProductFeature_${product.sku}_${idx}`}>
          {product[feature]}
        </CompareTableCell>
      ))}
    </CompareTableColumn>
  );
};

export default ProductColumn;
