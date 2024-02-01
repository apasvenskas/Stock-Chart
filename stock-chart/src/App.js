import { useState } from 'react';
import './App.css';
import Dashboard from './components/dashboard';
import DayNightContext from './context/dayNightContext';

function App() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <DayNightContext.Provider value={{darkMode, setDarkMode}}>
      <Dashboard/>
    </DayNightContext.Provider>
  );
}

export default App;
