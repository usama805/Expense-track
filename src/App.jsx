import React from 'react';
import Header from './Components/header.jsx';
import Balance from './Components/Balance.jsx';
import IncomeExpenses from './Components/incomeExpenses.jsx';
import { Transcation } from './Components/Transcation';
import './App.css';
import AddTranscation from './Components/AddTranscation.jsx';
import { GlobalProvider } from './context/GlobalState';

function App() {
 return(


  <>

  <GlobalProvider>
<Header/>


<div  className='container'>
  <Balance/>
  <IncomeExpenses/>
  <Transcation/>
<AddTranscation/>

  
</div>

</GlobalProvider>
  </>
 ) 

}

export default App
