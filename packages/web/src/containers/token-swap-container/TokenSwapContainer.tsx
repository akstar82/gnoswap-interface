import TokenSwap from "@components/token/token-swap/TokenSwap";
import { useRouter } from "next/router";
import React, { useCallback } from "react";

const TokenSwapContainer: React.FC = () => {
  const router = useRouter();

  const swapNow = useCallback(() => {
    router.push("/swap?from=GNOT&to=GNOS");
  }, [router]);

  const connectWallet = useCallback(() => {
    console.log("Request Adena");
  }, []);

  return (
    <TokenSwap
      from={{
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
      }}
      to={{
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
      }}
      connected={true}
      connectWallet={connectWallet}
      swapNow={swapNow}
    />
  );
};

export default TokenSwapContainer;
