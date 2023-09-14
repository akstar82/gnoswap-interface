import mixins from "@styles/mixins";

import styled from "@emotion/styled";

export const LiquidityEnterAmountsWrapper = styled.div`
  ${mixins.flexbox("column", "center", "space-between")};
  position: relative;
  flex-wrap: wrap;
  gap: 2px;
  width: 100%;
  height: 100%;

  .arrow {
    ${mixins.flexbox("row", "center", "center")};
    ${mixins.positionCenter()};
    width: 100%;

    .shape {
      ${mixins.flexbox("row", "center", "center")};
      width: 40px;
      height: 40px;
      background-color: ${({ theme }) => theme.color.background01};
      border: 1px solid ${({ theme }) => theme.color.border02};
      border-radius: 50%;

      .add-icon {
        width: 16px;
        height: 16px;
        * {
          fill: ${({ theme }) => theme.color.text01};
        }
      }
    }
  }
`;
