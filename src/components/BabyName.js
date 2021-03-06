import React from 'react';


const BabyName = ({element,handleNameClick,}) => {
    
    if (element.sex === "f" && element.name !== "Ellie") {
            return (
              <span id={element.id}
               className="container"
               onClick ={() => {handleNameClick(element)}}>
                <i className="fab fa-github-alt cat pl-2  pr-2 mb-2">
                  <span className="girl-name">{element.name}</span>
                </i>
              </span>
            );  
          } 
          else if(element.name === "Ellie"){
            return (
                <span  id={element.id} 
                className="container"
                onClick ={() => {handleNameClick(element)}}>
                  <i className="fab fa-github-alt ellie pl-2  pr-2 ">
                    <span className="ellie-name">{element.name}</span>
                  </i>
                </span>
              );  
          }
          else {
            return (
              <span  id={element.id}
              className="container"
               onClick ={() => {handleNameClick(element)}}>
                <i className="far fa-grin-beam boy pl-2  pr-2">
                  <span className="boy-name">{element.name}</span>
                </i>
              </span>
            );
          }
}

export default BabyName;