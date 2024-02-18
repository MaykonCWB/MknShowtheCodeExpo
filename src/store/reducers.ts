import { INCREMENT, DECREMENT, FETCH_DATA ,FETCH_DATA_SUCCESS } from "./actions";

interface State {
    count: number
    blogUrl?: string | null
    loginName?: string | null
    login?: string | null
}

const initialState: State = {
    count: 0,
    blogUrl: null,
    loginName: null,
    login: null
}

const reducer = (state = initialState, action: any): State => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }
        case FETCH_DATA:
            return {
                ...state,
                loginName: action.payload
            }
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                blogUrl: action.payload.blog,
                login: action.payload.login
            }
        default:
            return state
    }
}

export default reducer;