const rpcUrl = "https://ropsten.infura.io/v3/e94d0d07e6d344de8f7bde30a57c0e7b";
let web3 = new Web3(rpcUrl);


const address = "0xD1Ef5Bf1e3c4060b9e0D297ad6892F5Dad04f498";

//const byteCode = "608060405234801561001057600080fd5b5061064c806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806359705f811461003b578063e484a5cb1461005a575b600080fd5b610043610076565b60405161005192919061043f565b60405180910390f35b610074600480360381019061006f91906103a3565b6101ad565b005b6060600060038080549050815481106100b8577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90600052602060002090600302016000016003808054905081548110610107577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000209060030201600101548180546101259061052d565b80601f01602080910402602001604051908101604052809291908181526020018280546101519061052d565b801561019e5780601f106101735761010080835404028352916020019161019e565b820191906000526020600020905b81548152906001019060200180831161018157829003601f168201915b50505050509150915091509091565b600060405180606001604052808481526020018381526020013373ffffffffffffffffffffffffffffffffffffffff1681525090506003819080600181540180825580915050600190039060005260206000209060030201600090919091909150600082015181600001908051906020019061022a929190610283565b506020820151816001015560408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050505050565b82805461028f9061052d565b90600052602060002090601f0160209004810192826102b157600085556102f8565b82601f106102ca57805160ff19168380011785556102f8565b828001600101855582156102f8579182015b828111156102f75782518255916020019190600101906102dc565b5b5090506103059190610309565b5090565b5b8082111561032257600081600090555060010161030a565b5090565b600061033961033484610494565b61046f565b90508281526020810184848401111561035157600080fd5b61035c8482856104eb565b509392505050565b600081359050610373816105ff565b92915050565b600082601f83011261038a57600080fd5b813561039a848260208601610326565b91505092915050565b600080604083850312156103b657600080fd5b600083013567ffffffffffffffff8111156103d057600080fd5b6103dc85828601610379565b92505060206103ed85828601610364565b9150509250929050565b610400816104e1565b82525050565b6000610411826104c5565b61041b81856104d0565b935061042b8185602086016104fa565b610434816105ee565b840191505092915050565b600060408201905081810360008301526104598185610406565b905061046860208301846103f7565b9392505050565b600061047961048a565b9050610485828261055f565b919050565b6000604051905090565b600067ffffffffffffffff8211156104af576104ae6105bf565b5b6104b8826105ee565b9050602081019050919050565b600081519050919050565b600082825260208201905092915050565b6000819050919050565b82818337600083830152505050565b60005b838110156105185780820151818401526020810190506104fd565b83811115610527576000848401525b50505050565b6000600282049050600182168061054557607f821691505b6020821081141561055957610558610590565b5b50919050565b610568826105ee565b810181811067ffffffffffffffff82111715610587576105866105bf565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b610608816104e1565b811461061357600080fd5b5056fea264697066735822122029eb5a054bc1b015c6ecd764f7d0421804588b9772f03134fd4843e4a0f6440764736f6c63430008040033";
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
let contract =new web3.eth.Contract(abi, address);

contract.methods.getTransaction().call(((err, {_text, _amount})=>{
    console.log("getTransaction() => ", _text, _amount);
    document.querySelector('#res').innerHTML = `getTransaction() function output is ${_text} | ${_amount}`;
}));
