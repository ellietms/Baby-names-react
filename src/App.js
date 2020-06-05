import React,{useState, useEffect} from 'react';
import Search from './components/Search';
import data from './data/babynames.json';
import BabyName from './components/BabyName';
import Favorites from './components/Favourites';
import './App.css';


function App() {
  
  const[inputName,setInputName] = useState("");
  const[filterNames,setFilterNames] = useState([]);
  
  const handleInput = (event) => {
    setInputName(event.target.value);
  }

  function handleNameClick(passedName) {
  if(filterNames.includes(passedName)) return;
  setFilterNames([...filterNames,passedName]); 
 }

  
  const handleFilterClick = (passedFilter) => {
     setFilterNames(filterNames.filter( (tag) => tag !== passedFilter ))
   }

   
   const Names = (data.filter((element) => 
    (element.name.toLowerCase().includes(inputName.toLowerCase()))  
  ))

  return (
  <div className = "App" >
  <Search value={inputName} handleInput={handleInput}/>
  <Favorites filterNames={filterNames} handleFilterClick={handleFilterClick}/>    
  <div className="mainContainer">
  { data.filter(element => !(filterNames.includes(element))).filter((element) => 
    (element.name.toLowerCase().includes(inputName.toLowerCase()))).sort((a, b) => (a.name > b.name ? 1 : -1))
      .map((passedName) => {
        return(
        <BabyName  element={passedName} 
        id={Names.indexOf(passedName)}
        handleNameClick={handleNameClick}
       /> 
        )})
    }
    </div>
  </div> 
  );
}

export default App;
