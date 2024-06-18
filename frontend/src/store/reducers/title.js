import { SET_TITLE } from "../actionTypes/title"

const initialState = {
    titleValue: "Feed"
}

const titleReducer = (state = initialState, action) => {
    if (action.type === SET_TITLE) {
        return {
            ...state,
            titleValue: action.payload
        }
    }
    else {
        return state;
    }
}

export default titleReducer;

export const titleSelector = state => state.title.titleValue;