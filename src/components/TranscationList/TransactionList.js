import './transcation.css'
import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import Transcation from '../Transcation/Transcation'


const TransactionList = () => {
    const context = useContext(GlobalContext);

    //console.log(context);
    console.log(context.transcations);


    return (
        <>
            <h3>History</h3>
            <ul id="list" className="list">
                {context.transcations.map((transcation) => (<Transcation key={transcation.id} transcation={transcation} />))}
                
            </ul>
        </>
    )
}

export default TransactionList
