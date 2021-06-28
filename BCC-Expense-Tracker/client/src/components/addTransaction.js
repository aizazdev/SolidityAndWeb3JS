import React, { useState, useEffect } from 'react';
import SimpleStorageContract from "../contracts/SimpleStorage.json";
import {useSelector, useDispatch} from 'react-redux';
import Web3 from "web3";

const AddTransaction = () => {
    //Transaction Amount and Text 
    const [amount, setAmount] = useState();
    const [text, setText] = useState();

    const [accounts, setAccounts] = useState([]);
    const [contract, setContract] = useState([]);
    const [value, setValue] = useState(null);
    const [transactions, setTransactions] = useState([]);

    const doSomething = function (e) {
        e.preventDefault();
        saveTransaction(text, amount);
    };
    const saveTransaction = async (text, amount) => {
        const result = await contract.methods.addTransaction(text, amount).send({
            from: accounts[0],
            gas: 3000000
        })
        console.log(result);
    }

    //Dispatch function
    const dispatch = useDispatch();

    useEffect(() => {
        const runExample = async () => {

            try {
                await Web3.givenProvider.enable();
                if (Web3.givenProvider) {
                    const web3 = new Web3(Web3.givenProvider);
                    const accounts = await web3.eth.getAccounts();
             
                    const networkId = await web3.eth.net.getId();
                    const deployedNetwork = SimpleStorageContract.networks[networkId];
             
                    const contract = new web3.eth.Contract(
                        SimpleStorageContract.abi,
                        deployedNetwork && deployedNetwork.address,
                    );
             
                    const response = await contract.methods.transactionCount().call();
                    //empty array for storing our data    
                    let arr = [];
             
                    for (let i = 0; i < response; i++) {
                        const { transactionDescription, amount } = await contract.methods.transaction(i).call();
                        let obj = {
                            amount: parseInt(amount),
                            transactionDescription
                        }
                        arr.push(obj);
                    } 
                    
                    setTransactions(arr);
                    dispatch({ type: "ADD_TRANSACTION", payload: arr });

                    console.log("response ", response);

                    setValue(response);
                    setAccounts(accounts);
                    setContract(contract);
                } else {
                    alert("Please install an Ethereum-compatible browser or extension like MetaMask to use this dApp!");
                }
            }
            catch (error) {
                console.log("Error in loading Web3 = ", error);
            }
        }
        runExample();
    }, []);

    return (
        <>
            <form onSubmit={doSomething}>
                <label>Name</label>
                <input type="text" id="name" required onChange={(e) => setText(e.target.value)} />
          
                <label>Amount</label>
                <input type="text" id="amount" required onChange={(e) => setAmount(e.target.value)}
                />

                 <button className="btn">Add transaction</button>
            </form>

        </>
    )
}
export default AddTransaction;