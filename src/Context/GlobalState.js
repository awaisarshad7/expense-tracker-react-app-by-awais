import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer'

//initailize state
const initailState = {
    transactions: []
}

// Create Context
export const GlobalContext = createContext(initailState);

// Provide Component
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer (AppReducer, initailState);


    // Actions
    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransaction(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }


    return (<GlobalContext.Provider value = {{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
        </GlobalContext.Provider>);
    
}      