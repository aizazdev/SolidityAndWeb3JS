const Tx = require('ethereumjs-tx')
 
const Web3 = require('web3');
// console.log(Web3);

const rpcUrl = "HTTP://127.0.0.1:7545";
let web3 = new Web3(rpcUrl);
// console.log("rpc -> ", web3);

const account1 = "0xE1190047db8E11810522A5134ded82d366c90f5d";
const privateKey1 = "f900d293771446901561d10328f388e2df32f282789900076cf460cf934caeac";

const account2 = "0x4B7Cf23A6c7295F4397674Fd9fc0a70faB043D8B";
const privateKey2 = "4bc0ba5372e9438861f5e00dda20a7a5cff0ca44b577001eabe44da37f42254e";

const privateKey1Buffer = Buffer.from(privateKey1, 'hex');
const privateKey2Buffer = Buffer.from(privateKey2, 'hex');

web3.eth.getTransactionCount(account1, (err, countTx) => {
    const txObject = {
        nonce: web3.utils.toHex(countTx),
        to: account2,
        value: web3.utils.toHex(web3.utils.toWei('10', 'ether')),
        gasLimit: web3.utils.toHex(21000),
        gasPrice: web3.utils.toHex(web3.utils.toWei('50', 'gwei'))
    }
    const tx = new Tx.Transaction(txObject);
    tx.sign(privateKey1Buffer);
    const serializeTx = tx.serialize();
    const raw = '0x' + serializeTx.toString('hex');
    console.log('tx ', tx);
    web3.eth.sendSignedTransaction(raw, (err, txHash) => {
        console.log('Transaction Hash ', txHash);
    })
});

