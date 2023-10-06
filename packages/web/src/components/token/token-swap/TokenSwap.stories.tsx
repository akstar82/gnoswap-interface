import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import TokenSwap from "./TokenSwap";
import { action } from "@storybook/addon-actions";

export default {
  title: "token/TokenSwap",
  component: TokenSwap,
} as ComponentMeta<typeof TokenSwap>;

const Template: ComponentStory<typeof TokenSwap> = args => (
  <TokenSwap {...args} />
);

export const Default = Template.bind({});
Default.args = {
  from: {
    token: {
      chainId: "test3",
      address: "0x111111111117dC0aa78b770fA6A738034120C302",
      path: "gno.land/r/demo/1inch",
      name: "1inch",
      symbol: "1INCH",
      decimals: 6,
      logoURI: "https://assets.coingecko.com/coins/images/13469/thumb/1inch-token.png?1608803028",
      priceId: "1inch",
      createdAt: "1999-01-01T00:00:01Z"
    },
    amount: "121",
    price: "$0.00",
    balance: "0",
  },
  to: {
    token: {
      chainId: "test3",
      address: "0x111111111117dC0aa78b770fA6A738034120C302",
      path: "gno.land/r/demo/1inch",
      name: "1inch",
      symbol: "1INCH",
      decimals: 6,
      logoURI: "https://assets.coingecko.com/coins/images/13469/thumb/1inch-token.png?1608803028",
      priceId: "1inch",
      createdAt: "1999-01-01T00:00:01Z"
    },
    amount: "5000",
    price: "$0.00",
    balance: "0",
  },
  connected: true,
  connectWallet: action("connectWallet"),
  swapNow: action("swapNow"),
};
