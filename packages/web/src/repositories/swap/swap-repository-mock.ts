import { StorageClient } from "@common/clients/storage-client";
import { MockStorageClient } from "@common/clients/storage-client/mock-storage-client";
import { generateNumber } from "@common/utils/test-util";
import {
  SwapExpectedResultResponse,
  SwapFeeResponse,
  SwapRateResponse,
  SwapRepository,
  SwapResponse,
} from ".";
import { SwapRequest } from "./request";
import { WalletClient } from "@common/clients/wallet-client";

export class SwapRepositoryMock implements SwapRepository {
  private localStorageClient: StorageClient;
  private walletClient: WalletClient;

  constructor(walletClient: WalletClient) {
    this.localStorageClient = new MockStorageClient("LOCAL");
    this.walletClient = walletClient;
  }

  public getSwapRate = async (): Promise<SwapRateResponse> => {
    return {
      rate: generateNumber(0, 100),
    };
  };

  public getSwapFee = async (): Promise<SwapFeeResponse> => {
    return {
      fee: generateNumber(0, 1),
    };
  };

  public getExpectedSwapResult = async (): Promise<
    SwapExpectedResultResponse
  > => {
    return {
      price_impact: generateNumber(0, 10000),
      min_received: generateNumber(0, 10000),
      gas_fee: generateNumber(0, 1),
    };
  };

  public getSlippage = (): number => {
    const slippageValue = this.localStorageClient.get("slippage");
    try {
      return parseFloat(slippageValue ?? "0");
    } catch (e) {
      console.error(e);
    }
    return 0;
  };

  public setSlippage = (slippage: number): boolean => {
    this.localStorageClient.set("slippage", `${slippage}`);
    return true;
  };

  public swap = async (swapRequest: SwapRequest): Promise<SwapResponse> => {
    const account = await this.walletClient.getAccount();
    if (!account.data) {
      throw new Error("Swap failed.");
    }
    const { address } = account.data;
    const {
      tokenA,
      tokenB,
      fee,
      receiver,
      zeroForOne,
      amountSpecified,
      sqrtPriceLimitX96,
    } = swapRequest;
    const response = await this.walletClient.sendTransaction({
      messages: [
        {
          caller: address,
          send: "0",
          pkg_path: "gno.land/r/pool",
          func: "Swap",
          args: [
            tokenA,
            tokenB,
            fee,
            receiver,
            zeroForOne,
            amountSpecified,
            sqrtPriceLimitX96,
          ],
        },
      ],
      gasWanted: 100000,
      gasFee: 1,
      memo: "",
    });
    if (response.code !== 0) {
      throw new Error("Swap failed.");
    }
    return {
      tx_hash: response.type,
    };
  };
}
