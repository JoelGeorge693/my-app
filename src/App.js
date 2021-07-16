import React,{useEffect,useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [val,incrVal] = useState(0);

  useEffect(()=>{
    const timeOut = setTimeout(()=>{
      incrVal(val+1);
    },1000)
  },[val]);

  return (
    <div className="App">
      <p>{val}</p>
    </div>
  );
}

export default App;
