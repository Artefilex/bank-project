import React from 'react'
import { useState, useEffect } from 'react'
import { getNewsFromLocalStorage } from '../../reducers/NewsSlice'

const GoldNews = () => {
  
  const [news , setNews] = useState([])

  useEffect(()=>{
   setNews(getNewsFromLocalStorage())
  },[])


  return (
    <div className='News'>
     {
     news && news.filter(  item => item.category === "gold").map((gold,key) =>(
      <div key={key} className='News_Link'>
        <div className='News_Link-container'>
          <a href={`/${encodeURIComponent(gold.imgUrl.trim())}`}>
            <img src={gold.imgUrl} alt={gold.imgUrl} />
            <span> {gold.newsTitle} </span>
          </a>
        </div>
      </div>
     )) 
     }
    </div>
  )
}

export default GoldNews