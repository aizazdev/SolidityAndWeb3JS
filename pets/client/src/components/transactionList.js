import React from "react";
import {useSelector, useDispatch} from 'react-redux';


const TransactionList = ()=> {
  let transaction = useSelector((state) => state);
  
  return(
    (!transaction) ? "loading " : 
    <div> 
        <>
            <h3>History</h3>
            <ul className="list">
                {transaction.transaction.map((trans, i)=> {
                    return(
                        <li className={trans.amount < 0 ? 'minus' : 'plus'} key={i}>
                        {trans.transactionDescription} <span>${trans.amount}</span>    
                    </li>
                    )
                })}
            </ul>
        </>
    </div>
  )
}
export default TransactionList;
