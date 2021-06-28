import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

const Balance = ()=> {
    let transaction = useSelector((state) => state);
    let totalIncome = 0;
    let totalExpense = 0;
    if(transaction) {
        let income = transaction.transaction.map((trans) => (trans.amount > 0 ) ? trans.amount : 0 );
        let expense = transaction.transaction.map((trans) => (trans.amount < 0 ) ? trans.amount : 0 );

        totalIncome = income.reduce((item, acc)=> (acc +=item),0).toFixed(2);
        totalExpense = expense.reduce((item, acc)=> (acc +=item),0).toFixed(2);
    }

    
    let total = parseInt(-totalExpense) + parseInt(totalIncome);
    
    return (
        <>
          <h4>Your Balance</h4>
          <h1>${total}</h1>
        </>
    )
}
export default Balance;