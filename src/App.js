import React,{useState, useEffect} from 'react';
import Search from './components/Search';
import data from './data/babynames.json';
import BabyName from './components/BabyName';
import Favorites from './components/Favourites';
import './App.css';


function App() {
  
  const[inputName,setInputName] = useState("");
  const[filterNames,setFilterNames] = useState([]);
  const[Names, setNames] = useState(data);
  const[filteredNames, setfilteredNames] = useState(data);

  useEffect(()=> {
    setNames(data);
    setfilteredNames(data);
  },[])

 let girl = Names.filter(e => e.sex === "f")
 let boy = Names.filter(e => e.sex === "m")
 let all = data;
 

 function handleGirl() {
   setfilteredNames(girl);
 }

 function handleBoy(){
   setfilteredNames(boy);  
  }

function handleGender(){
  setfilteredNames(all);
}


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
  
  return (
  <div className = "App" >
  <Search value={inputName}
  handleInput={handleInput}
  handleGirl={handleGirl}
  handleBoy ={handleBoy}
  handleGender = {handleGender}/>
  <div className="buttonContainer m-3">
  <button className="boy-top m-2" onClick={() => handleBoy()}>    
  <i className="far fa-grin-beam m-md-3">
  </i>
  </button> 
  <button className="baby-top m-md-2" onClick={() => handleGender()}>
  <i className="fas fa-baby baby-top-boy m-md-3"></i>
  <i className="fas fa-baby baby-top-girl m-md-3"></i>    
  </button>  
  <button className="girl-top m-2" onClick={() => handleGirl()}>
  <i className="fab fa-github-alt cat-top m-md-3">
  </i>
  </button>
  </div>
  <Favorites filterNames={filterNames} 
  handleFilterClick={handleFilterClick}/>    
  
  <div className="mainContainer">
  {filteredNames.filter(element => !(filterNames.includes(element)))
  .filter((element) => (element.name.toLowerCase().includes(inputName.toLowerCase())))
  .sort((a, b) => (a.name > b.name ? 1 : -1))
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
