// const Web3 = require('web3');
// console.log(Web3);

const rpcUrl = "HTTP://127.0.0.1:7545";
let web3 = new Web3(rpcUrl);
// console.log("rpc -> ", web3);

const address = "0x4B7Cf23A6c7295F4397674Fd9fc0a70faB043D8B";
web3.eth.getBalance(address, (err, wei)=> {
    console.log("Balance in wei => ", wei);
    let balance = web3.utils.fromWei(wei, 'ether');
    console.log("Balance in ether => ", balance);
})