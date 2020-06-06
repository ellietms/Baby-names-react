import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const Search = ({value,handleInput}) => {
 return(
    <div className="navbar d-flex justify-content- mt-5 mb-2 ml-2 search">
    <form className="form-inline">
    <div className="input-group col-12">
    <div className="input-group-prepend">
    <span className="input-group-text"  id="basic-addon1">
    <span className="baby-top m-2">
    <i className="fas fa-baby m-1"></i>
    <i className="fas fa-baby  m-1" style={{color:"red"}}></i>    
    </span>  
    </span>
    </div>
    <input type="text"  value = {value}
    onChange={handleInput} className="formControl form-control"
    placeholder="Pick your baby name.."/>
    </div>
    </form>
    </div>
    )
}

export default Search;