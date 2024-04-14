import { Link } from "react-router-dom";
import logo from "../assest/logo.png"
import useResize from "../hooks/useResize";
import { IoMdClose , IoMdMenu  } from "react-icons/io";

import { useState } from "react";

const navigation = [
  {
    label: "Currency",
    rotation: "/currency"
  },
  {
    label: "Gold",
    rotation: "/gold"
  },
  {
    label: "Commodity",
    rotation: "/emtia"
  },
  {
    label: "Cyrpto",
    rotation: "/cyrpto"
  },
  {
    label: "Exchange",
    rotation: "/exchange"
  },
  {
    label: "Stock",
    rotation: "/market"
  },{
    label: "Calculator",
    rotation: "/credit"
  }
]
function Navbar() {
    const [showMenu , setShowMenu] = useState(false)

    const {isMobile} = useResize()
  return (
 <>
 {
    isMobile ? ( <div className="flex items-center justify-between w-full relative">
   
    <Link to="/"> <img src={logo} alt="" className="w-[8rem] pl-2" /></Link>
    <div className="flex items-center justify-center gap-4">
  
    <button className="pr-4 " onClick={() => setShowMenu(!showMenu)}> {showMenu ?  <IoMdClose size={20} /> :<IoMdMenu size={20} />  } </button>
    </div>
    
    {
        showMenu &&   <nav className="w-full top-14 xtablet:max-w-[10rem] flex items-start font-bold text-gray-800 px-5 py-2 bg-slate-50 flex-col justify-around absolute xtablet:top-10 xtablet:right-8 xtablet:rounded-lg xtablet:rounded-tr-none border xtablet:border-gray-400 border-b-gray-400  text-[1.2rem] z-20">
           { navigation.map((item) =>(
          <Link  key={item.label} className="hover:text-slate-500 transition-colors duration-200" to={item.rotation}>{item.label}</Link>
       ))}
        </nav>
    }
  </div>) : ( <div className="flex items-center justify-between w-[90%]">
      <Link to="/"> <img src={logo} alt="" className="w-[12rem]" /></Link>
      <nav className="w-full max-w-[40rem] flex items-center justify-between font-bold text-[1.1rem] text-slate-900 ">
            
       { navigation.map((item) =>(
          <Link  key={item.label} className="hover:text-slate-500 transition-colors duration-200" to={item.rotation}>{item.label}</Link>
       ))
       } 
   
      </nav>
  </div>)
 }
  
 </>
  );
}

export default Navbar;
