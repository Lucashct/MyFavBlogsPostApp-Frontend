import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { OPEN_APP } from './utils/urls.js';
import { Loading } from './components/Loading/Loading';
import { Links } from './components/Links/Links';

function App() {
  const [removeLoading, setRemoveLoading] = useState(false);

  function loadApp() {
    setTimeout(setRemoveLoading(true), 5000)
  }

  useEffect(() => {
    loadApp();
  },[]);

  return (
    <div className="App">
      { !removeLoading ? <Loading /> : <Links />}
      
    </div>
  );
}

export default App;
