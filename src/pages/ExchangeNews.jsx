

import { useGetExchangeNewsQuery } from '../reducers/NewsApi'
import NewsCard from '../components/NewsCard';
import Error from '../components/Errors';
import Loading from '../components/LoadingPage';
const ExchangeNews = () => {
  const { data ,isLoading , error} = useGetExchangeNewsQuery()
  if ( error) return  <Error  status={error.status} message={error.message}/>
  if (isLoading) return <Loading/>
  
  return (
    <div className="flex w-[90%] flex-col  items-center justify-center gap-4">
   {
        data && data.articles.slice(0, 20).map((excahnge, i) =>(
          <NewsCard key={i} title={excahnge.title} description={excahnge.description} newsUrl={excahnge.url} image={excahnge.urlToImage} />
    
      ))
     }

    </div>
  )
}

export default ExchangeNews