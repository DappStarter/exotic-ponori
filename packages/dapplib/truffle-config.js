require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace sell tackle spot crazy return sad social include end army genuine'; 
let testAccounts = [
"0xa02bc4406da03ed3eee556b049b7fafb43e8f8c3b8f96aaf3822c0191558eaec",
"0x0dc1a3e198cbec3ad4464b750743b662270e2bcba27971d9e148580f1b8fc5fa",
"0x642e956924aebc66f8955eb1daa66d7f0868ba9247ab5750263fb1c2d81215ff",
"0x14b6644d97c2f3ddb86b3979664b8d74546c3c9f31bc1ffbf51f1a0f2b32cd2d",
"0x1c3b4371a38eadffc2c2b5479106fd5a9af91f3392fae453beca695cce973bda",
"0x42ccfff7433c9785e2652ef264edd19f4fe6d6cb059471d45861d0742165f66f",
"0x380189433114563d67e0acd907dfa787571c0795414620d01ee6428160e646ab",
"0xc57b9c508b7166b847c29610ae37f65389400fa4cc752f1dd9eb632e02445b41",
"0x6b497eb6359e951997cbd1af8e634112496357a9804e67512a8e783cb17a3edf",
"0x0288dc555d7a3161641716fab7f5a98e050ce3abfbe632fe29b5d48e8864d797"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
