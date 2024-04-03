import React from 'react'
import { useState , useEffect } from 'react'
import { getNewsFromLocalStorage } from '../reducers/NewsSlice'
const EmtiaNews = () => {
  const [news , setNews] = useState([])
  useEffect(()=>{
    setNews(getNewsFromLocalStorage())
  },[])

  return (
    <div className='News'>
     {
      news && news.filter((item) => item.category === "emtia").map((emtia ,key) =>(
       <div key={key} className='News_Link'> 
       <div className='News_Link-container'> 
         <a href={`/${encodeURIComponent(emtia.imgUrl.trim())}`}>
            <img src={emtia.imgUrl} alt={emtia.imgUrl} />
            <span> {emtia.newsTitle}</span>
         </a>
       </div>

       </div>
      ))
     }
    </div>
  )
}

export default EmtiaNews