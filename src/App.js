import './App.css';
import Header from './components/Header/Header'
import Balance from './components/Balance/Balance'
import IncomeExpenses from './components/Expenses/IncomeExpenses'
import TranscationList from './components/TranscationList/TransactionList'
import AddTranscation from './components/AddTranscation/AddTranscation'

import {GlobalProvider} from './context/GlobalState'

function App() {
  return (
    <GlobalProvider>
      <Header />
        <div className="container">
          <Balance />
          <IncomeExpenses />
          <TranscationList />
          <AddTranscation />
        </div>     
    </GlobalProvider>
  );
}

export default App;
