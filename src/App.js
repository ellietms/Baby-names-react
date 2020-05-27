import React from 'react';
import BabyNames from './babyNames'
import data from './data/babynames.json'
import style from './'
import './App.css';

function App() {
  return (
  <div className = "App" >
  <BabyNames  allNames ={data}/>
  </div> 
  );
}

export default App;
