import { INCREMENT, DECREMENT, FETCH_DATA_SUCCESS } from "./actions";

interface State {
    count: number
    blogUrl?: string | null
}

const initialState: State = {
    count: 0,
    blogUrl: null
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
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                blogUrl: action.payload.blog
            }
        default:
            return state
    }
}

export default reducer;