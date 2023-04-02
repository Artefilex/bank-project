import {  useState } from "react";
import  SearchIcon  from "../../assest/SearchIcon.svg";
const Search = () => {
   
    const [value,setValue] = useState("")
   
    const handleChange = (e)=>{
      setValue(e.target.value)
     
    }

    const handleSubmit = (e)=>{
      e.preventDefault()
      setValue("")
    }
 
  
    return ( 
    <form className="search" onSubmit={handleSubmit} >
     
      
        <input  value={value} onChange={handleChange} /> 
        <button  > <img src={SearchIcon} alt="" /> </button>  
       </form> 
      
  )
}

export default Search