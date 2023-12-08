import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        
        <NavLink  to = '/'>Home</NavLink>
        <NavLink to = '/Bookmark'>Bookmark</NavLink>
        
    </div>
    
  )
}

export default Navbar

