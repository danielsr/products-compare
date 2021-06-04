import React, { FC } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const Label = styled.label`
  font-weight: 500;
`;

const Input = styled.input``;

type PropType = {
  name: string;
  label: string;
};

const Checkbox: FC<PropType> = ({ name, label }: PropType) => {
  return (
    <Wrapper>
      <Input type="checkbox" id={name} name={name} />
      <Label htmlFor={name}>{label}</Label>
    </Wrapper>
  );
};

export default Checkbox;
