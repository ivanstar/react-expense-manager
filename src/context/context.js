import React, {useReducer, createContext} from 'react';
import contextReducer from './contextReducer';

const initialState = JSON.parse(localStorage.getItem('transactions')) || [];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({children}) => {
    const [transactions, dispatch] = useReducer(contextReducer, initialState);

    //Get total
    const total = transactions.reduce( (acc,currVal) => {
        return (currVal.type === 'Expense' ? acc - currVal.amount : acc + currVal.amount)
    }, 0);

    console.log('trans',transactions);

    //Actions

    //Delete transcation
    const deleteTranscation = (id) => {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id,
        })
    }
    //Add transcations
    const addTranscation = (transcation) => {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transcation,
        })
    }

    return (
        <ExpenseTrackerContext.Provider value={{
            deleteTranscation,
            addTranscation,
            transactions,
            total
        }}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}

