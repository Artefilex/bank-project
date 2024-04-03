import {useState,useEffect} from 'react'
import { getNewsFromLocalStorage } from '../reducers/NewsSlice'

const ExchangeNews = () => {

  const [news,setNews] = useState([])
 
  useEffect(()=>{
    setNews(getNewsFromLocalStorage())
  },[])
  
  return (
   <div className='News'>
    {
    news && news.filter(item => item.category === "borsa").map((exchange, key) =>(
      <div className='News_Link' key={key}>
        <div className='News_Link-container'>
          <a href={`/${encodeURIComponent(exchange.imgUrl.trim())}`}>
            <img src={exchange.imgUrl} alt={exchange.imgUrl} />
            <span>{exchange.newsTitle}</span>
          </a>
        </div>
      </div>
    )) 
    }
   </div>
  )
}

export default ExchangeNews