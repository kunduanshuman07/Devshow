import { SET_TITLE } from "../actionTypes/title"

export const setTitle = ({ title }) => {
    return {
        type: SET_TITLE,
        payload: title
    }
}