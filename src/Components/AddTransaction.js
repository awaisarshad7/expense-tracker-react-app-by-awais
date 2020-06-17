import React, {useState, useContext} from 'react';

import { GlobalContext } from '../Context/GlobalState';


export const AddTransaction = () => {
    const [text, setText] = useState('');
    const  [amount, setAmount] = useState(0);

    const{ addTransaction } = useContext(GlobalContext);

    const onsubmit = e => {
        e.preventDefault();
        const newTransacoion = {
            id: Math.floor(Math.random() * 1000000000),  
            text,
            amount: +amount
        }

        addTransaction(newTransacoion);
    }

 

    return (
        <div>
            <h3>Add new Transaction</h3>
            <form onSubmit={onsubmit}>
                <div className="form-control">
                    <label for="text">Text</label>
                    <input type="text" value={text} onChange={(e) =>  setText(e.target.value)} 
                    placeholder="Enter text..."></input>
                </div>
                <div className="form-control">
                    <label for="amount">Amount <br />
                    (neagtive - expense, positve - income)</label>
                    <input type="number"  value={amount} onChange={(e) =>  setAmount (e.target.value)} placeholder="Enter amount..." />
                </div>
                <button className="btn">Add Transaction</button>

            </form>
        </div>
    )
}
