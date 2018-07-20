import { createStore } from 'redux';
import rootReducer from '../../reducers'

// const initialState = {
//     data: [],
// }
export const store = createStore(rootReducer);