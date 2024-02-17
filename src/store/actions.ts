
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';

export const increment = () => ({
    type: INCREMENT
});

export const decrement = () => ({
    type: DECREMENT
})


export const fetchData = () => ({
    type: FETCH_DATA
})

export const fetchDataSuccess = (data: any) => ({
    type: FETCH_DATA_SUCCESS,
    payload: data, 
})

