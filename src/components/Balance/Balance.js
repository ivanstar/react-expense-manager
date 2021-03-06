import React from 'react'
import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';


const Balance = () => {
    const context = useContext(GlobalContext);

    const amount = context.transcations.map( (amt) => amt.amount)
    console.log(amount)

 
    const total = amount.reduce( (acc, curr) => acc += curr, 0 ).toFixed(2)
    
    console.log(total)
    return (
        <>
            <h4>Your Balance</h4>
            <h1>${total}</h1>   
        </>
    )
}

export default Balance
