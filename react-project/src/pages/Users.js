import React from 'react';
import {fetchUsers} from '../services/api';
import DataTable from '../components/DataTable';
import UseDataTable from '../hooks/useDataTable';

const Users = () => {

    const {
        loading,
        filterData,
        pageSize,
        setPageSize,
        totalRows,
        pageNumber,
        setPageNumber,
        searchTerm,
        setSearchTerm,
        loadData,
        filterTerm,
        setFilterTerm,
        filterValue,
        setFilterValue,
        filterInitiatedFrom
    } = UseDataTable(fetchUsers, 'users');

    return (
        <div>
            <h4>Users</h4>
            {loading ? <p>Loading...</p> :
                <DataTable data={filterData}
                           keys={['firstName', 'lastName', 'maidenName', 'age', 'gender', 'email', 'username', 'bloodGroup', 'eyeColor']}
                           columns={['FIRST NAME', 'LAST NAME', 'MAIDEN NAME', 'AGE', 'GENDER', 'EMAIL', 'USERNAME', 'BLOODGROUP', 'EYECOLOR']}
                           currPageSize={pageSize}
                           setPageSize={setPageSize}
                           totalRows={totalRows}
                           pageNumber={pageNumber}
                           setPageNumber={setPageNumber}
                           searchTerm={searchTerm}
                           setSearchTerm={setSearchTerm}
                           reload={loadData}
                           filterTerm={filterTerm}
                           setFilterTerm={setFilterTerm}
                           filterValue={filterValue}
                           setFilterValue={setFilterValue}
                           filterInitiatedFrom={filterInitiatedFrom}
                           showFilters={true}
                />}
        </div>
    );
};

export default Users;
