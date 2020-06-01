import React, { useState } from 'react';

const MakePageForBabyNames = (props) => {
  return (
    <div className="mainContainer">
      {props.filteredNames
        .sort((a, b) => (a.name > b.name ? 1 : -1))
        .map((element,index) => {
          if (element.sex === "f" && element.name !== "Ellie") {
            return (
              <span key={index} className="container">
                <i className="fab fa-github-alt cat">
                  <span className="girl-name">{element.name}</span>
                </i>
              </span>
            );  
          } 
          else if(element.name === "Ellie"){
            return (
                <span key={index} className="container">
                  <i className="fab fa-github-alt ellie">
                    <span className="ellie-name">{element.name}</span>
                  </i>
                </span>
              );  
          }
          else {
            return (
              <span key={index} className="container">
                <i className="far fa-grin-beam boy">
                  <span className="boy-name">{element.name}</span>
                </i>
              </span>
            );
          }
        })}
    </div>
  );
};

export default MakePageForBabyNames;
