import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import EarnAddLiquidity from "./EarnAddLiquidity";
import { action } from "@storybook/addon-actions";
import { DUMMY_FEE_TIERS, DUMMY_POOL_TICKS, DUMMY_PRICE_RANGE_MAP } from "@containers/earn-add-liquidity-container/earn-add-liquidity-dummy";

export default {
  title: "earn-add/EarnAddLiquidity",
  component: EarnAddLiquidity,
} as ComponentMeta<typeof EarnAddLiquidity>;

const Template: ComponentStory<typeof EarnAddLiquidity> = args => (
  <EarnAddLiquidity {...args} />
);
const tokenA = {
  chainId: "test3",
  address: "0x111111111117dC0aa78b770fA6A738034120C302",
  path: "gno.land/r/demo/1inch",
  name: "1inch",
  symbol: "1INCH",
  decimals: 6,
  logoURI: "https://assets.coingecko.com/coins/images/13469/thumb/1inch-token.png?1608803028",
  priceId: "1inch",
  createdAt: "1999-01-01T00:00:01Z"
};
const tokenB = {
  chainId: "test3",
  address: "0x111111111117dC0aa78b770fA6A738034120C302",
  path: "gno.land/r/demo/1inch",
  name: "1inch",
  symbol: "1INCH",
  decimals: 6,
  logoURI: "https://assets.coingecko.com/coins/images/13469/thumb/1inch-token.png?1608803028",
  priceId: "1inch",
  createdAt: "1999-01-01T00:00:01Z"
};

export const Default = Template.bind({});
Default.args = {
  mode: "POOL",
  tokenA: tokenA,
  tokenB: tokenB,
  feeTiers: DUMMY_FEE_TIERS,
  feeRate: "0.01",
  selectFeeTier: action("selectFeeTier"),
  priceRangeMap: DUMMY_PRICE_RANGE_MAP,
  priceRange: "Custom",
  selectPriceRange: action("selectPriceRange"),
  ticks: DUMMY_POOL_TICKS,
  currentTick: DUMMY_POOL_TICKS[20],
};
