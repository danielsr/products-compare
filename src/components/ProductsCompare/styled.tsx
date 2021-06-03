import styled from "styled-components";

export const CompareTable = styled.div`
  display: flex;
  border-top: 1px solid #ccc;
  border-bottom: 2px solid #0000ff;
  padding-bottom: 20px;
`;

export const CompareTableColumn = styled.div`
  border-right: 1px solid #ccc;
  width: 250px;
  min-width: 250px;
`;

export const CompareTableColumnHeader = styled.div`
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CompareTableCell = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid #ccc;
  height: 30px;
`;

export const CompareTableColumns = styled.div`
  display: flex;
  overflow-x: auto;
`;

export const Wrapper = styled.div``;

export const Title = styled.h1`
  font-size: 2rem;
  color: #0000ff;
`;
