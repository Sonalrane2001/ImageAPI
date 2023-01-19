import {combineReducers} from 'redux';
import  {imageReducer,setFavReducer,userDetails}  from './imageReducer';

const reducers=combineReducers({
    allImages:imageReducer,
    allFav:setFavReducer,
    userDetail:userDetails
})
export default reducers