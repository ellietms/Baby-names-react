import React,{useState} from 'react';
import BabyNames from './babyNames';
import Search from './Search'
import data from './data/babynames.json';
import './App.css';

function App() {
  const [inputName,setInputName] = useState("");
  const handleInput = (event) => {
    console.log(event.target.value);
    setInputName(event.target.value);
  }
  const filteredNames = (data.filter((element) => {
    return (
      element.name.toLowerCase().includes(inputName.toLowerCase())
    )
  }
  )
  )
  return (
  <div className = "App" >
  <Search value={inputName} handleInput={handleInput}/>
  <BabyNames   filteredNames={filteredNames}/>
  </div> 
  );
}

export default App;
