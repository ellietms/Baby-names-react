import React,{useState, useEffect} from 'react';
import Search from './Search';
import data from './data/babynames.json';
import BabyName from './components/BabyName';
import Favorites from './components/Favourites';
import './App.css';


function App() {
  const [inputName,setInputName] = useState("");
  const [dataNames,setNames] = useState([]);
  const[filterNames,setFilterNames] = useState([]);

  useEffect(() => {setNames(data)});

  const handleInput = (event) => {
    setInputName(event.target.value);
  }

  function handleNameClick(element) {
    if(filterNames.includes(element)) return;
    setFilterNames([...filterNames,element])
}
   function removeFavoritesFromPage({name,id,sex}){
     if(filterNames.length === 0){
       return true;
     }
    const tags =[name,id,sex];
    return (
      filterNames.every((filter) => tags.includes(filter))
    )
   }

   const handleFilterClick = (passedFilter) => {
     setFilterNames(filterNames.filter( (tag) => tag !== passedFilter ))
   }

  console.log(filterNames)

  const Names = (dataNames.filter((element) => {
    return (
      (element.name.toLowerCase().includes(inputName.toLowerCase())) ||
      (removeFavoritesFromPage)
    )}))


  
  
  return (
  <div className = "App" >
  <Search value={inputName} handleInput={handleInput}/>
  <Favorites filterNames={filterNames} handleFilterClick={handleFilterClick}/>    
  <div className="mainContainer">
    {Names.sort((a, b) => (a.name > b.name ? 1 : -1))
      .map((element,index) => {
        return(
        <BabyName  element={element} 
        index={index}
        handleNameClick={handleNameClick}/> 
        )})}
    </div>
  </div> 
  );
}

export default App;
