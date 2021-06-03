import React, { FC } from "react";
import styled from "styled-components";

type PropType = {
  name: string;
  label: string;
};

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
`;
const Label = styled.label``;
const Input = styled.input``;

const Checkbox: FC<PropType> = ({ name, label }: PropType) => {
  return (
    <Wrapper>
      <Input type="checkbox" name={name} />
      <Label htmlFor={name}>{label}</Label>
    </Wrapper>
  );
};

export default Checkbox;
