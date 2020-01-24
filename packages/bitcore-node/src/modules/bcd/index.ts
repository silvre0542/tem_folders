import { BitcoinP2PWorker } from '../bitcoin/p2p';
import { BaseModule } from '..';
import { BCDStateProvider } from '../../providers/chain-state/bcd/bcd';

export default class BCHModule extends BaseModule {
  constructor(services) {
    super(services);
    services.Libs.register('BCD', 'bitcore-lib-bcd', 'bitcore-p2p-bcd');
    services.P2P.register('BCD', BitcoinP2PWorker);
    services.CSP.registerService('BCD', new BCDStateProvider());
  }
}
