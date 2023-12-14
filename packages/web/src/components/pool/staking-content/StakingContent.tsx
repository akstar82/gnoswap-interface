import React from "react";
import StakingContentCard, {
  SummuryApr,
} from "@components/pool/staking-content-card/StakingContentCard";
import {
  StakingContentWrapper,
} from "./StakingContent.styles";
import Button from "@components/common/button/Button";
import { DEVICE_TYPE } from "@styles/media";
import { SkeletonEarnDetailWrapper } from "@layouts/pool-layout/PoolLayout.styles";
import { SHAPE_TYPES, skeletonTokenDetail } from "@constants/skeleton.constant";

interface StakingContentProps {
  content: any[];
  rewardInfo: any;
  breakpoint: DEVICE_TYPE;
  mobile: boolean;
  type: number;
  loading: boolean;
}

const TEXT_BTN = [
  "Stake your positions to get started ⛵",
  "Create your first position to get started ⛵",
  "Keep your position staked to get higher rewards ⌛",
  "Receiving Max Rewards ✨",
];

const StakingContent: React.FC<StakingContentProps> = ({
  content,
  rewardInfo,
  breakpoint,
  mobile,
  type,
  loading,
}) => {
  return (
    <StakingContentWrapper isMobile={mobile}>
      <div className="content-header">
        {loading && <SkeletonEarnDetailWrapper height={36} mobileHeight={24}>
          <span
            css={skeletonTokenDetail("600px", SHAPE_TYPES.ROUNDED_SQUARE)}
          />
        </SkeletonEarnDetailWrapper>}
        {!loading && <span>Stake your position to earn rewards up <span className="to-web">to</span></span>}
        {!loading && <div className="header-wrap">
          <span className="to-mobile">to</span>
          <span className="apr">{rewardInfo.apr}% APR </span>
          <div className="coin-info">
            <img
              src={rewardInfo.tokenPair.tokenA.logoURI}
              alt="token logo"
              className="token-logo"
            />
            <img
              src={rewardInfo.tokenPair.tokenB.logoURI}
              alt="token logo"
              className="token-logo"
            />
          </div>
        </div>}
      </div>
      <div className="staking-wrap">
        <>
          <span>My Staking</span>
          {content.map((item, idx) => {
            return idx + 1 === content.length ? (
              <SummuryApr
                index={idx}
                key={idx + 1}
                item={content[content.length - 1]}
                loading={loading}
              />
            ) : (
              <StakingContentCard
                item={item}
                key={idx}
                breakpoint={breakpoint}
                index={idx + 1}
                loading={loading}
              />
            );
          })}
        </>
      </div>
      <div className="button-wrap">
        {loading && <SkeletonEarnDetailWrapper className="loading-button" height={36} mobileHeight={24}>
          <span
            css={skeletonTokenDetail("400px", SHAPE_TYPES.ROUNDED_SQUARE)}
          />
        </SkeletonEarnDetailWrapper>}
        {!loading && <Button
          text={TEXT_BTN[type]}
          style={{
            width: `${
              breakpoint === DEVICE_TYPE.WEB
                ? "800px"
                : breakpoint === DEVICE_TYPE.TABLET
                ? "600px"
                : "calc(100% - 32px)"
            }`,
            height: `${breakpoint === DEVICE_TYPE.MOBILE ? "49px" : "60px"}`,
            fontType: `${
              breakpoint === DEVICE_TYPE.WEB
                ? "body7"
                : breakpoint === DEVICE_TYPE.MOBILE
                ? "p2"
                : "body9"
            }`,
            textColor: "text01",
            bgColor: "background01",
            padding: "10px 16px",
            gap: "8px",
          }}
          className={type < 3 ? "change-weight" : "receive-button"}
          onClick={() => {}}
        />}
      </div>
    </StakingContentWrapper>
  );
};

export default StakingContent;
