
import { useEffect, useState } from 'react'
import { getNewsFromLocalStorage } from '../reducers/NewsSlice'
const CurrencyNews = () => {
   const [news ,setNews] = useState([])
 
   useEffect(()=>{
   setNews(  getNewsFromLocalStorage())

   },[])
  
   
  return (
    <div className="News">
  {
      news && news.filter(item => item.category=== "döviz").map((currency ,key)=>(
        <div className='News_Link' key={key} >
          <div className='News_Link-container'>
            <a href={`/${encodeURIComponent(currency.imgUrl.trim())}`}>
              <img src={currency.imgUrl} alt={currency.imgUrl} />
              <span> {currency.newsTitle}</span>
            </a>
          </div>
        </div>
      ) )
     }

    </div>
  )
}

export default CurrencyNews