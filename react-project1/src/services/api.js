import axios from 'axios';

const API_URL = 'https://dummyjson.com';

export const fetchUsers = async (pageSize, page, search, filter) => {
    let url = `${API_URL}/users`;
    return fetch(url, pageSize, page, search, filter);
};

export const fetchProducts = (pageSize, page, search, filter) => {
    let url = `${API_URL}/products`;
    return fetch(url, pageSize, page, search, filter);
};


const fetch = async (url, pageSize, page, search, filter) => {
    if (search) url += '/search';
    else if (filter) url += '/filter';
    const response = await axios.get(url, {
        params: {
            limit: pageSize,
            skip: (page - 1) * pageSize,
            ...(!!search && {q: search}),
            ...(!!filter && {key: filter.key, value: filter.value})
        },
    });
    return response.data;
}