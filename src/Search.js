import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const Search = (props) => {
 return(
    <div className="navbar mt-5 mb-4 search">
    <form className="form-inline">
    <div className="input-group">
    <div className="input-group-prepend">
    <span className="input-group-text" id="basic-addon1">
    <i className="fas fa-baby"></i>
    </span>
    </div>
    <input type="text"  value = {props.inputName} onChange={props.handleInput} className="form-control" placeholder="Pick your baby name.." aria-label="Username" aria-describedby="basic-addon1"/>
    </div>
    </form>
    </div>
    )
}

export default Search;