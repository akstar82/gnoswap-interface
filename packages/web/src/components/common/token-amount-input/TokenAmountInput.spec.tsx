import { render } from "@testing-library/react";
import { Provider as JotaiProvider } from "jotai";
import GnoswapThemeProvider from "@providers/gnoswap-theme-provider/GnoswapThemeProvider";
import TokenAmountInput, { TokenAmountInputProps } from "./TokenAmountInput";

const token = {
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

describe("TokenAmountInput Component", () => {
  it("TokenAmountInput render", () => {
    const args: TokenAmountInputProps = {
      token,
      amount: "12,211",
      balance: "12,211",
      usdValue: "12.3",
      changable: true,
      changeBalance: () => { return; },
      changeAmount: () => { return; },
      changeToken: () => { return; },
    };

    render(
      <JotaiProvider>
        <GnoswapThemeProvider>
          <TokenAmountInput {...args} />
        </GnoswapThemeProvider>
      </JotaiProvider>,
    );
  });
});