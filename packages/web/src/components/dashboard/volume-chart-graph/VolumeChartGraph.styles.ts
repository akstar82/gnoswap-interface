import styled from "@emotion/styled";
import { fonts } from "@constants/font.constant";
import { media } from "@styles/media";
import mixins from "@styles/mixins";

export const VolumeChartGraphWrapper = styled.div`
  ${mixins.flexbox("column", "flex-start", "flex-start")};
  width: 100%;
  background-color: ${({ theme }) => theme.color.background15};
  border-radius: 8px;
  padding: 0 0 12px 0;
  ${media.mobile} {
    padding: 0 0 4px 0;
  }

  .data-wrapper {
    width: 100%;
    .graph-wrap {
      ${mixins.flexbox("column", "flex-start", "flex-start")};
      width: 100%;
    }

    .graph {
      padding: 0px 6px;
      height: 204px;
      border-bottom: 1px solid ${({ theme }) => theme.color.border02};
      & svg {
        height: 204px;
      }
    }

    .xaxis-wrapper {
      ${mixins.flexbox("row", "center", "space-between")};
      width: 100%;
      height: 17px;
      flex-shrink: 0;
      margin-top: 13px;
      padding: 0 12px;
      ${media.mobile} {
        margin-top: 4px;
        height: 13px;
      }
      ${fonts.body12};
      color: ${({ theme }) => theme.color.text04};

      span {
        ${fonts.body12};
        ${media.mobile} {
          ${fonts.p7};
        }
        color: ${({ theme }) => theme.color.text04};
      }
    }
  }
`;
