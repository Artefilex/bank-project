
import CurrencyNav from "./currencyNav/CurrencyNav";
import { useState } from "react";
import NavigationLinks from "./NavigationLinks"
import { NavLink } from "react-router-dom";
import { Search } from "../NavigationComponent/index"
import Dollar from "../../assest/Dollar.svg"
import Sidebar from "./sidebar/Sidebar"
import "./header.css"
import { useSelector } from "react-redux";


const Headers = () => {
  const [shows, setShows] = useState(false)
  const currency =  useSelector((state) => state.currency.items.rates);
   
  return (

    <div className="Header">
      < div className="Header__Container">
     
          <div className="Header__Container-logo">
            <NavLink to="/"> <img src={Dollar} alt="" /> <h4>CoinFlex</h4> </NavLink>
          </div>
          <div className="Header__Container-navigation">
            <div className="first-nav">
              <NavigationLinks />
              <Search />
            </div>
          </div>
          <div className="Header-Container-sidebar">
            <button className="bars-menu" onClick={() => setShows(!shows)}  >

              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>

            </button>
          </div>
          {shows && <Sidebar />}
      </div>
      <div className="Header_container-currency"  >
        {
          currency &&  <CurrencyNav /> 
        }
      </div>
    </div>
  )
}

export default Headers