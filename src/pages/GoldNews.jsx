import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const GoldNews = () => {
  
  const [news ,setNews] = useState([])
 
   useEffect(()=>{

      const fetchData = async() =>{
       const {data}  = await axios.get(`https://newsapi.org/v2/everything?q=gold&apiKey=${import.meta.env.VITE_NEWS_API}`)

       const main20News = data.articles.slice(0, 20)
  
       setNews(main20News) 
      }
     fetchData()
   const intervalData = setInterval(fetchData , 60 *1000)
   return () => clearInterval(intervalData);
   },[])

  console.log(news)
  return (
    <div className="flex w-[90%] flex-col  items-start justify-center gap-4">
    {
        news && news.map((cyrpto) =>(
          <Link to={cyrpto.url} key={cyrpto.id} target="_blank" className="flex w-full gap-8 flex-col tablet:flex-row"> 
         
          <img src={cyrpto.urlToImage} className="tablet:max-w-[15rem] w-full" alt="" />
          <header >
          <h2 className="text-2xl font-semibold text-slate-950 mb-2">{cyrpto.title}  </h2>
          <p className="text-slate-600">{cyrpto.description}</p>
          </header>
          </Link>
        ))
       }
  
      </div>
  )
}

export default GoldNews