import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FavContext } from '../Pages/FavContext'
import { useContext } from 'react'
const Navbar = () => {
    let nav=useNavigate()
     const handleNav=()=>{
      handleFav()
       nav('/fav')
     }
     const handleHome=()=>{
      handleFalse()
      nav('/')
     }
     const {istrue,handleFav,handleFalse}=useContext(FavContext)
  return (
         <div className='header'>
          {istrue?<p className='checkFav' onClick={handleNav}>Go To Favourites</p>:
          <p className='checkFav' onClick={handleHome}>Go To Home</p>}
            
        </div>
  )
}

export default Navbar