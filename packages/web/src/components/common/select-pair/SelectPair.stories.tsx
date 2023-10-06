import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import SelectPair from "./SelectPair";

export default {
  title: "common/AddLiquidity/SelectPair",
  component: SelectPair,
} as ComponentMeta<typeof SelectPair>;

const Template: ComponentStory<typeof SelectPair> = args => (
  <SelectPair {...args} />
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
  tokenA: tokenA,
  tokenB: tokenB,
};

export const SelectableStatus = Template.bind({});
SelectableStatus.args = {
  tokenA: tokenA,
  tokenB: tokenB,
};

export const UnselectableStatus = Template.bind({});
UnselectableStatus.args = {
  tokenA: tokenA,
  tokenB: tokenB,
  disabled: true,
};
