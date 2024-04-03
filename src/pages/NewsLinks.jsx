import { useParams } from "react-router-dom";
import { useEffect, useState } from "react"
import { getNewsFromLocalStorage } from "../reducers/NewsSlice";
const NewsLinks = ( ) => {
  const [news, setNews] = useState([])
 
   
  useEffect(() => {
    setNews(getNewsFromLocalStorage());
    
  }, []);

 
  const { title } = useParams();
  console.log(title)
  console.log(news.filter(item => item.newsTitle === decodeURIComponent(title)))
  return (
    <div >

           {news && news.filter((item) => item.imgUrl === decodeURIComponent(title) ).map((newsitem, key) => (
    <div key={key}>
        <div  className="News_Container">
          
           <div className="News_Container-content">
           <img src={newsitem.imgUrl} alt="" />
          
           <div className="News_Container-content-text">
           <h2>{newsitem.newsTitle}</h2>
           {
          newsitem.newsContent.map((contents ,index)=> <p  key={index}> {contents.content}</p> )
          }
           </div>
           </div>
           
          </div>
  
    </div>
  ))}


    

    </div>
  )
}

export default NewsLinks