
import React, { useEffect, useState } from 'react'

import { fetch_images,search_images } from '../redux/actions/index';
import { useDispatch } from 'react-redux';
import Image from './Image';
export default function ImageList(props) {

  

  const dispatch=useDispatch();

  const [value,setValue]=useState('');
  const [page,setPage]=useState(1);


  // const fetchProducts=async ()=>{
  //   const data=await fetch('https://fakestoreapi.com/products');
  //   const parsed=await data.json();
  //   dispatch(set_products(parsed))
  // }

  
  useEffect(()=>{
    dispatch(fetch_images(page,props.cat));
    //dispatch(search_images(value));
  },[])


  const fun=(e)=>
  {
    setPage(1)
    e.preventDefault();
    console.log(value)
    dispatch(search_images(page,value));
    
  }
  const prevClick=(e)=>{
    e.preventDefault();
    console.log(value)
    dispatch(search_images(page-1,value));
    setPage(page-1)
  }
  const nextClick=(e)=>{
    e.preventDefault();
    console.log(value)
    dispatch(search_images(page+1,value));
    setPage(page+1)
  }
  return (
    <div className='container my-5'>
         <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" value={value} onChange={e =>setValue(e.target.value)}  aria-label="Search"/>
                <button className="btn btn-outline-success" onClick={fun} type="submit">Search</button>
        </form>
  <Image/>
  <div className="d-flex justify-content-between">
      <button type="button" disabled={page<=1} className="btn btn-dark" onClick={prevClick}>&larr; PREV</button>

      <button type="button" className="btn btn-dark" onClick={nextClick}>NEXT &rarr;</button>
      </div>

    </div>
  )
}
