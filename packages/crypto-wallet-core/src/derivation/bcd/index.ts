const BitcoreLibBcd = require('bitcore-lib-bcd');
import { AbstractBitcoreLibDeriver } from '../btc';
export class BcdDeriver extends AbstractBitcoreLibDeriver {
  bitcoreLib = BitcoreLibBcd;
}
