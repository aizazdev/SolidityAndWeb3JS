const Tx = require('ethereumjs-tx')
 
const Web3 = require('web3');
// console.log(Web3);

const rpcUrl = "https://ropsten.infura.io/v3/e94d0d07e6d344de8f7bde30a57c0e7b";
let web3 = new Web3(rpcUrl);
// console.log("rpc -> ", web3);

const account1 = "0xA54F6B9741e17fDd730DFC34DCFEC317c50939Eb";
const privateKey1 = "3dd29c2874f41d00d4988d49c6b78c015ccb59705f71c8ee55cbfc7bace2efa6";

const account2 = "0xF56f6C670278B8A8c7Cab226c01129298596C92A";
const privateKey2 = "c7bd103101284fffa97af99844e124ee68d562f14803d203586c575498d77f6c";

const privateKey1Buffer = Buffer.from(privateKey1, 'hex');
const privateKey2Buffer = Buffer.from(privateKey2, 'hex');

web3.eth.getTransactionCount(account1, (err, countTx) => {
    const txObject = {
        nonce: web3.utils.toHex(countTx),
        to: account2,
        value: web3.utils.toHex(web3.utils.toWei('1', 'ether')),
        gasLimit: web3.utils.toHex(21000),
        gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei'))
    }
    const tx = new Tx.Transaction(txObject, {chain:"ropsten"});
    tx.sign(privateKey1Buffer);
    const serializeTx = tx.serialize();
    const raw = '0x' + serializeTx.toString('hex');
    console.log('tx ', tx);
    web3.eth.sendSignedTransaction(raw, (err, txHash) => {
        if(err) {
            console.log("error => ", err);
        } else {
            console.log('Transaction Hash ', txHash);
        }
    })
});

