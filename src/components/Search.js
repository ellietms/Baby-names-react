import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const Search = ({value,handleInput}) => {
 return(
    <div className="navbar d-flex justify-content- mt-5 mb-4 ml-2 search">
    <form className="form-inline">
    <div className="input-group col-12">
    <div className="input-group-prepend">
    <span className="input-group-text"  id="basic-addon1">
    <span className="boy-top">    
    <i className="far fa-grin-beam mx-2">
    </i>
    </span> 
    <span className="baby-top m-2">
    <i className="fas fa-baby baby-top-boy m-1"></i>
    <i className="fas fa-baby baby-top-girl m-1"></i>    
    </span>  
    <span className="girl-top m-2">
    <i className="fab fa-github-alt cat-top m-1">
    </i>
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