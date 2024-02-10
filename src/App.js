import { useState } from 'react';
import './App.css';
import Dashboard from './components/dashboard';
import DayNightContext from './context/dayNightContext';
import StockContext from './context/stockContext';

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [stockSymbol, setStockSymbol] = useState("TSLA")
  return (
    <DayNightContext.Provider value={{darkMode, setDarkMode}}>
      <StockContext.Provider value={{ stockSymbol, setStockSymbol }}>
      <Dashboard/>
      </StockContext.Provider>
    </DayNightContext.Provider>
  );
}

export default App;
