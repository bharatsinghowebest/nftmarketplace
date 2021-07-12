import { NFTPort } from './seaport'
import { NFTAPI } from './api'
import { Network, EventData, EventType } from './types'
export { orderToJSON, orderFromJSON, WyvernProtocol } from './utils/utils'
export {
  encodeCall,
  encodeSell, encodeAtomicizedBuy, encodeAtomicizedSell,
  encodeDefaultCall, encodeReplacementPattern,
  AbiType,
} from './utils/schema'

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

export {
  // Main SDK export:
  NFTPort,
  // So the API could be used separately:
  NFTAPI,
  // Useful for serializing and deserializing orders:
  // Types to help initialize SDK and listen to events.
  // Can also be imported using e.g.
  //   import { EventType } from 'nft-js/lib/types'
  EventData, EventType, Network
}
