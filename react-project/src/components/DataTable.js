import React from 'react';
import PageNumberOptions from './PageNumberOptions';
import TotalPages from './Pagination';
import Search from './Search';
import FilterOptions from './FilterOptions';
import './DataTable.css';

const DataTable = ({
   columns,
   data,
   keys,
   currPageSize,
   setPageSize,
   totalRows,
   pageNumber,
   setPageNumber,
   searchTerm,
   setSearchTerm,
   reload,
   filterTerm,
   setFilterTerm,
   filterValue,
   setFilterValue,
   filterInitiatedFrom,
   showFilters
}) => {

    return (
        <>
            {
                showFilters && <FilterOptions keys={keys} columns={columns} reload={reload} filterTerm={filterTerm}
                                              setFilterTerm={setFilterTerm} filterValue={filterValue}
                                              setFilterValue={setFilterValue}
                                              filterInitiatedFrom={filterInitiatedFrom}/>
            }
            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} reload={reload}
                    filterInitiatedFrom={filterInitiatedFrom}/>
            <div className="table-container">
                <table>
                    <thead>
                    <tr>
                        {
                            columns.map((column) => <th key={column}>{column}</th>)
                        }
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            {
                                keys.map((key) => {
                                    const isHtmlContent = typeof key === 'object';
                                    if (!isHtmlContent) return <td key={key}>{item[key]}</td>
                                    switch (key.element) {
                                        case 'img':
                                            return <td key={key.key}><img className='tableImg'
                                                                          src={item[key.key]} alt=''/></td>
                                    }
                                })
                            }
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <PageNumberOptions currPageSize={currPageSize} setPageSize={setPageSize}/>
            <TotalPages totalRows={totalRows} currPageSize={currPageSize} pageNumber={pageNumber}
                        setPageNumber={setPageNumber}/>
        </>
    );
};

export default DataTable;
