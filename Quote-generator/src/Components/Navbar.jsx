import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <div>
        <NavLink to = '/'   style={{color:"black"}}>Home</NavLink>
        <NavLink to = '/Bookmark'   style={{color:"black"}}>Bookmark</NavLink>

        

        </div>
    </div>
  )
}

export default Navbar