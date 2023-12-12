import { PoolRepository } from ".";

import PoolDetailData from "./mock/pool-detail.json";
import { PoolRPCModel } from "@models/pool/pool-rpc-model";
import { PoolError } from "@common/errors/pool";
import rpcPools from "./mock/rpc-pools.json";
import { PoolRPCMapper } from "@models/pool/mapper/pool-rpc-mapper";
import { PoolModel } from "@models/pool/pool-model";
import { PoolDetailRPCModel } from "@models/pool/pool-detail-rpc-model";
import { PoolDetailModel } from "@models/pool/pool-detail-model";
export class PoolRepositoryMock implements PoolRepository {
  getPools = async (): Promise<PoolModel[]> => {
    return [];
  };

  getRPCPools = async (): Promise<PoolRPCModel[]> => {
    return rpcPools.map(pool => PoolRPCMapper.from(pool as any));
  };

  getPoolDetailRPCByPoolPath = async (): Promise<PoolDetailRPCModel> => {
    throw new PoolError("NOT_FOUND_POOL");
  };

  getPoolDetailByPoolPath = async (): Promise<PoolDetailModel> => {
    return PoolDetailData.pool as PoolDetailModel;
  };

  createPool = async (): Promise<string> => {
    return "hash";
  };

  addLiquidity = async (): Promise<string> => {
    return "hash";
  };
}
