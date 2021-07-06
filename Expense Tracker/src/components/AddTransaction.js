import React, { useState, useContext, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalState';
import TextField from '@material-ui/core/TextField';
import Alert from '@material-ui/lab/Alert';
import MenuItem from '@material-ui/core/MenuItem';
import Web3 from 'web3';
import { abi, address } from '../abi/abi';
// import '../App1.css';

export const AddTransaction = () => {

    const [name, setName] = useState('');
    const [amount, setAmount] = useState(0);
    const [accounts, setAccounts] = useState('');
    const [contract, setContract] = useState('');
    const [txCount, setTxCount] = useState(0);
    const [sign, setSign] = useState('+');
    const { addTransaction } = useContext(GlobalContext);

    useEffect(() => {
        const loadBlockchain = async () => {
            const web3 = new Web3(Web3.givenProvider || "http://127.0.0.1:8545");
            const accounts = await web3.eth.getAccounts();
            setAccounts(accounts[0]);
            const contract = new web3.eth.Contract(abi, address);
            setContract(contract);
            const txCount = await contract.methods.transactionCount().call();
            setTxCount(txCount);
            for (let i = 0; i < txCount; i++) {
                const { owner, name, amount } = await contract.methods.transactions(i).call();
                const transObj = {
                    id: Math.floor((Math.random() * 10000) + 1),
                    owner,
                    name,
                    amount: parseInt(amount)
                }
                addTransaction(transObj);
            }
        }
        loadBlockchain();
    }, []);

    const addTransactionAsync = (name, amount) => {
        const receipt = contract.methods.setTransaction(name, amount).send({ from: accounts });
    }
    const transactionSign = [
        {
            value: 'Income',
            label: '+',
        },
        {
            value: 'Expense',
            label: '-',
        },
    ];

    const onSubmit = e => {
        e.preventDefault();
        console.log(sign);
        if (amount === 0 || name === '') {

            if (amount === 0) {
                document.querySelector('.err-trans-desc').style.display = 'flex'
            }
            if (name === '') {
                document.querySelector('.err-trans-amount').style.display = 'flex'
            }

        } else {
            const newTransaction = {
                id: Math.floor((Math.random() * 10000) + 1),
                owner: accounts,
                name,
                amount: ((sign === '-') ? -Math.abs(amount) : amount)
            }
            //            console.log(();
            console.log("amount ", amount);
            addTransactionAsync(name, amount);
            addTransaction(newTransaction)
        }
    }
    // const addExpenseClick = e => {
    //     e.preventDefault();
    //     if (amount === 0 || name === '') {

    //         if (amount === 0) {
    //             document.querySelector('.err-trans-desc').style.display = 'flex'
    //         }
    //         if (name === '') {
    //             document.querySelector('.err-trans-amount').style.display = 'flex'
    //         }

    //     } else {
    //         const newTransaction = {
    //             id: Math.floor((Math.random() * 10000) + 1),
    //             owner: accounts,
    //             name,
    //             amount: Number(amount)
    //         }
    //         console.log(amount);
    //         addTransactionAsync(name, amount);
    //         addTransaction(newTransaction)
    //     }
    // }
    // const addIncomeClick = e => {
    //     e.preventDefault();
    //     if (amount === 0 || name === '') {
    //         if (amount === 0) {
    //             document.querySelector('.err-trans-desc').style.display = 'flex'
    //         }
    //         if (name === '') {
    //             document.querySelector('.err-trans-amount').style.display = 'flex'
    //         }
    //     } else {
    //         const newTransaction = {
    //             id: Math.floor((Math.random() * 10000) + 1),
    //             owner: accounts,
    //             name,
    //             amount: Number(amount)
    //         }
    //         console.log(amount);
    //         addTransactionAsync(name, amount);
    //         addTransaction(newTransaction)
    //     }
    // }

    return (
        <>
            <form >
                <div className="form-control">
                    <Alert severity="error" className="err-trans-desc" style={{ display: 'none' }}>You must add description</Alert>
                    <TextField id="outlined-basic" style={{ marginTop: '10px' }} fullWidth={true} label="Add new transaction description" variant="outlined" onChange={(e) => { setName(e.target.value) }}
                        required
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </div>
                <div className="form-control">
                    <Alert severity="error" className="err-trans-amount" style={{ display: 'none' }}>You must add amount</Alert>
                    <TextField
                        required
                        id="outlined-basic" type="number" style={{ marginTop: '10px' }} fullWidth={true} label="Add new transaction amount" variant="outlined"
                        onChange={(e) => { setAmount((e.target.value < 0) ? -Math.abs(e.target.value) : Math.abs(e.target.value)) }}
                        type="number"
                        label="Add new transaction amount"
                        InputLabelProps={{
                            shrink: true,
                        }} />
                </div>
                <div className="text-center margin-10">
                    <button className="income-btn submit-btn" onClick={onSubmit}>Add Transaction</button>
                    {/* <button className="expense-btn submit-btn" onClick={addExpenseClick}>Add expense</button> */}
                </div>
            </form>

        </>
    )
}
