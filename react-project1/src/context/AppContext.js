import React, {createContext, useContext, useRef, useState} from 'react';

const AppContext = createContext();

export const AppProvider = ({children}) => {
    const [pageSize, setPageSize] = useState(5);
    const [pageNumber, setPageNumber] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterTerm, setFilterTerm] = useState('');
    const [filterValue, setFilterValue] = useState('');
    const [filterData, setFilterData] = useState([]);
    const [loading, setLoading] = useState(false);
    const filterInitiatedFrom = useRef(null);

    return (
        <AppContext.Provider
            value={{
                pageSize,
                setPageSize,
                searchTerm,
                setSearchTerm,
                filterData,
                setFilterData,
                loading,
                setLoading,
                pageNumber,
                setPageNumber,
                filterTerm,
                setFilterTerm,
                filterValue,
                setFilterValue,
                filterInitiatedFrom
            }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    return useContext(AppContext);
};


