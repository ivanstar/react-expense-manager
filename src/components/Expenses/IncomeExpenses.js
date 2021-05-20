import './expenses.css'
import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';

const IncomeExpenses = () => {
    const context = useContext(GlobalContext)
 
    const amount = context.transcations.map( (amt) => (amt.amount))
   
    const amountPlus = amount
        .filter((num) => (num > 0))
        .reduce((acc, curr) => (acc + curr), 0)
        .toFixed(2)

    const amountMinus = amount
        .filter((num) => (num < 0))
        .reduce((acc, curr) => (acc + curr), 0)

    console.log(amountPlus)

    return (
       <div className="inc-exp-container">
           <div>
               <h4>Income</h4>
               <p id="money-plus" className="money plus">+${amountPlus}</p>
           </div>
           <div>
           <h4>Expense</h4>
               <p id="money-minus" className="money minus">-${Math.abs(amountMinus).toFixed(2)}</p>
           </div>

       </div>
    )
}

export default IncomeExpenses
