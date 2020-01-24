import _ from 'lodash';

module.exports = {
  name: 'Binance',
  url: 'https://api.binance.com/api/v3/ticker/price',
  parseFn(raw) {
    var rates = _.compact(
      _.map(raw, function(d) {
        if (!d.symbol || !d.price) return [];
        if (!d.symbol.toString().endsWith('BTC')) return [];
        if (d.symbol != 'BCDBTC') return [];
        return {
          code: d.symbol.substr(0, d.symbol.length - 3),
          value: d.price
        };
      })
    );
    return rates;
  }
};
