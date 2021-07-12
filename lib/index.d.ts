import { NFTPort } from './seaport';
import { NFTAPI } from './api';
import { Network, EventData, EventType } from './types';
export { orderToJSON, orderFromJSON, WyvernProtocol } from './utils/utils';
export { encodeCall, encodeSell, encodeAtomicizedBuy, encodeAtomicizedSell, encodeDefaultCall, encodeReplacementPattern, AbiType, } from './utils/schema';
/**
 * Example setup:
 *
 * import * as Web3 from 'web3'
 * import { NFTPort, Network } from 'nft-js'
 * const provider = new Web3.providers.HttpProvider('https://mainnet.infura.io')
 * const client = new NFTPort(provider, {
 *   networkName: Network.Main
 * })
 */
export { NFTPort, NFTAPI, EventData, EventType, Network };
