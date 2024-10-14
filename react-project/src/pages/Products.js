import React from 'react';
import {fetchProducts} from '../services/api';
import DataTable from '../components/DataTable';
import UseDataTable from '../hooks/useDataTable';

const showFilters = false
const Products = () => {

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
    } = UseDataTable(fetchProducts, 'products', showFilters);

    return (
        <div>
            <h4>Products</h4>
            {loading ? <p>Loading...</p> :
                <DataTable data={filterData}
                           keys={['title', 'category', 'brand', 'availabilityStatus', 'price', 'rating', 'sku', 'weight', {
                               key: 'thumbnail',
                               element: 'img'
                           }]}
                           columns={['TITLE', 'CATEGORY', 'BRAND', 'AVAILABILITY STATUS', 'PRICE', 'RATING', 'SKU', 'WEIGHT', 'THUMBNAIL']}
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
                           showFilters={showFilters}
                />}
        </div>
    );
};

export default Products;
