import React from 'react';
import './Searchbar.css';

class Searchbar extends React.Component {
    render() {
        return(
            <nav className="navbar navbar-light bg-light fixed-top">
                <form className="form-inline mx-auto">
                    <input className="form-control m-auto border-warning shadow-none searchbar" type="search" placeholder="Search" aria-label="Search"></input>
                    <button className="btn my-2 my-sm-0 ml-2 btn-outline-warning" type="submit">Search</button>
                </form>
                <div className="btn-group btn-group-toggle" data-toggle="buttons">
                    <label className="btn btn-warning active">By Recipe
                        <input type="radio" name="options" id="byRecipe" checked></input>
                    </label>
                    <label className="btn btn-warning">
                        <input type="radio" name="options" id="byIngridient"></input>By Ingridients
                    </label>
                </div>
            </nav>
        );
    };
}
export default Searchbar;
