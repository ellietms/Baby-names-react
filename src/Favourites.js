import React from 'react';
import BabyName from './BabyName';

const Favourites = ({listOfNames,removeFavoriteName}) => {
    return(
      <div className="favoriteContainer" >
       <h1 className="favourites m-5"><p className="mt-3 ml-4" style={{color:'#fff'}}>Favo</p><p className="mt-3" style={{color:"purple"}} >urites : </p></h1>
       {listOfNames
         .sort((a, b) => (a.name > b.name ? 1 : -1))
         .map((element,index) => {
         return(
         <BabyName  element={element} 
         index={index}
         handleName={removeFavoriteName}
         />
           )
         })}
     </div>
   );
}

export default Favourites;