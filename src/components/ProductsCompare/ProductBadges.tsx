import React, { FC } from "react";
import styled from "styled-components";

const Badges = styled.div`
  display: flex;
  gap: 5px;
  padding-bottom: 5px;
`;

const Badge = styled.img`
  width: 25px;
`;

type PropType = {
  product: Product.Product;
};

const ProductBadges: FC<PropType> = ({ product }: PropType) => {
  return (
    <Badges>
      {product.badges.split("|").map((badge, idx) => (
        <Badge src={badge} key={`ProductBadge_${product.sku}_${idx}`} />
      ))}
    </Badges>
  );
};

export default ProductBadges;
