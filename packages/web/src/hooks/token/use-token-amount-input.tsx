import BigNumber from "bignumber.js";
import { TokenModel } from "@models/token/token-model";
import { useCallback, useMemo, useState } from "react";

export interface TokenAmountInputModel {
  token: TokenModel | undefined;
  amount: string;
  balance: string;
  usdValue: string;
  changeAmount: (amount: string) => void;
  changeBalance: (balance: number) => void;
}

export const useTokenAmountInput = (token: TokenModel | undefined): TokenAmountInputModel => {
  const [amount, setAmount] = useState<string>("0");
  const [balance, setBalance] = useState<string>("0");
  const [usd, setUSD] = useState<number>();

  const usdValue = useMemo(() => {
    if (!usd) {
      return "-";
    }
    return `$ ${usd}`;
  }, [usd]);

  const changeAmount = useCallback((value: string) => {
    const amount = value;
    setAmount(amount);
    setUSD(BigNumber(amount).toNumber());
  }, []);

  const changeBalance = useCallback((balance: number) => {
    setBalance(BigNumber(balance).toFormat());
  }, []);

  return {
    token,
    amount,
    balance,
    usdValue,
    changeBalance,
    changeAmount,
  };
};