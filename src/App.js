import React,{useState} from 'react';
import PageForBabyNames from './PageForbabyNames';
import Search from './Search';
import data from './data/babynames.json';
import './App.css';
import Favorites from './Favourites';

function App() {
  const [inputName,setInputName] = useState("");
  const [favoriteName,setFavoriteName] = useState([]);
  const [dataNames,setNames] = useState(data);
  const handleInput = (event) => {
    setInputName(event.target.value);
  }
  const filteredNames = (data.filter((element) => {
    return (
      element.name.toLowerCase().includes(inputName.toLowerCase())
    )
  }))

  const addFavorite = (addedname) => {
    setFavoriteName([...favoriteName,addedname])
    setNames(dataNames.filter((name) => name.id !== addedname.id))
  }
  const removeFavoriteName = (removedName) => {
    setFavoriteName(favoriteName.filter((name) => name.id !== removedName.id))
    setNames([...favoriteName,removedName])
  }
  
  return (
  <div className = "App" >
  <Search value={inputName} handleInput={handleInput}/>
  <Favorites listOfNames={favoriteName}
  removeFavoriteName={removeFavoriteName}/>
  <PageForBabyNames filteredNames={filteredNames}
  names={dataNames} 
  addFavorite={addFavorite} 
  removeFavoriteName={removeFavoriteName} />
  </div> 
  );
}

export default App;
