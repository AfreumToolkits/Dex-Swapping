import { ethers, BigNumber } from "ethers";
import axios from "axios";

const bn = require("bignumber.js");
bn.config({ EXPONENTIAL_AT: 999999, DECIMAL_PLACES: 40 });

const UNISWAP_V3_FACTORY_ADDRESS = "0x1F98431c8aD98523631AE4a59f267346ea31F984";
const NON_FUNGABLE_MANAGER = "0xC36442b4a4522E871399CD717aBDD847Ab11FE88";
const artifacts = {
  UniswapV3Factory: require("@uniswap/v3-core/artifacts/contracts/UniswapV3Factory.sol/UniswapV3Factory.json"),
  NonfungiblePositionManager: require("@uniswap/v3-periphery/artifacts/contracts/NonfungiblePositionManager.sol/NonfungiblePositionManager.json"),
};

export const fetchPoolContract = (signerOrProvider) =>
  new ethers.Contract(
    UNISWAP_V3_FACTORY_ADDRESS,
    artifacts.UniswapV3Factory.abi,
    signerOrProvider
  );

export const fetchPositionContract = (signerOrProvider) =>
  new ethers.Contract(
    NON_FUNGABLE_MANAGER,
    artifacts.NonfungiblePositionManager.abi,
    signerOrProvider
  );

const encodePriceSqrt = (reserve1, reserve0) => {
  return BigNumber.from(
    new bn(reserve1.toString())
      .div(reserve0.toString())
      .sqrt()
      .multipliedBy(new bn(2).pow(96))
      .integerValue(3)
      .toString()
  );
};

const getWeb3Modal = async () => {
  if (typeof window === "undefined") return null;
  const Web3Modal = (await import("web3modal")).default;
  return new Web3Modal();
};

export const connectingWithPoolContract = async (
  address1,
  address2,
  fee,
  tokenFee1,
  tokenFee2
) => {
  const web3modal = await getWeb3Modal();
  if (!web3modal) return null;
  
  const connection = await web3modal.connect();
  const provider = new ethers.providers.Web3Provider(connection);
  const signer = provider.getSigner();

  const createPoolContract = await fetchPositionContract(signer);

  const price = encodePriceSqrt(tokenFee1, tokenFee2);
  const transaction = await createPoolContract
    .connect(signer)
    .createAndInitializePoolIfNecessary(address1, address2, fee, price, {
      gasLimit: 30000000,
    });

  await transaction.wait();

  const factory = await fetchPoolContract(signer);
  const poolAddress = await factory.getPool(address1, address2, fee);

  return poolAddress;
};
