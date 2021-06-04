import React, { FC } from "react";
import { ProductFeature } from "../../types";
import { CompareTableCell } from "./styled";

type PropType = {
  features: ProductFeature[];
};

const FeatureLabels: FC<PropType> = ({ features }: PropType) => {
  return (
    <>
      {features.map((feature, idx) => (
        <CompareTableCell
          highlight={feature.highlight}
          key={`FeatureLabel_${idx}`}
        >
          {feature.name}
        </CompareTableCell>
      ))}
    </>
  );
};

export default FeatureLabels;
