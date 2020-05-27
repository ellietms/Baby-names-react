import React from "react";

const MakePageForBabyNames = (props) => {
  return (
    <div className="mainContainer">
      {props.allNames
        .sort((a, b) => (a.name > b.name ? 1 : -1))
        .map((element,index) => {
          if (element.sex === "f") {
            return (
              <span key={index} className="container">
                <i className="fab fa-github-alt cat">
                  <span className="girl-name">{element.name}</span>
                </i>
              </span>
            );
          } else {
            return (
              <span key={index} className="container">
                <i className="fas fa-car car">
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
