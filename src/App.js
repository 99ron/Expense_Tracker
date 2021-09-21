import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpense } from './components/IncomeExpense';
import { TransactionList } from './components/TransactionList';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
          <Balance />
          <IncomeExpense />
          <TransactionList />
      </div> 
    </div>
  );
}

export default App;
