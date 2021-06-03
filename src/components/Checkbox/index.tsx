import React, { FC } from "react";
import { Input, Label, Wrapper } from "./styled";

type PropType = {
  name: string;
  label: string;
};

const Checkbox: FC<PropType> = ({ name, label }: PropType) => {
  return (
    <Wrapper>
      <Input type="checkbox" name={name} />
      <Label htmlFor={name}>{label}</Label>
    </Wrapper>
  );
};

export default Checkbox;
