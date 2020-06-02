import React,{useState} from 'react';
import BabyNames from './babyNames';
import Search from './Search';
import data from './data/babynames.json';
import './App.css';
import Favourites from './Favourites';

function App() {
  const [inputName,setInputName] = useState("");
  const [favouritesName,setFavouriteName] = useState([]);
  const [removeFavouriteName , setremoveFavouriteName] = useState([]);
  const handleInput = (event) => {
    setInputName(event.target.value);
  }
  const filteredNames = (data.filter((element) => {
    return (
      element.name.toLowerCase().includes(inputName.toLowerCase())
    )
  }))
  
  return (
  <div className = "App" >
  <Search value={inputName} handleInput={handleInput}/>
  <Favourites  />
  <BabyNames filteredNames={filteredNames}/>
  </div> 
  );
}

export default App;
