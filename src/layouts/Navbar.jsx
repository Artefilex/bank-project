import { Link } from "react-router-dom";
import logo from "../assest/logo.png"
import useResize from "../hooks/useResize";
import { IoMdClose , IoMdMenu  } from "react-icons/io";

import { useState } from "react";
function Navbar() {
    const [showMenu , setShowMenu] = useState(false)
    const {isMobile} = useResize()
  return (
 <>
 {
    isMobile ? ( <div className="flex items-center justify-between w-full relative">
    <img src={logo} alt="" className="w-[12rem]" />
    <button className="pr-4" onClick={() => setShowMenu(!showMenu)}> {showMenu ?  <IoMdClose /> :<IoMdMenu />  } </button>
    {
        showMenu &&   <nav className="w-full max-w-[8rem] flex items-start font-semibold text-slate-700 px-5 py-2 bg-slate-200 flex-col justify-around absolute top-10 right-8 rounded-lg rounded-tr-none border border-slate-500  text-[1.1rem]">
        <Link to="/currency">Döviz</Link>
        <Link to="/gold"> Altın</Link>
        <Link to="/emtia"> Emtialar</Link>
        <Link to="/cyrpto"> Kripto Para </Link>
        <Link to="/exchange"> Borsa</Link>
        <Link to="/credit"> Kredi</Link>
        </nav>
    }
  </div>) : ( <div className="flex items-center justify-between w-[95%]">
    <img src={logo} alt="" className="w-[12rem]" />
      <nav className="w-full max-w-[35rem] flex items-center justify-around font-semibold text-[1.1rem]">
      <Link to="/currency">Döviz</Link>
      <Link to="/gold"> Altın</Link>
      <Link to="/emtia"> Emtialar</Link>
      <Link to="/cyrpto"> Kripto Para </Link>
      <Link to="/exchange"> Borsa</Link>
      <Link to="/credit"> Kredi</Link>
      </nav>
  </div>)
 }
 
 </>
  );
}

export default Navbar;
