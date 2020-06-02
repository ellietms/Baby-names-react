import React from 'react';


const BabyName = ({element,index,handleName}) => {
    const  addtofavourites = () => {
       console.log("click");
       handleName(element);
    }
    if (element.sex === "f" && element.name !== "Ellie") {
            return (
              <span  onClick={addtofavourites}  key={index} className="container">
                <i className="fab fa-github-alt cat">
                  <span className="girl-name">{element.name}</span>
                </i>
              </span>
            );  
          } 
          else if(element.name === "Ellie"){
            return (
                <span  onClick={addtofavourites}  key={index} className="container">
                  <i className="fab fa-github-alt ellie">
                    <span className="ellie-name">{element.name}</span>
                  </i>
                </span>
              );  
          }
          else {
            return (
              <span  onClick={addtofavourites}  key={index} className="container">
                <i className="far fa-grin-beam boy">
                  <span className="boy-name">{element.name}</span>
                </i>
              </span>
            );
          }
}

export default BabyName;