import { useGetCurrenyNewsQuery } from '../reducers/NewsApi'
import NewsCard from '../components/NewsCard'
import Error from '../components/Errors'
import Loading from '../components/LoadingPage'
const CurrencyNews = () => {
  const {data : news ,error ,isLoading} = useGetCurrenyNewsQuery()
  if ( error) return  <Error status={error.status} message={error.message}/>
  if (isLoading) return <Loading/>
  return (
    <div className="flex w-[90%] flex-col  items-start justify-center gap-4">
  {
      news && news.articles.slice(0,20).map((currency , i) =>(
        <NewsCard key={i} title={currency.title} description={currency.description} newsUrl={currency.url} image={currency.urlToImage} />
      ))
     }

    </div>
  )
}

export default CurrencyNews