import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { fetch_fav_images } from '../redux/actions/index';
export default function Image() {

 
    const images=useSelector((state)=>state.allImages.images);
    const fave=useSelector((state)=>state.allFav.favList);
    console.log("final lost",images)
   const dispatch=useDispatch();
    const addFav= async (id)=>{

      dispatch(fetch_fav_images(id,fave));
      console.log(id,fave);
     }
     
  return (
    <div className='container my-5'>
       <div className='row'>
    {images.map((image)=>{

      return <div className='col-md-4 my-5' key={image.urls.raw}>
        
        <div className="card my-3" style={{width: "18rem"}}>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {image.user.username}
            
          </span>
            <img src={image.urls.raw} className="card-img-top" alt="..." style={{width:287,height:400,}}/>
             <div className="card-body">
            <h5 className="card-title">{image.user.first_name} {image.user.last_name}</h5>
            <p className="card-text">{image.alt_description}</p>
            <p className="card-text"><small>By {image.user.username} At {image.createdDate}</small></p>
            <img src={image.user.profile_image.medium} className="img-thumbnail" alt="..."></img>
           <h3>Like {image.likes}  <button key={image.id} type="button" onClick={()=>addFav(image.id)} className="btn btn-dark">ADD FAV</button></h3>   
            <a href={`/user/${image.id}`} className="btn btn-outline-secondary">Go To The User Profile</a>
            
           
             </div>
            
      </div>
    </div>
    })
}
</div>
    </div>
  )
}
