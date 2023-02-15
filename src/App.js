import './App.css';
import { useEffect, useState } from 'react';
import { Loading } from './components/Loading/Loading';
import { Links } from './components/Links/Links';

function App() {
  const [removeLoading, setRemoveLoading] = useState(false);

  function loadApp() {
    setRemoveLoading(true)
    setTimeout(() => {}, 5000);
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
