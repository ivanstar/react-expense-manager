import {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

//Initial State
const initialState = {
    transcations: []
   
}

//create context
export const GlobalContext = createContext(initialState);

//Provider component
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    //Actions
    function deleteTranscation(id){
        dispatch({
            type: 'DELETE_TRANSCATION',
            payload: id
        });
    }

    function addTranscation(transcation){
        dispatch({
            type: 'ADD_TRANSCATION',
            payload: transcation
        });
    }
    
    return(<GlobalContext.Provider value={{
        transcations: state.transcations, 
        deleteTranscation,
        addTranscation
        }} >
        {children}
    </GlobalContext.Provider>)
}