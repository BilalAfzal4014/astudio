import React from "react";

const PageNumberOptions = ({currPageSize, setPageSize}) => {
    const options = [5, 10, 20, 50];
    return (
        <div className='page-number-options'>
            <select value={currPageSize} onChange={(e) => setPageSize(e.target.value)}>
                {
                    options.map((option) => <option key={option} value={option}>{option}</option>)
                }
            </select>
        </div>
    )
}

export default PageNumberOptions;