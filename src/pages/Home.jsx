import axios from "axios"
import { useEffect, useState } from "react"


function Home() {
  const [news ,setNews] = useState([])
//  const [cur , setCur] = useState([])
  useEffect(()=>{

     const fetchData = async() =>{
      const {data}  = await axios.get(`https://newsapi.org/v2/top-headlines?country=tr&apiKey=${import.meta.env.VITE_NEWS_API}`)
     setNews(data)  
      // const response = await axios.get("https://api.polygon.io/v2/aggs/ticker/X:BTCUSD/range/1/day/2023-01-09/2023-01-09?apiKey=mwlB8HOHrB2dpxy5dt4gpq2qf9Ulo8hI")
      // setCur(response.data)
    }
    fetchData()
  const intervalData = setInterval(fetchData , 60 *1000)
  return () => clearInterval(intervalData);
  },[])

  return <div className="flex items-center justify-center w-[90%] flex-row">
    Home
 
  </div>;
}

export default Home;
