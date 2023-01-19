import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import {fetch_user_detail} from "../redux/actions/index"
export default function UserDetails() {
    const userDetail=useSelector((state)=>(state.userDetail))

    const {userID}=useParams();
    const dispatch=useDispatch();
    
    useEffect(()=>{
        console.log("sonal")
        if(userID && userID!==''){dispatch(fetch_user_detail(userID));}
      },[userID])

   
   console.log(userDetail);

  return (
    <div className='container my-5'>
     <div className="row">
      <div className="col-sm-5 mb-3 mb-sm-0">
      <div className="card">
      <div className="card-body">
        <img src={userDetail?.user?.profile_image?.large} className="card-img-top" alt="..."/>  
      </div>
          </div>
      </div>
        { <div className="col-sm-5 mb-3 mb-sm-0">
          <div className="card">
            <div className="card-body">
            <h3 className="card-title">Name: {userDetail?.user?.first_name} {userDetail?.user?.last_name}</h3>

            
                <h4 className="card-title">Instagram Username: {userDetail?.user?.social?.instagram_username}</h4> 
                <h4 className="card-title">Twitter Username: {userDetail?.user?.social?.twitter_username}</h4> 
              <p className="card-text">{userDetail?.user?.bio}</p>
              {/* <p className="card-text">${product.price}</p>  */}
            <a href={userDetail?.user?.social?.portfolio_url} target="_blank" className="btn btn-outline-success">Go to Instagram profile</a>
            </div>
          </div>
        </div> }
    </div>
    </div>
  )
}
