import booToken from "./BooToken.json";
import lifeToken from "./LifeToken.json";
import singleSwapToken from "./SingleSwapToken.json";
import swapMultiHop from "./SwapMultiHop.json";
import IWETH from "./IWETH.json";
import userStorgeData from "./UserStorageData.json";

export const BooTokenAddress = process.env.NEXT_PUBLIC_BOO_TOKEN_ADDRESS || "0xdB05A386810c809aD5a77422eb189D36c7f24402";
export const BooTokenABI = booToken.abi;

export const LifeTokenAddress = process.env.NEXT_PUBLIC_LIFE_TOKEN_ADDRESS || "0xbf2ad38fd09F37f50f723E35dd84EEa1C282c5C9";
export const LifeTokenABI = lifeToken.abi;

export const SingleSwapTokenAddress = process.env.NEXT_PUBLIC_SINGLE_SWAP_TOKEN_ADDRESS || "0xD28F3246f047Efd4059B24FA1fa587eD9fa3e77F";
export const SingleSwapTokenABI = singleSwapToken.abi;

export const SwapMultiHopAddress = process.env.NEXT_PUBLIC_SWAP_MULTI_HOP_ADDRESS || "0x15F2ea83eB97ede71d84Bd04fFF29444f6b7cd52";
export const SwapMultiHopABI = swapMultiHop.abi;

export const IWETHAddress = process.env.NEXT_PUBLIC_IWETH_ADDRESS || "0x2d13826359803522cCe7a4Cfa2c1b582303DD0B4";
export const IWETHABI = IWETH.abi;

export const userStorageDataAddrss = process.env.NEXT_PUBLIC_USER_STORAGE_ADDRESS || "0x0B32a3F8f5b7E5d315b9E52E640a49A89d89c820";
export const userStorageDataABI = userStorgeData.abi;
