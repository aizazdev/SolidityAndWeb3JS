//const Web3 = require('web3');
// console.log(Web3);
//connecting with infura.io using ropstan network

const rpcUrl = "https://ropsten.infura.io/v3/e94d0d07e6d344de8f7bde30a57c0e7b";
let web3 = new Web3(rpcUrl);
// console.log("rpc -> ", web3);

const address = "0xA54F6B9741e17fDd730DFC34DCFEC317c50939Eb";
web3.eth.getBalance(address, (err, wei)=> {
    console.log("Balance in wei => ", wei);
    let balance = web3.utils.fromWei(wei, 'ether');
    console.log("Balance in ether => ", balance);
})