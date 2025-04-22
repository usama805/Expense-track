import react,   {useState,useContext} from 'react'; 
import { GlobalContext } from '../context/GlobalState';

import React from 'react';


function  AddTranscation(){




const [text, setText]  = useState("");
const [amount, setAmount] = useState(0);



 
const {addTransaction} = useContext(GlobalContext);

const onSubmit = e => {
  e.preventDefault(); // Fixed typo here
  
  const newTransaction = {
    id: Math.floor(Math.random() * 100000000),
    text,
    amount: +amount // Ensure the amount is converted to a number
  };

  addTransaction(newTransaction);

  setText("");
  setAmount(0);
};





    return (
        <>
          <h3>Add New Transcation</h3>
          <form action=""  id="form"  onSubmit={onSubmit} >
          <div className="form-control"  >
            <label htmlFor="text"> Text</label>
            <input type="text"  value={text}  onChange={(e)=>setText(e.target.value)}  placeholder='Enter Text .....'/>
          </div>
          <div className='form-control'>
            <label htmlFor="amount">
                Amount <br/>
               <strong>(negative - expense , positive-income)</strong>
            </label>
            <input type="number"    value={amount}  onChange={(e)=>setAmount(e.target.value)}  placeholder='Enter Amount ....' />
          </div>
          <button  className="btn">Add New Transcation</button>
</form>
        </>
      )
}
 

export default AddTranscation;
