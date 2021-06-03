import React, { FC } from "react";
import { CompareTableCell } from "./styled";

type PropType = {
  features: string[];
};

const FeatureLabels: FC<PropType> = ({ features }: PropType) => {
  return (
    <>
      {features.map((feature, idx) => (
        <CompareTableCell key={`FeatureLabel_${idx}`}>
          {feature}
        </CompareTableCell>
      ))}
    </>
  );
};

export default FeatureLabels;
