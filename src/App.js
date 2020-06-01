import React  from 'react';
import BabyNames from './babyNames';
import Search from './Search'
import data from './data/babynames.json';
import './App.css';

function App() {
  return (
  <div className = "App" >
  <Search />
  <BabyNames  allNames ={data}/>
  </div> 
  );
}

export default App;
