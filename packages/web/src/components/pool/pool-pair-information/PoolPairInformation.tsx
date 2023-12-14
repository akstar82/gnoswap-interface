import React, { useMemo } from "react";
import PoolPairInfoContent from "@components/pool/pool-pair-info-content/PoolPairInfoContent";
import PoolPairInfoHeader from "@components/pool/pool-pair-info-header/PoolPairInfoHeader";
import {
  PoolPairInformationWrapper,
  BreadcrumbsWrapper,
} from "./PoolPairInformation.styles";
import IconStrokeArrowRight from "@components/common/icons/IconStrokeArrowRight";
import {
  pathProps,
} from "@containers/pool-pair-information-container/PoolPairInformationContainer";
import { PoolDetailModel } from "@models/pool/pool-detail-model";
import { SHAPE_TYPES, skeletonTokenDetail } from "@constants/skeleton.constant";
import { SkeletonEarnDetailWrapper } from "@layouts/pool-layout/PoolLayout.styles";

interface PoolPairInformationProps {
  pool: PoolDetailModel;
  menu: pathProps;
  feeStr: string | null;
  onClickPath: (path: string) => void;
  loading: boolean;
}

const PoolPairInformation: React.FC<PoolPairInformationProps> = ({
  pool,
  menu,
  feeStr,
  onClickPath,
  loading,
}) => {
  const tokenInfo = useMemo(() => {
    return `${pool.tokenA.symbol}/${pool.tokenB.symbol} (${feeStr || "0"})`;
  }, [feeStr, pool.tokenA.symbol, pool.tokenB.symbol]);

  return (
    <PoolPairInformationWrapper>
      <BreadcrumbsWrapper>
        <div className="page-name">Earn</div>
        <div className="location">
          <span onClick={() => onClickPath(menu.path)}>{menu.title}</span>
          <IconStrokeArrowRight className="step-icon" />
          <span className="token">
            {tokenInfo}
          </span>
        </div>
      </BreadcrumbsWrapper>
      <div className="token-status">
        {loading && <SkeletonEarnDetailWrapper height={36} mobileHeight={24}>
          <span
            css={skeletonTokenDetail("300px", SHAPE_TYPES.ROUNDED_SQUARE)}
          />
          </SkeletonEarnDetailWrapper>}
        {!loading && <PoolPairInfoHeader
          tokenA={pool.tokenA}
          tokenB={pool.tokenB}
          incentivizedType={pool.incentivizedType}
          rewardTokens={pool.rewardTokens}
          feeStr={feeStr || ""}
        />}
        <PoolPairInfoContent pool={pool} loading={loading}/>
      </div>
    </PoolPairInformationWrapper>
  );
};

export default PoolPairInformation;
