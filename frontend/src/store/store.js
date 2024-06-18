import { legacy_createStore as createStore } from "redux"
import titleReducer from "./reducers/title"

const store = createStore(titleReducer);

export default store;