import styled from "@emotion/styled";
import { fonts } from "@constants/font.constant";

export const SelectDistributionDateInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  z-index: 3;

  & .description {
    ${fonts.p4}
    color: ${({ theme }) => theme.color.text04};
    margin-bottom: 4px;
  }

  & .date-wrapper {
    display: flex;
    width: 100%;
    height: 48px;
    padding: 0px 16px;
    gap: 8px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.color.border02};
    background: ${({ theme }) => theme.color.backgroundOpacity};
    cursor: pointer;

    & .icon-calender {
      width: 24px;
      height: 24px;
    }

    & .date {
      height: 16px;
      ${fonts.body9}
      color: ${({ theme }) => theme.color.text02};
    }
  }

  & .calendar-container {
    position: relative;

    & .calendar-wrapper {
      position: absolute;
      top: 0;
      width: 315px;
      z-index: 10;
    }
  }
`;
