import { fonts } from "@constants/font.constant";
import styled from "@emotion/styled";
import { media } from "@styles/media";
import mixins from "@styles/mixins";

export const SwapCardHeaderWrapper = styled.div`
  ${mixins.flexbox("row", "center", "space-between")};
  width: 100%;

  h2 {
    ${fonts.h6};
    ${media.mobile} {
      ${fonts.body9};
    }
    color: ${({ theme }) => theme.color.text02};
  }

  .button-wrap {
    ${mixins.flexbox("row", "center", "flex-start")};
    gap: 12px;
  }

  .setting-wrap {
    ${mixins.flexbox("row", "center", "center")};
    width: 24px;
    height: 24px;
    cursor: pointer;
    .setting-icon * {
      fill: ${({ theme }) => theme.color.icon03};
    }
  }
`;

export const SettingMenuButton = styled.div`
  ${mixins.flexbox("row", "center", "center")};
  position: relative;
`;