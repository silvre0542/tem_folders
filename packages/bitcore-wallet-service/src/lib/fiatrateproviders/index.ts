var Providers = {
  BitPay: require('./bitpay'),
  //  Bitstamp: require('./bitstamp'), // no longer used
  Binance: require('./binance')
};

module.exports = Providers;
