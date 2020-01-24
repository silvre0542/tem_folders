import { IValidation } from '..';
const BitcoreBcd = require('bitcore-lib-bcd');

export class BcdValidation implements IValidation {
  validateAddress(network: string, address: string): boolean {
    const AddressCash = BitcoreBcd.Address;
    // Regular Address: try Bitcoin Cash
    return AddressCash.isValid(address, network);
  }

  validateUri(addressUri: string): boolean {
    // Check if the input is a valid uri or address
    const URICash = BitcoreBcd.URI;
    // Bip21 uri
    return URICash.isValid(addressUri);
  }
}
