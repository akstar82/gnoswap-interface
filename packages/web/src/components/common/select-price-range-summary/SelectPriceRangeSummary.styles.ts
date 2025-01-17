import styled from "@emotion/styled";
import { fonts } from "@constants/font.constant";

export const SelectPriceRangeSummaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  padding: 16px;
  gap: 16px;
  margin-top: 8px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.color.border02};
  background: ${({ theme }) => theme.color.backgroundOpacity};

  .row {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    .title-wrapper {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 4px;

      svg {
        width: 16px;
        height: 16px;
        cursor: pointer;
        * {
          fill: ${({ theme }) => theme.color.icon03};
        }
      }
    }

    .title {
      color: ${({ theme }) => theme.color.text04};
      ${fonts.body12};
    }

    .value {
      color: ${({ theme }) => theme.color.text03};
      ${fonts.body12};
    }
  }
`;
