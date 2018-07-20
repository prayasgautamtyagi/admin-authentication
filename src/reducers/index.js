import { combineReducers} from 'redux';
import categoryDataReducer from './categoryDataReducer';


export default combineReducers({
    category: categoryDataReducer,  
});