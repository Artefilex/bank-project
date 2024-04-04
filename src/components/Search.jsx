import axios from "axios";
import { useEffect, useState } from "react";
import useDebounce from "../hooks/useDebounce";
import { popularStocks } from "../mockData/popularStocks";
import { IoMdSearch } from "react-icons/io";
import { FaCircleArrowDown ,FaCircleArrowUp } from "react-icons/fa6";
function Search() {
    const [result ,setResult] = useState(null)
    const [dateRange , setDateRange] = useState({
        today: new Date() ,
        yesterday:  new Date()
    })
  const [showStock , setShowStock] = useState(false)
    const [search,setSearch] = useState("")
    const debouncedValue = useDebounce(search, 500);
    useEffect(()=>{
        const today = new Date();
        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);
        const todayStr = today.toISOString().split('T')[0];
        const yesterdayStr = yesterday.toISOString().split('T')[0];
        setDateRange({today: todayStr , yesterday: yesterdayStr})

    },[])
    const handleSubmit = async (e) =>{
       e.preventDefault()
       const {data} = await  axios.get(`https://api.polygon.io/v2/aggs/ticker/${debouncedValue.toUpperCase().trim()}/range/1/day/${dateRange.yesterday}/${dateRange.today}?apiKey=mwlB8HOHrB2dpxy5dt4gpq2qf9Ulo8hI`)
       setShowStock(false)
      setResult(data)   
       setSearch("")
    }
    console.log(result)

  return <form onSubmit={handleSubmit} className="flex items-start justify-center relative">
   <div className="flex items-center gap-2 flex-col ">
 <div  className="border-2  border-black px-4 py-1 rounded">
 <input className="border-none outline-none" type="text" value={search}  onChange={(e) => setSearch(e.target.value)} placeholder="... Search Stock"/>
   <button className="text-slate-900" onClick={()=>setShowStock(!showStock)}> {showStock ? <FaCircleArrowUp/> : <FaCircleArrowDown/>}</button>
 </div>
   {
    showStock && <div className="w-full max-w-[17rem] max-h-[15rem] flex gap-2 flex-col  font-semibold overflow-auto absolute left-0 top-10 bg-slate-600 text-slate-50 p-2 ">
    {
     popularStocks.map((stock) => <div className="cursor-pointer hover:bg-slate-500 hover:text-slate-50 px-2 py-2 transition-all duration-200" key={stock.label}  onClick={() => {setSearch(stock.value) ; setShowStock(false)}}> {stock.label} </div>)
    }
  </div> 
   }
   </div>
    <button type="submit" className=" text-slate-800"><IoMdSearch size={40} /> </button>
  </form>;
}

export default Search;
