import { BitcoreLibBcd } from 'crypto-wallet-core';
import _ from 'lodash';
import { IChain } from '..';
import { BtcChain } from '../btc';

const Common = require('../../common');
const Defaults = Common.Defaults;
const Errors = require('../../errors/errordefinitions');

export class BcdChain extends BtcChain implements IChain {
  constructor() {
    super(BitcoreLibBcd);
  }

  getWalletSendMaxInfo(server, wallet, opts, cb) {
    opts = opts || {};
    // BCD HACK!
    opts.feeMultiplier = 1;
    super.getWalletSendMaxInfo(server, wallet, opts, cb);
  }
}
