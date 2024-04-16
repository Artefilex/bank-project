 import { useGetCurrenciesQuery} from '../reducers/News2Api'
import NewsCard from '../components/NewsCard'
import Error from '../components/Errors'
import Loading from '../components/LoadingPage'

const CurrencyNews = () => {
  const {data :currencies ,error ,isLoading} = useGetCurrenciesQuery()
  
  console.log(currencies)
   if ( error) return  <Error status={error.status} message={error.message}/>
   if (isLoading) return <Loading/>
  return (
    <div className="flex w-[90%] flex-col  items-start justify-center gap-4">
 {
      currencies && currencies.map((currency , i) =>(
        <NewsCard key={i} title={currency.title} description={currency.body} newsUrl={currency.url} image={currency?.img?.w} />
      ))
     }  

    </div>
  )
}

export default CurrencyNews