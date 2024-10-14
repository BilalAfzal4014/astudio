import React from "react";

const FilterOptions = ({
                           keys,
                           columns,
                           reload,
                           filterTerm,
                           setFilterTerm,
                           filterValue,
                           setFilterValue,
                           filterInitiatedFrom
                       }) => {

    return (
        <div className="filter-container">
            <select value={filterTerm} onChange={(e) => setFilterTerm(e.target.value)}>
                <option value={''}>Select filter option</option>
                {
                    keys.map((key, index) => {
                        return (<option key={key} value={key}>{columns[index]}</option>)
                    })
                }
            </select>
            <input
                type="text"
                placeholder="value"
                value={filterValue}
                onChange={(e) => setFilterValue(e.target.value)}
            />
            <button className="filter-button" onClick={() => {
                filterInitiatedFrom.current = 'Filter';
                reload();
            }}>
                🔍
            </button>
        </div>
    )
}

export default FilterOptions