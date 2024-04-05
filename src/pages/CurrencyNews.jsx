import { Link } from 'react-router-dom'
import { useGetCurrenyNewsQuery } from '../reducers/NewsApi'
const CurrencyNews = () => {

  const {data : news ,error ,isLoading} = useGetCurrenyNewsQuery()
 
  if ( error) return <div> error ...  </div>
  
     
  if (isLoading) return <div> loading ...  </div>
  
  return (
    <div className="flex w-[90%] flex-col  items-start justify-center gap-4">
  {
      news && news.articles.slice(0,20).map((cyrpto) =>(
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

export default CurrencyNews