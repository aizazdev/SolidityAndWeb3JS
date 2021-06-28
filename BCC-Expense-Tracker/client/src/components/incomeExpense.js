import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

const IncomeExpense = ()=> {
    let transaction = useSelector((state) => state);
    let totalIncome = 0;
    let totalExpense = 0;
    if(transaction) {
        let income = transaction.transaction.map((trans) => (trans.amount > 0 ) ? trans.amount : 0 );
        let expense = transaction.transaction.map((trans) => (trans.amount < 0 ) ? trans.amount : 0 );

        totalIncome = income.reduce((item, acc)=> (acc +=item),0).toFixed(2);
        totalExpense = expense.reduce((item, acc)=> (acc +=item),0).toFixed(2);
    }

    return(
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">{totalIncome}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">{totalExpense}</p>
            </div>
        </div>
    )
}
export default IncomeExpense;