import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState'; // Adjusted the import path
import Transcation1 from './Transcation1';

export const Transcation = () => {
    const { transactions } = useContext(GlobalContext);

    return (
        <>
            <h3>History</h3>
            <ul className='list'>
                {transactions.map(transaction => (
                   <Transcation1  key={transaction.id}  transcation={transaction}  /> 
                  
            
                ))}
            </ul>
        </>
    );
};



export default Transcation;