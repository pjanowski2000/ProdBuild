import React,{useState,useEffect} from 'react';
import './App.css';
import Formularz from './Formularz.js';
import Counter from './Counter.js';
import store from './Store'
function App() {
const [counters, setCounters] = useState([])
  useEffect(() => {
    store.subscribe(() => setCounters(store.getState()))
  }, [])
  const wyswietl=counters.map( (counter)=>(<Counter counter={counter} key={counter.id} store={store}    />) )
  
  return (
    <div className="App">
      <header>
      <Formularz  store={store}/>
      </header>
      {wyswietl}
    
    </div>
  );
}

export default App;
