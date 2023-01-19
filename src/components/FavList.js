import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { rem_fav_images } from '../redux/actions/index';
export default function FavList() {

    const fave=useSelector((state)=>state.allFav.favList);
console.log(fave)
const dispatch=useDispatch();

const removeFav= async (id)=>{
    dispatch(rem_fav_images(id,fave));
    console.log(id,fave);
    
    console.log(id,fave);
   }

    return (
        <div className='container my-5'>
           <div className='row'>
        {fave.map((image)=>{
    
          return <div className='col-md-4 my-5' key={image.urls.raw}>
            
            <div className="card my-3" style={{width: "18rem"}}>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {image.user.username}
                <span className="visually-hidden">unread messages</span>
              </span>
                <img src={image.urls.raw} className="card-img-top" alt="..." style={{width:287,height:400,}}/>
                 <div className="card-body">
                <h5 className="card-title">{image.user.first_name} {image.user.last_name}</h5>
                <p className="card-text">{image.alt_description}</p>
                <p className="card-text"><small>By {image.user.username} At {image.createdDate}</small></p>
                <img src={image.user.profile_image.medium} className="img-thumbnail" alt="..."></img>
              <h3>Like {image.likes}  <button key={image.id} onClick={()=>removeFav(image.id)} type="button" className="btn btn-dark">REM FAV</button></h3>  
               
               
                 </div>
                
          </div>
        </div>
        })
    }
    </div>
        </div>
      )
}
