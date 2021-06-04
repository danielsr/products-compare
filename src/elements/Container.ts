import styled from "styled-components";

const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  max-width: 1280px;
  padding-right: 15px;
  padding-left: 15px;

  @media (max-width: 1024px) {
    max-width: 100vw;
    margin-right: 0;
    margin-left: 0;
  }
`;

export default Container;
