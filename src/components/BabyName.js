import React from 'react';


const BabyName = ({element,index,handleNameClick}) => {
    
    if (element.sex === "f" && element.name !== "Ellie") {
            return (
              <span key={index}
               className="container"
               onClick ={() => handleNameClick(element)}>
                <i className="fab fa-github-alt cat">
                  <span className="girl-name">{element.name}</span>
                </i>
              </span>
            );  
          } 
          else if(element.name === "Ellie"){
            return (
                <span  key={index} 
                className="container"
                onClick ={() => handleNameClick(element)}>
                  <i className="fab fa-github-alt ellie">
                    <span className="ellie-name">{element.name}</span>
                  </i>
                </span>
              );  
          }
          else {
            return (
              <span  key={index}
              className="container"
              onClick ={() => handleNameClick(element)}>
                <i className="far fa-grin-beam boy">
                  <span className="boy-name">{element.name}</span>
                </i>
              </span>
            );
          }
}

export default BabyName;