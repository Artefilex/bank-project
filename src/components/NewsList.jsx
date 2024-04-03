import { useDispatch } from "react-redux"
import { addNews ,addNewsToLocalStorage} from "../reducers/NewsSlice"
import { useState } from "react"
import "./news.css"

const NewsList = () => {
  const dispatch = useDispatch()

  const [newsTitle, setNewsTitle] = useState("")
  const [newsHeader, setNewsHeader] = useState("")
  const [imgUrl, setImgUrl] = useState("")
  const [category, setCategory] = useState("")
 

  const titleChanged = e => setNewsTitle(e.target.value)
  const headerChanged = e => setNewsHeader(e.target.value)
  const imgChanged = e => setImgUrl(e.target.value)
  const categoryChanged = e => setCategory(e.target.value)
 
  const save = [newsTitle, newsHeader, imgUrl, category].every(Boolean) && true

  const onSaveNews = (e) => {
    e.preventDefault()
    if (save) {
      try {
        const newsContent = newsHeader.split('\n').map((line) => ({ content: line.trim() }))
        const news = { newsTitle, newsContent, imgUrl, category}
        dispatch(addNews(news))
        addNewsToLocalStorage(news)
        setNewsTitle("")
        setImgUrl("")
        setNewsHeader("")
        setCategory("")
       
      } catch (err) {
        console.log(err)
      }
    }
  }

  return (
    <section className="Add_news">
      <div className="Add_news_container">
        <h2>Add News</h2>
        <form  onSubmit={onSaveNews}>
          <div className="Add_news_container_input">
            <label htmlFor="newsTitle"> News Title </label>
            <input type="text" id="newsTitle" value={newsTitle} onChange={titleChanged} />
          </div>
          
          <div className="Add_news_container_input">
            <label htmlFor="imgUrl "> Url </label>
            <input type="text" id="imgUrl " value={imgUrl} onChange={imgChanged} />
          </div>

          <div className="Add_news_container_input">
            <label htmlFor="newsHeader"> Contents </label>
            <textarea id="newsHeader" value={newsHeader} onChange={headerChanged} />

          </div>
          <div className="Add_news_container_input">
            <label htmlFor="category"> Category</label>
            <select id="category" className="categorys" value={category} onChange={categoryChanged}>
              <option value=""></option>
              <option value="döviz"> Döviz</option>
              <option value="gold"> Altın</option>
              <option value="emtia"> Emtia</option>
              <option value="cyrpto"> Kripto Para</option>
              <option value="borsa"> Borsa </option>
            
             
            
             

            </select>

          </div>


          <div className="Add_news_container_input">
            <button type="submit" className="form-btn" disabled={!save}> Save </button>
          </div>
        </form>
      </div>

    </section>
  )
}

export default NewsList