import React from "react";
import SelectPairButton from "@components/common/select-pair-button/SelectPairButton";
import { SelectPairWrapper } from "./SelectPair.styles";
import { TokenModel } from "@models/token/token-model";

interface SelectPairProps {
  tokenB: TokenModel | undefined;
  tokenA: TokenModel | undefined;
  changeToken0: (token: TokenModel) => void;
  changeToken1: (token: TokenModel) => void;
  disabled?: boolean;
}

const SelectPair: React.FC<SelectPairProps> = ({
  tokenA,
  tokenB,
  changeToken0,
  changeToken1,
  disabled,
}) => {

  return (
    <SelectPairWrapper>
      <SelectPairButton disabled={disabled} token={tokenA} changeToken={changeToken0} />
      <SelectPairButton disabled={disabled} token={tokenB} changeToken={changeToken1} />
    </SelectPairWrapper>
  );
};

export default SelectPair;
