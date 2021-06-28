const Tx = require('ethereumjs-tx');
const Web3 = require('web3');

const rpcUrl = "https://ropsten.infura.io/v3/e94d0d07e6d344de8f7bde30a57c0e7b";

const web3 = new Web3(rpcUrl);

const account = "0xA54F6B9741e17fDd730DFC34DCFEC317c50939Eb";
const privateKey = "3dd29c2874f41d00d4988d49c6b78c015ccb59705f71c8ee55cbfc7bace2efa6";

const byteCode = "608060405234801561001057600080fd5b5060c78061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060325760003560e01c806314b95631146037578063f247e3de146062575b600080fd5b606060048036036020811015604b57600080fd5b8101908080359060200190929190505050607e565b005b60686088565b6040518082815260200191505060405180910390f35b8060008190555050565b6000805490509056fea264697066735822122018953f2caa014561aacd1a95e75afe846b53d12fb2a72ee1e8c0a5ea20d8341064736f6c63430007060033";

const privateKeyBuffer = Buffer.from(privateKey, 'hex');
const byteCodeBuffer = Buffer.from(byteCode, "hex");

web3.eth.getTransactionCount(account, (err, txCount) => {
    const txObject = {
        nonce: web3.utils.toHex(txCount),
        gasLimit: web3.utils.toHex(500000),
        gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
        data: byteCodeBuffer
    };
    
    const tx = new Tx.Transaction(txObject);
    tx.sign(privateKeyBuffer);
    const serializeTx = tx.serialize();
    const raw = "0x" + serializeTx.toString("hex");
    console.log("Object was ", txObject);
    web3.eth.sendSignedTransaction(raw, (err, txHash) => {
        if(err) {
            console.log("Error => ", err);
        } else {
            console.log("txHas => ", txHash);
        }
    }).then(receipt => {
        console.log(receipt);
        console.log(receipt.contractAddress);
    });
});