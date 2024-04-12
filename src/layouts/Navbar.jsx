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
   
    <Link to="/"> <img src={logo} alt="" className="w-[8rem]" /></Link>
    <button className="pr-4" onClick={() => setShowMenu(!showMenu)}> {showMenu ?  <IoMdClose /> :<IoMdMenu />  } </button>
    {
        showMenu &&   <nav className="w-full top-14 xtablet:max-w-[10rem] flex items-start font-bold text-gray-800 px-5 py-2 bg-slate-50 flex-col justify-around absolute xtablet:top-10 xtablet:right-8 xtablet:rounded-lg xtablet:rounded-tr-none border xtablet:border-gray-400 border-b-gray-400  text-[1.2rem]">
          <Link className="hover:text-slate-500 transition-colors duration-200" to="/currency">Currency</Link>
       <Link className="hover:text-slate-500 transition-colors duration-200" to="/gold"> Gold</Link>
       <Link className="hover:text-slate-500 transition-colors duration-200" to="/emtia"> Commodity</Link>
      <Link className="hover:text-slate-500 transition-colors duration-200" to="/cyrpto"> Cyrpto </Link>
      <Link className="hover:text-slate-500 transition-colors duration-200" to="/exchange"> Exchange</Link>
      <Link className="hover:text-slate-500 transition-colors duration-200" to="/market"> Stock </Link>
      <Link  className="hover:text-slate-500 transition-colors duration-200" to="/credit"> Calculator</Link>
        </nav>
    }
  </div>) : ( <div className="flex items-center justify-between w-[90%]">
  <Link to="/"> <img src={logo} alt="" className="w-[12rem]" /></Link>
      <nav className="w-full max-w-[40rem] flex items-center justify-between font-bold text-[1.1rem] text-slate-900 ">
      <Link className="hover:text-slate-500 transition-colors duration-200" to="/currency">Currency</Link>
      <Link className="hover:text-slate-500 transition-colors duration-200" to="/gold"> Gold</Link>
      <Link className="hover:text-slate-500 transition-colors duration-200" to="/emtia"> Commodity</Link>
      <Link className="hover:text-slate-500 transition-colors duration-200" to="/cyrpto"> Cyrpto </Link>
      <Link className="hover:text-slate-500 transition-colors duration-200" to="/exchange"> Exchange</Link>
      <Link className="hover:text-slate-500 transition-colors duration-200" to="/market"> Stock </Link>
      <Link  className="hover:text-slate-500 transition-colors duration-200" to="/credit"> Calculator</Link>
      </nav>
  </div>)
 }
 
 </>
  );
}

export default Navbar;
