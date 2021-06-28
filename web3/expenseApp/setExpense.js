const Tx = require('ethereumjs-tx');
const Web3 = require('web3');

const rpcUrl = "https://ropsten.infura.io/v3/e94d0d07e6d344de8f7bde30a57c0e7b";
const web3 = new Web3(rpcUrl);

const account = "0xF56f6C670278B8A8c7Cab226c01129298596C92A";
const privateKey = "c7bd103101284fffa97af99844e124ee68d562f14803d203586c575498d77f6c";

const address = "0xD1Ef5Bf1e3c4060b9e0D297ad6892F5Dad04f498";
const abi = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_text",
				"type": "string"
			},
			{
				"internalType": "int256",
				"name": "_amount",
				"type": "int256"
			}
		],
		"name": "setTransaction",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getTransaction",
		"outputs": [
			{
				"internalType": "string",
				"name": "_text",
				"type": "string"
			},
			{
				"internalType": "int256",
				"name": "_amount",
				"type": "int256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

let privateKeyBuffer = Buffer.from(privateKey, 'hex');
let contract = new web3.eth.Contract(abi, address);

web3.eth.getTransactionCount(account, (err, txCount) => {
    const txObject = {
        nonce: web3.utils.toHex(txCount),
        gasLimit: web3.utils.toHex(800000),
        gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
        to: address,
        data: contract.methods.setTransaction(_text = "egg", _amount = 500).encodeABI()
    };

    const tx = new Tx.Transaction(txObject, {chain: "ropsten"});
    tx.sign(privateKeyBuffer);
    const serializeTx = tx.serialize();
    const raw = "0x" + serializeTx.toString('hex');
    web3.eth.sendSignedTransaction(raw, (err, txHash) => {
        if(err) {
            console.log('Error => ', err);
        } else {
            console.log("txHash => ", txHash);
        }
    }).then(receipt => {
        console.log(receipt);
        console.log(receipt.contractAddress);
    });
})