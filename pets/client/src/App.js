import React from "react";
import "./App.css";
import TransactionList from './components/transactionList';
import Balance from './components/balance';
import IncomeExpense from './components/incomeExpense';
import AddTransaction from './components/addTransaction';

const App = ()=> {
  return(
    <div>
      <Balance />
      <IncomeExpense />
      <TransactionList />   
      <AddTransaction />        
    </div>
  )
}
export default App;
