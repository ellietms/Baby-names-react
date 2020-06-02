import React  from 'react';
import BabyName from './BabyName';
const MakePageForBabyNames = (props) => {
  
  return (
    <div className="mainContainer">
      {props.filteredNames
        .sort((a, b) => (a.name > b.name ? 1 : -1))
        .map((element,index) => {
        return(
        <BabyName  element={element} 
        index={index}
        handleName={props.addFavorite} 
        />
          )
        })}
    </div>
  );
};

export default MakePageForBabyNames;
