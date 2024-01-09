import React, {useState, useEffect} from 'react';
import Loading from './component/loading/Loading';
import Home from './page/Home';
import Lookup from './page/Lookup';

function App() {
  const [location, setLocation] = useState(null);
  const [name, setName] = useState('');

  if (location === null)
    return <Lookup setLocation={setLocation} setName={setName}/>
  else
    return <Home name={name} location={location}/>

}

export default App;
