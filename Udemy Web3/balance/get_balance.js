const Web3 = require("web3");
const infura_url = "https://ropsten.infura.io/v3/e94d0d07e6d344de8f7bde30a57c0e7b";
const web3 = new Web3(infura_url);

const address = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";

web3.eth.getBalance(address, ((err, balance)=> {
    //converting balance from wei to ether
    let balance_in_ether = web3.utils.fromWei(balance, 'ether');
    console.log("Ehters => ", balance_in_ether);
} ) );