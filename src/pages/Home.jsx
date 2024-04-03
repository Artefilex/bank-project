import axios from "axios"
import { useEffect, useState } from "react"

function Home() {
  const [news ,setNews] = useState([])
 
  useEffect(()=>{

     const fetchData = async() =>{
      const {data}  = await axios.get(`https://newsapi.org/v2/top-headlines?country=tr&apiKey=${import.meta.env.VITE_NEWS_API}`)
     setNews(data)  
     }
    fetchData()
  const intervalData = setInterval(fetchData , 60 *1000)
  return () => clearInterval(intervalData);
  },[])

  console.log(news)
  return <div className="flex items-center justify-center w-[90%] flex-row">
    Home

  </div>;
}

export default Home;
