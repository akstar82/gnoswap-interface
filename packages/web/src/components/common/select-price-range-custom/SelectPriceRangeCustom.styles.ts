import { fonts } from "@constants/font.constant";
import styled from "@emotion/styled";

export const SelectPriceRangeCustomWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 24px 16px;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  background: ${({ theme }) => theme.color.background06};
  border-radius: 8px;
  margin-top: 8px;

  .option-wrapper {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;

    .graph-option-wrapper {
      display: flex;
      align-items: flex-start;
      gap: 4px;

      .graph-option-item {
        display: flex;
        padding: 2px;
        width: 28px;
        height: 28px;
        border-radius: 4px;
        justify-content: center;
        align-items: flex-start;
        background: ${({ theme }) => theme.color.background02};
        color: ${({ theme }) => theme.color.icon05};
        ${fonts.body6}
        line-height: 22px;
        cursor: pointer;
      }
    }
  }

  .current-price-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    color: ${({ theme }) => theme.color.text05};
    ${fonts.body12};
  }

  .range-controller-wrapper {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;
  }

  .extra-wrapper {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;

    .icon-button {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 4px;
      cursor: pointer;

      svg {
        width: 16px;
        height: 16px;

        path {
          fill: ${({ theme }) => theme.color.icon05};
        }
      }

      span {
        color: ${({ theme }) => theme.color.text05};
        ${fonts.body11};
      }
    }
  }
`;
