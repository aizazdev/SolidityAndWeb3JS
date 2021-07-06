const Tx = require("ethereumjs-tx");
const Web3 = require("web3");

const rpcUrl = "https://ropsten.infura.io/v3/e94d0d07e6d344de8f7bde30a57c0e7b";
const web3 = new Web3(rpcUrl);

const account = "0xF56f6C670278B8A8c7Cab226c01129298596C92A";
const privateKey = "c7bd103101284fffa97af99844e124ee68d562f14803d203586c575498d77f6c";

const address = "0xb91dc96a8E73Edc2a0F5c67bE0CE67eBf689E500";

const abi = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			}
		],
		"name": "setName",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getName",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

const privateKeyBuffer = Buffer.from(privateKey, 'hex');
let contract = new web3.eth.Contract(abi, address);

web3.eth.getTransactionCount(account, (err, txCount) => {
    const txObject = {
        nonce: web3.utils.toHex(txCount),
        gasLimit: web3.utils.toHex(80000),
        gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
        to: address,
        data: contract.methods.setName("Aizaz Ahmad khan",).send({
            from: accounts[0],
            gas: 3000000
        }).encodeABI()
	};

    const tx = new Tx.Transaction(txObject, {chain: "ropsten"});
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
    })
});