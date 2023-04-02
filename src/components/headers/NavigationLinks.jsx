import React from 'react'
import { NavLink } from 'react-router-dom'


const NavigationLinks = () => {
  return (
 
     <nav className='Header__Container-navigation-navbar'>
      <NavLink to="/currency">Döviz</NavLink>
     <NavLink to="/gold"> Altın</NavLink>
     <NavLink to="/emtia"> Emtialar</NavLink>
     <NavLink to="/cyrpto"> Kripto Para </NavLink>
     <NavLink to="/exchange"> Borsa</NavLink>
     <NavLink to="/credit"> Kredi</NavLink>
     <NavLink to ="/news"> Add News</NavLink>
    </nav>
 
  )
}

export default NavigationLinks