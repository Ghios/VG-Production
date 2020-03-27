import React, from 'react';
import './Searchbar.css';

class Searchbar extends React.Component {
    render() {
        return(
            <nav className="navbar navbar-light bg-light fixed-top">
                <form className="form-inline">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                    <button className="btn my-2 my-sm-0" type="submit">Search</button>
                </form>
            </nav>
        );
    }
}
export default Searchbar;
