import './addtranscation.css'
import { useState, useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'

const AddTranscation = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const { addTranscation } = useContext(GlobalContext)

    function onSubmit(e){
        e.preventDefault();

        const newTranscation ={
            id : Math.floor(Math.random() * 10000000),
            text: text,
            amount: parseInt(amount)
        }

        addTranscation(newTranscation)
    }

    return (
        <>
            <h3>Add new transcation</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Enter Transcation</label>
                    <input type="text" value={text} onChange={ (e) => setText(e.target.value)} placeholder="E.g - Income"/>
                </div>
                <br></br>
                <div className="form-control">
                    <label htmlFor="amount">Amount<br/> (negative - expense, positive - income) </label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter Amount.."/>
                </div>

                <button className="btn">Add Transcation</button>
            </form>   
        </>
    )
}

export default AddTranscation

