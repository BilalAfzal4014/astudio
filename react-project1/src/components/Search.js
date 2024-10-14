import React from "react";

const Search = ({searchTerm, setSearchTerm, reload, filterInitiatedFrom}) => {

    return (
        <div className="search-container">
            <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="search-button" onClick={() => {
                filterInitiatedFrom.current = 'Search';
                reload();
            }}>
                🔍
            </button>
        </div>
    )
}

export default Search;