import {useState} from 'react'
import "./sidebar.css"
import { Search } from '../../NavigationComponent'
import { NavLink } from 'react-router-dom'
const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const handleLinkClick = () => {
      setIsSidebarOpen(false);
    };


    return (
    <>
      {
        isSidebarOpen &&   <>
        <div className={`Sidebar`}>
        <div className="Sidebar-downContainer">
            <Search />
            <nav className='Sidebar-navigation'>
                <NavLink to="/currency"  onClick={handleLinkClick} >Döviz</NavLink>
                <NavLink to="/gold"  onClick={handleLinkClick}> Altın</NavLink>
                <NavLink to="/emtia"  onClick={handleLinkClick}> Emtialar</NavLink>
                <NavLink to="/cyrpto"  onClick={handleLinkClick}> Kripto Para </NavLink>
                <NavLink to="/exchange"  onClick={handleLinkClick}> Borsa</NavLink>
                <NavLink to="/kredi"  onClick={handleLinkClick}> Kredi</NavLink>
                <NavLink to ="/news" onClick={handleLinkClick}> Add News</NavLink>
            </nav>

        </div>

    </div>
        
        </>
      }
    </>
    )
}

export default Sidebar