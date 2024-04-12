import { useGetCurrenyNewsQuery } from '../reducers/NewsApi'
import NewsCard from '../components/NewsCard'
const CurrencyNews = () => {
  const {data : news ,error ,isLoading} = useGetCurrenyNewsQuery()
  if ( error) return <div> error ...  </div>
  if (isLoading) return <div> loading ...  </div>
  return (
    <div className="flex w-[90%] flex-col  items-start justify-center gap-4">
  {
      news && news.articles.slice(0,20).map((currency) =>(
        <NewsCard key={currency.id} title={currency.title} description={currency.description} newsUrl={currency.url} image={currency.urlToImage} />
      ))
     }

    </div>
  )
}

export default CurrencyNews