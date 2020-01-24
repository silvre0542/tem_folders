module.exports = {
  BTC: {
    lib: require('bitcore-lib'),
    p2p: require('bitcore-p2p'),
  },
  BCH: {
    lib: require('bitcore-lib-cash'),
    p2p: require('bitcore-p2p-cash'),
  },
  BCD: {
    lib: require('bitcore-lib-bcd'),
    p2p: require('bitcore-p2p-bcd'),
  },
}
