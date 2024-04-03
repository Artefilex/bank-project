import { useEffect, useState } from "react"
import { getNewsFromLocalStorage } from "../reducers/NewsSlice";


const CyrptoNews = () => {
  const [news, setNews] = useState([])
  
   
  useEffect(() => {
    setNews(getNewsFromLocalStorage());
    
  }, []);
  
  return (
    <div className="News">
      {news && news.filter((item) => item.category === "cyrpto").map((cyrto, key) => (
        <div key={key} className="News_Link">
       <div className="News_Link-container">
       <a href={`/${encodeURIComponent(cyrto.imgUrl.trim())}`}>
           <img src={cyrto.imgUrl} alt="" />
          <span> {cyrto.newsTitle}</span>
        </a>
       </div>
      
        </div>
      ))}

    </div>
  )
}

export default CyrptoNews