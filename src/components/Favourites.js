import React from 'react';

const Favourites = ({favoriteNames,handleFilterClick}) => {
    return(
      <div className="favoriteContainer">
      <h1 className="favourites p-2 mx-2"><p className="mt-3 ml-1 d-flex " style={{color:'#fff'}}>Favo</p><p className="mt-3 mr-1 favorites" style={{color:"red"}} >urites: </p></h1>
       {favoriteNames.sort((a, b) => (a.name > b.name ? 1 : -1)).map((element,index) => {
          if (element.sex === "f"  && element.name !== "Ellie") {
            return (
              <span key={index}
               className="container m-2"
               onClick ={() => handleFilterClick(element)}>
                <i className="fab fa-github-alt cat">
                  <span className="girl-name">{element.name}</span>
                </i>
              </span>
            );  
          } 

          else if(element.name === "Ellie"){
            return (
                <span  id={element.id} 
                className="container"
                onClick ={() => {handleFilterClick(element)}}>
                  <i className="fab fa-github-alt ellie pl-2  pr-2 ">
                    <span className="ellie-name">{element.name}</span>
                  </i>
                </span>
              );  
          }

          else {
            return (
              <span  key={index}
              className="container m-2"
              onClick ={() => handleFilterClick(element)}>
                <i className="far fa-grin-beam boy">
                  <span className="boy-name">{element.name}</span>
                </i>
              </span>
            );
          }
      
         
        })}  
      </div>
       )
}

export default Favourites;