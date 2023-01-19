
const initialState={
    images:[],
    
}
const initialState1={
    favList:[]
    
}


export const imageReducer=(state=initialState,action)=>{
    if(action.type==='FETCH_IMAGE')
    {
        return ({...state},{images:action.payload});
    }
    else if(action.type==='SEARCH_IMAGES'){
        return ({...state},{images:action.payload});
    }
    else{
        return state;
    }
    
}
export const setFavReducer=(state=initialState1,action)=>{

    if(action.type==='SET_FAV')
    {
        // const list=favList
        // list.push(action.payload)
        //state.favList.push(action.payload)
       console.log("state",state)
    //    const list=state;
    //    list.push(action.payload)
        return ({...state},{favList:action.payload});
    }
    else if(action.type==='REM_FAV'){
        return ({...state},{favList:action.payload});
    }
    else
    {
        return state;
    }

}
export const userDetails=(state={},action)=>{
    if(action.type==='USER_DETAIL')
    {
        return (action.payload)
    }
    else{
        return state;
    }
}

