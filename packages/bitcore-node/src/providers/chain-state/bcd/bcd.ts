//import { CSP } from '../../../types/namespaces/ChainStateProvider';
import { BTCStateProvider } from '../btc/btc';

export class BCDStateProvider extends BTCStateProvider {
  constructor(chain: string = 'BCD') {
    super(chain);
  }

//   async getBlocks(params: CSP.GetBlockParams) {
//     let blocks = await super.getBlocks(params);

//     blocks.map(x => {
//       x.reward = x.reward * 10;
//     });

//     return blocks;
//   }

//   streamBlocks(params: CSP.StreamBlocksParams) {
//     this.streamBlocksWithTransform(params, b => {
//       b.reward = b.reward * 10;
//       return b;
//     });
//   }

//   async streamTransactions(params: CSP.StreamTransactionsParams) {
//     super.streamTransactionsWithTransform(params, t => {
//       t.fee = t.fee * 10;
//       t.value = t.value * 10;
//       return t;
//     });
//   }

//   async getFee(params: CSP.GetEstimateSmartFeeParams) {
//     const { chain, network, target } = params;
//     return this.getRPC(chain, network)
//       .getEstimateSmartFee(Number(target))
//       .then((x: any) => {
//         if (!x) return x;
//         // x.feerate = x.feerate / 10;
//         return x;
//       });
//   }

//   async getBalanceForAddress(params: CSP.GetBalanceForAddressParams) {
//     let balance = await super.getBalanceForAddress(params);
//     balance.balance = balance.balance * 10;
//     balance.confirmed = balance.confirmed * 10;
//     balance.unconfirmed = balance.unconfirmed * 10;
//     return balance;
//   }

//   async getTopWallets(params) {
//     params.args.multiplier = 10;
//     let wallets = await super.getTopWallets(params);
//     return wallets;
//   }
}
