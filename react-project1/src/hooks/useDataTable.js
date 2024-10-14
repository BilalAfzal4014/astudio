import {useCallback, useEffect} from "react";
import {useAppContext} from "../context/AppContext";

let totalRows = null;

function isPageNumberAdjusted(pageSize, pageNumber, setPageNumber) {
    if (!!totalRows) {
        if (Math.ceil(totalRows / pageSize) < pageNumber) {
            setPageNumber(Math.ceil(totalRows / pageSize));
            return true;
        } else if (pageNumber === 0 && totalRows > 0) {
            setPageNumber(1);
            return true;
        }
    }
    return false
}

function checkForResetting(filterInitiatedFrom, setFilterTerm, setFilterValue, setSearchTerm, searchTerm, filterTerm, filterValue) {
    resetAlternateSearchingOrFilteringOption(filterInitiatedFrom, setFilterTerm, setFilterValue, setSearchTerm);
    resetSearchingAndFiltering(filterInitiatedFrom, searchTerm, filterTerm, filterValue);
}

function resetAlternateSearchingOrFilteringOption(filterInitiatedFrom, setFilterTerm, setFilterValue, setSearchTerm) {
    if (filterInitiatedFrom.current === 'Search') {
        setFilterTerm('');
        setFilterValue('');
    } else if (filterInitiatedFrom.current === 'Filter') {
        setSearchTerm('');
    } else {
        setFilterTerm('');
        setFilterValue('');
        setSearchTerm('');
    }
}

function resetSearchingAndFiltering(filterInitiatedFrom, searchTerm, filterTerm, filterValue) {
    const resetFilteringOrSearching = (searchTerm === '' && filterInitiatedFrom.current === 'Search') || ((filterTerm === '' || filterValue === '') && filterInitiatedFrom.current === 'Filter')
    if (resetFilteringOrSearching) filterInitiatedFrom.current = null;
}

function UseDataTable(fetchData, key, showFilters = true) {

    const {
        pageSize,
        setLoading,
        setFilterData,
        loading,
        filterData,
        setPageSize,
        pageNumber,
        setPageNumber,
        searchTerm,
        setSearchTerm,
        filterTerm,
        setFilterTerm,
        filterValue,
        setFilterValue,
        filterInitiatedFrom
    } = useAppContext();

    useEffect(() => {
        if (!showFilters && filterInitiatedFrom.current === 'Filter')
            filterInitiatedFrom.current = null
        loadData();
    }, [pageSize, pageNumber]);

    const loadData = useCallback(async () => {
        if (isPageNumberAdjusted(pageSize, pageNumber, setPageNumber)) {
            return;
        }
        setLoading(true);
        checkForResetting(filterInitiatedFrom, setFilterTerm, setFilterValue, setSearchTerm, searchTerm, filterTerm, filterValue);

        const data = await fetchData(pageSize, pageNumber, filterInitiatedFrom.current === 'Search' ? searchTerm : '', filterInitiatedFrom.current === 'Filter' && filterTerm && filterValue ? {
            key: filterTerm,
            value: filterValue
        } : undefined);

        totalRows = data.total;
        isPageNumberAdjusted(pageSize, pageNumber, setPageNumber);
        setFilterData(data[key]);
        setLoading(false);

    }, [pageSize, pageNumber, searchTerm, filterTerm, filterValue]);

    return {
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
    }
}

export default UseDataTable