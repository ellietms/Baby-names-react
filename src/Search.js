import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const Search = ({filterName}) => {
    const [newName, setNewName] = useState(" ");
    function handleSearch(event) {
        event.preventDefault();
        filterName(newName);
    }
    return(
    <div className="navbar mt-5 mb-4 search">
    <form className="form-inline" onChange={handleSearch}>
    <div className="input-group">
    <div className="input-group-prepend">
    <span className="input-group-text" id="basic-addon1">
    <i className="fas fa-baby"></i>
    </span>
    </div>
    <input type="text" value={newName} onChange={(event) => setNewName(event.target.value)} className="form-control" placeholder="Pick your baby name.." aria-label="Username" aria-describedby="basic-addon1"/>
    </div>
    </form>
    </div>
    )
}

export default Search;