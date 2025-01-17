import styled from "@emotion/styled";
import { EarnAddConfirmContentSection } from "../earn-add-confirm/EarnAddConfirm.styles";
import { fonts } from "@constants/font.constant";

export const EarnAddConfirmPriceRangeInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  gap: 2px;

  p {
    ${fonts.body8}
    color: ${({ theme }) => theme.color.text10};
    margin-bottom: 6px;
  }

  .price-range-wrapper {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    gap: 2px;
  }
`;

export const EarnAddConfirmPriceRangeInfoSection = styled(
  EarnAddConfirmContentSection,
)`
  gap: 16px;
  ${fonts.body12}
  color: ${({ theme }) => theme.color.text10};

  &.range-section {
    padding: 16px 8px;
    gap: 8px;
    justify-content: space-between;
    align-items: center;

    .amount {
      ${fonts.body4}
      color: ${({ theme }) => theme.color.text01};
    }

    .label {
      ${fonts.p4}
    }
  }
  
  .row {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }
`;
