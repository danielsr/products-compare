import React, { FC } from "react";
import styled, { useTheme } from "styled-components";
import { CompareTableColumn, CompareTableColumnHeader } from "./styled";
import SvgDelete from "assets/images/delete.svg";
import ProductBadges from "./ProductBadges";
import ProductFeatures from "./ProductFeatures";

const Image = styled.img`
  height: 100px;
  object-fit: contain;
  margin-top: 20px;
`;

const Name = styled.h4`
  color: ${({ theme }) => theme.colors.primary};
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
  color: ${({ theme }) => theme.colors.grayLight};
  font-size: 0.9rem;
`;

const Divider = styled.hr`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.grayLighter};
  border: none;
`;

const DeleteIcon = styled(SvgDelete)`
  margin-top: 20px;
  align-self: flex-end;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

type PropType = {
  product: Product.Product;
  features: Product.Feature[];
  onDelete: (product: Product.Product) => void;
};

const ProductColumn: FC<PropType> = ({
  product,
  features,
  onDelete,
}: PropType) => {
  const theme = useTheme();

  return (
    <CompareTableColumn>
      <CompareTableColumnHeader>
        <DeleteIcon
          fill={theme.colors.primary}
          onClick={() => onDelete(product)}
        />
        <Image src={product.productImage} alt={product.name} />
        <Name>{product.name}</Name>
        <Price>
          <PriceValue>{product.salePrice}</PriceValue>
          <PricePer>per stuk / excl. btw</PricePer>
        </Price>
        <Divider />
        <ProductBadges product={product} />
      </CompareTableColumnHeader>
      <ProductFeatures product={product} features={features} />
    </CompareTableColumn>
  );
};

export default ProductColumn;
