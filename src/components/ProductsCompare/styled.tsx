import styled, { css } from "styled-components";

export const CompareTable = styled.div`
  display: flex;
  border-top: 1px solid #eaeaea;
  border-bottom: 2px solid #0050bc;
  padding-bottom: 20px;
`;

export const CompareTableColumn = styled.div`
  border-right: 1px solid #eaeaea;
  width: 250px;
  min-width: 250px;
`;

export const CompareTableColumnHeader = styled.div`
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 15px;
`;

export const CompareTableCell = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  padding-left: 15px;
  border-top: 1px solid #eaeaea;
`;

export const CompareTableColumns = styled.div`
  display: flex;
  overflow-x: auto;
`;

export const Wrapper = styled.div``;

export const Title = styled.h1`
  font-size: 2rem;
  color: #0050bc;
`;

export const QualityLabel = styled(CompareTableCell)`
  padding-left: unset;
  border: none;
`;
