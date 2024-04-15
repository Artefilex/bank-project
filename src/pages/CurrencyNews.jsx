import { useGetCurrenyNewsQuery } from '../reducers/FinnHubApi'
import NewsCard from '../components/NewsCard'
import Error from '../components/Errors'
import Loading from '../components/LoadingPage'

const CurrencyNews = () => {
  const {data : news ,error ,isLoading} = useGetCurrenyNewsQuery()
  
console.log(news)
 
  if ( error) return  <Error status={error.status} message={error.message}/>
  if (isLoading) return <Loading/>
  return (
    <div className="flex w-[90%] flex-col  items-start justify-center gap-4">
  {
      news && news?.slice(0,20).map((currency , i) =>(
        <NewsCard key={i} title={currency.headline} description={currency.summary} newsUrl={currency.url} image={currency.image} />
      ))
     }

    </div>
  )
}

export default CurrencyNews