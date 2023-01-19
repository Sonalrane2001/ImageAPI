
import  {ActionTypes}  from "../actionTypes";
export const fetch_images=(page,cat)=> async (dispatch)=>{
    const response=await fetch(`https://api.unsplash.com/search/photos?page=${page}&per_page=20&query=${cat}&client_id=Z19KWthInlbzHtIf_WiryzSzU24K0xA5DqR09jJE5W4`);
    
   const data=await response.json();
//    console.log(data.results)
    dispatch({type:ActionTypes.FETCH_IMAGE,payload:data.results});
}
export const search_images=(page,value)=> async (dispatch)=>{
    const response=await fetch(`https://api.unsplash.com/search/photos?page=${page}&per_page=10&query=${value}&client_id=Z19KWthInlbzHtIf_WiryzSzU24K0xA5DqR09jJE5W4`);
    
   const data=await response.json();
//    console.log(data.results)
    dispatch({type:ActionTypes.SEARCH_IMAGES,payload:data.results});
}
export const fetch_fav_images=(id,fave)=> async (dispatch)=>{
    console.log(id)
    const response=await fetch(`https://api.unsplash.com/photos/${id}?client_id=txctC4fgz_6Mwx8UKraFDmwFn4VH-rzUAvmjAQ9udeM`);
    
   const data=await response.json();
    console.log(data)
    fave.push(data)
   // const list=[data]
    dispatch({type:ActionTypes.SET_FAV,payload:fave});
}
export const rem_fav_images=(id,fave)=> async (dispatch)=>{


    const newList = fave.filter((item) => item.id !== id);

   
   // const list=[data]
    dispatch({type:ActionTypes.SET_FAV,payload:newList});
}
export const fetch_user_detail=(id)=> async (dispatch)=>{


    const response=await fetch(`https://api.unsplash.com/photos/${id}?client_id=txctC4fgz_6Mwx8UKraFDmwFn4VH-rzUAvmjAQ9udeM`);
    
   const data=await response.json();
   dispatch({type:ActionTypes.USER_DETAIL,payload:data})

   
   
}