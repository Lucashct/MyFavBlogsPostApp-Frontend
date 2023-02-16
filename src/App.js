import './App.css';
import { useEffect, useState } from 'react';
import { Loading } from './components/Loading/Loading';
import { Links } from './components/Links/Links';
import axios from "axios";
import { LIST_LINKS } from "./utils/urls";

function App() {
  const [removeLoading, setRemoveLoading] = useState(false);
  const [linksList, setLinksList] = useState([]);

  async function getLinkList() {
    const response = await axios.get(LIST_LINKS);
    setLinksList(response.data);
    setRemoveLoading(true)
  }

  useEffect(() => {
    getLinkList();
  },[]);

  return (
    <div className="App">
      { !removeLoading ? <Loading /> : <Links linksList={linksList} handleGetLinkList={getLinkList}/>}
      
    </div>
  );
}

export default App;
