let Web3 = require("web3");

const ganacheCli_url = "http://127.0.0.1:8545";
//const infura_url = "https://ropsten.infura.io/v3/e94d0d07e6d344de8f7bde30a57c0e7b";
const web3 =new Web3(ganacheCli_url);
console.log(web3);