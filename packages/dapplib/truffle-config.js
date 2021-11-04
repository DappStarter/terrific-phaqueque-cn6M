require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner clog orient spot grief ranch remind artist gesture merry flock token'; 
let testAccounts = [
"0x27e0a18778e1a57cdce531682cb6dbb04907f814dec696017c9cd6c2bbefc0f1",
"0xbb5bfe564f4bb1a95de4464ed236a06e9247a925fa8e6c87e3a8400be24fc39d",
"0x04ad902fa820815f42eb4a96fe809ee256071829e79e7eed659a82f78b4ad03c",
"0xbc2c3fcb730734589b2c8854d6e316d24504879da3d4d25a282715b3d6f035d5",
"0x01a41f556c14728453504c7069391fd84d83a6d74fd178ce82f8988025967463",
"0x49bb0c1f5de4f7c92c7f41f42fc63e78bce157126615f4d70707a3be8272a178",
"0x73c109858c8447a06b6f3c8b0e684e3ece64b589c931b63dffddfcc4c8a7fa68",
"0x3434d3f72388e59eb2b819b3bab1593dd1cb7c07b4fb1452f83639f6a820dd24",
"0x67dc18c44ffe3f3965d33b1bf75e8e9e0e67d443d75a3cbbb137b2c0b13ba4a9",
"0x30a1e1b2f3bd6368623f62ef9f7e29fdb5730344ff379216cde8ec9de3ea765b"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


