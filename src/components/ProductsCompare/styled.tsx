import styled from "styled-components";

export const Wrapper = styled.div``;

export const Title = styled.h1`
  font-size: 2rem;
  color: #0000ff;
`;

export const Table = styled.div`
  display: flex;
  border-top: 1px solid #ccc;
  border-bottom: 2px solid #0000ff;
  padding-bottom: 20px;
`;

export const Column = styled.div`
  border-right: 1px solid #ccc;
  width: 250px;
  min-width: 250px;
`;

export const ColumnHeader = styled.div`
  height: 400px;
`;

export const Cell = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid #ccc;
  height: 30px;
`;

export const Products = styled.div`
  display: flex;
  overflow-x: auto;
`;

export const ProductsSelect = styled.div`
  padding: 20px 20px 0 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
