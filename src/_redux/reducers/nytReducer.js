const initialState = {
    nytNews: [],
    loading: false,
    error: false
}

export const nytReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_NEWS':
            return {
                ...state,
                nytNews: action.payload
            }
        case 'GET_NEWS_LOADING':
            return {
                ...state,
                loading: true
            }
        case 'GET_NEWS_LOADED':
            return {
                ...state,
                loading: false
            }
        case 'ERROR':
            return {
                ...state,
                error: true
            }
        case 'CLEAR_ERROR':
            return {
                ...state,
                error: false
            }
        default: 
            return state
    }
}

export const getNews = () => {
    return async (dispatch) => {
        dispatch({ type: 'CLEAR_ERROR' })
        dispatch({ type: 'GET_NEWS_LOADING' })
        try {
            dispatch({ type: 'CLEAR_ERROR' })
            const response = await fetch('https://api.nytimes.com/svc/topstories/v2/politics.json?api-key=7I8d3RVhqhlrYv5McjyujzGMyLGon0Vv')
            const data = await response.json()
            const news = await data.results
            dispatch({
                type: 'GET_NEWS',
                payload: [...news]
            })
            dispatch({ type: 'GET_NEWS_LOADED' })
        } catch(err) {
            dispatch({ type: 'ERROR' })
        }
    }
}