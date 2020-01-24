module.exports = {
  basePath: '/bws/api',
  disableLogs: false,
  port: 3233,

  // Uncomment to make BWS a forking server
  // cluster: true,

  // Uncomment to set the number or process (will use the nr of availalbe CPUs by default)
  // clusterInstances: 4,

    // https: true,
    // privateKeyFile: 'ssl/server.key',
    // certificateFile: 'ssl/server.pem',
  ////// The following is only for certs which are not
  ////// trusted by nodejs 'https' by default
  ////// CAs like Verisign do not require this
  // CAinter1: '', // ex. 'COMODORSADomainValidationSecureServerCA.crt'
  // CAinter2: '', // ex. 'COMODORSAAddTrustCA.crt'
  // CAroot: '', // ex. 'AddTrustExternalCARoot.crt'

  storageOpts: {
    mongoDb: {
      uri: 'mongodb://localhost:27017/bws',
    },
  },
  messageBrokerOpts: {
    //  To use message broker server, uncomment this:
    messageBrokerServer: {
      url: 'http://localhost:3380',
    },
  },
  blockchainExplorerOpts: {
    // btc: {
    //   livenet: {
    //     provider: 'v8',
    //     url: 'https://api.bitcore.io',
    //   },
    //   testnet: {
    //     provider: 'v8',
    //     url: 'https://api.bitcore.io',
    //     regtestEnabled: false
    //   },
    // },
    // bch: {
    //   livenet: {
    //     provider: 'v8',
    //     url: 'https://api.bitcore.io',
    //   },
    //   testnet: {
    //     provider: 'v8',
    //    // url: 'http://localhost:3000',
    //    url: 'https://api.bitcore.io',
    //   },
    // },

    bcd: {
      // livenet: {
      //   provider: 'v8',
      //   url: 'http://localhost:3000',
      //   apiPrefix2: '/insight-api',
      //   testVal: 'tttt'
      //   // url: 'https://api.bitcore.io',
      // },
      testnet: {
        provider: 'v8',
        url: 'http://localhost:5000',
        // url: 'https://api.bitcore.io',
        apiPrefix2: '/api/BCD/testnet'
      },
    },
    // eth: {
    //   livenet: {
    //     url: 'http://localhost:3000',
    //   },
    //   testnet: {
    //     url: 'http://localhost:3000',
    //   },
    // }
  },
  pushNotificationsOpts: {
    templatePath: './packages/bitcore-wallet-service/lib/templates',
    defaultLanguage: 'en',
    defaultUnit: 'btc',
    subjectPrefix: '',
    pushServerUrl: 'https://fcm.googleapis.com/fcm',
    authorizationKey: 'You_have_to_put_something_here',
  },
  fiatRateServiceOpts: {
    defaultProvider: 'BitPay',
    fetchInterval: 60, // in minutes
  },
  maintenanceOpts: {
    maintenanceMode: false,
  },
  // To use email notifications uncomment this:
  // emailOpts: {
  //  host: 'localhost',
  //  port: 25,
  //  ignoreTLS: true,
  //  subjectPrefix: '[Wallet Service]',
  //  from: 'wallet-service@bitcore.io',
  //  templatePath: 'templates',
  //  defaultLanguage: 'en',
  //  defaultUnit: 'btc',
  //  publicTxUrlTemplate: {
  //    btc: {
  //      livenet: 'https://insight.bitcore.io/#/BTC/mainnet/tx/{{txid}}',
  //      testnet: 'https://insight.bitcore.io/#/BTC/testnet/tx/{{txid}}',
  //    },
  //    bch: {
  //      livenet: 'https://insight.bitcore.io/#/BCH/mainnet/tx/{{txid}}',
  //      testnet: 'https://insight.bitcore.io/#/BCH/testnet/tx/{{txid}}',
  //    }
  //  },
  // },
  // To use sendgrid:
  // const sgMail = require('@sendgrid/mail');
  // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  //
  //
  // //then add:
  // mailer: sgMail,
};
