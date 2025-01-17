import { ValuesType } from "utility-types";

export type SwapFeeTierType =
  | "FEE_100"
  | "FEE_500"
  | "FEE_3000"
  | "FEE_10000"
  | "NONE";

export interface SwapFeeTierInfo {
  type: SwapFeeTierType;
  fee: number;
  rateStr: string;
  description: string;
}

export const SwapFeeRateMap: Record<SwapFeeTierType, number> = {
  FEE_100: 100,
  FEE_500: 500,
  FEE_3000: 3000,
  FEE_10000: 10000,
  NONE: 0,
} as const;

export const SwapFeeTierInfoMap: Record<SwapFeeTierType, SwapFeeTierInfo> = {
  FEE_100: {
    type: "FEE_100",
    fee: 100,
    rateStr: "0.01%",
    description: "Best for very stable pairs",
  },
  FEE_500: {
    type: "FEE_500",
    fee: 500,
    rateStr: "0.05%",
    description: "Best for stable pairs",
  },
  FEE_3000: {
    type: "FEE_3000",
    fee: 3000,
    rateStr: "0.3%",
    description: "Best for most pairs",
  },
  FEE_10000: {
    type: "FEE_10000",
    fee: 10000,
    rateStr: "1%",
    description: "Best for exotic pairs",
  },
  NONE: {
    type: "NONE",
    fee: 0,
    rateStr: "-",
    description: "-",
  },
} as const;

export const FEE_RATE_OPTION = {
  FEE_01: "0.01",
  FEE_05: "0.05",
  FEE_3: "0.3",
  FEE_1: "1",
} as const;
export type FeeRateOption = ValuesType<typeof FEE_RATE_OPTION>;

export const STAKED_OPTION = {
  NONE: "NONE",
  STAKED: "Staked",
  UNSTAKING: "Unstaking",
  UNSTAKED: "Unstaked",
} as const;
export type STAKED_OPTION = ValuesType<typeof STAKED_OPTION>;

export const STATUS_OPTION = {
  SUCCESS: "SUCCESS",
  PENDING: "PENDING",
  FAILED: "FAILED",
} as const;
export type STATUS_OPTION = ValuesType<typeof STATUS_OPTION>;

export const ACTIVE_STATUS_OPTION = {
  NONE: "NONE",
  ACTIVE: "ACTIVE",
  IN_ACTIVE: "IN_ACTIVE",
} as const;
export type ACTIVE_STATUS_OPTION = ValuesType<typeof ACTIVE_STATUS_OPTION>;

export const RANGE_STATUS_OPTION = {
  NONE: "NONE",
  IN: "IN",
  OUT: "OUT",
} as const;
export type RANGE_STATUS_OPTION = ValuesType<typeof RANGE_STATUS_OPTION>;

export const MATH_NEGATIVE_TYPE = {
  NEGATIVE: "NEGATIVE",
  POSITIVE: "POSITIVE",
  NONE: "NONE",
} as const;
export type MATH_NEGATIVE_TYPE = ValuesType<typeof MATH_NEGATIVE_TYPE>;

export const INCENTIVIZED_TYPE = {
  INCENTIVIZED: "Incentivized",
  NON_INCENTIVIZED: "Non_Incentivized",
  EXTERNAL_INCENTIVIZED: "External_Incentivized",
} as const;
export type INCENTIVIZED_TYPE = ValuesType<typeof INCENTIVIZED_TYPE>;

export const CHART_TYPE = {
  "7D": "7D",
  "1M": "1M",
  "1Y": "1Y",
  YTD: "YTD",
} as const;
export type CHART_TYPE = ValuesType<typeof CHART_TYPE>;

export type IncentivizedOptions =
  | "INCENTIVIZED"
  | "NON_INCENTIVIZED"
  | "EXTERNAL_INCENTIVIZED";

export type AddLiquidityType = "POOL" | "LIQUIDITY";

export type PriceRangeType = "Active" | "Passive" | "Custom";

export const PriceRangeTooltip: {
  [key in PriceRangeType]: string | undefined;
} = {
  Active:
    "An aggressive price range of [-10% ~ +10%] for higher risks & returns.",
  Passive:
    "A passive price range of [-50% ~ +100%] for moderate risks & returns.",
  Custom: undefined,
};

export const DEFAULT_SLIPPAGE = 0.5;

export type AddLiquiditySubmitType =
  | "CREATE_POOL"
  | "ADD_LIQUIDITY"
  | "CONNECT_WALLET"
  | "INVALID_PAIR"
  | "ENTER_AMOUNT"
  | "INSUFFICIENT_BALANCE"
  | "INVALID_RANGE";
