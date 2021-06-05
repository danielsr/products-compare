import styled, { keyframes } from "styled-components";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  border-top: 2px solid ${({ theme }) => theme.colors.grayLighter};
  border-right: 2px solid ${({ theme }) => theme.colors.grayLighter};
  border-bottom: 2px solid ${({ theme }) => theme.colors.grayLighter};
  border-left: 4px solid ${({ theme }) => theme.colors.grayLight};
  background: transparent;
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

export default Spinner;
