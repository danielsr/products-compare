import styled, { css } from "styled-components";

export const CompareTable = styled.div`
  display: flex;
  border-top: 1px solid ${({ theme }) => theme.colors.grayLighter};
  border-bottom: 4px solid ${({ theme }) => theme.colors.primary};
  padding-bottom: 30px;
`;

export const CompareTableColumn = styled.div`
  min-width: 225px;
  max-width: 250px;
`;

export const CompareTableColumnHeader = styled.div`
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 15px;
`;

type CompareTableCellPropType = {
  bold?: boolean;
  highlight?: boolean;
};

export const CompareTableCell = styled.div<CompareTableCellPropType>`
  display: flex;
  align-items: center;
  height: 30px;
  padding-left: 15px;
  border-top: 1px solid ${({ theme }) => theme.colors.grayLighter};

  ${({ bold }) =>
    bold &&
    css`
      font-weight: 500;
    `}

  ${({ highlight, theme }) =>
    highlight &&
    css`
      background-color: ${theme.colors.grayLighter};
    `}
`;

export const CompareTableColumns = styled.div`
  display: flex;
  overflow-x: auto;
  border-left: 1px solid ${({ theme }) => theme.colors.grayLighter};
`;

export const Wrapper = styled.div``;

export const Title = styled.h1`
  font-size: 1.8rem;
  margin: 20px 0;
  color: ${({ theme }) => theme.colors.primary};
`;

export const QualityLabel = styled(CompareTableCell)`
  padding-left: unset;
  border: none;
`;

export const Loading = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
`;
