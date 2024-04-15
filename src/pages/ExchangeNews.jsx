

import { useGetExchangeNewsQuery } from "../reducers/FinnHubApi";
import NewsCard from '../components/NewsCard';
import Error from '../components/Errors';
import Loading from '../components/LoadingPage';
const ExchangeNews = () => {
  const { data ,isLoading , error} = useGetExchangeNewsQuery()
  if ( error) return  <Error  status={error.status} message={error.message}/>
  if (isLoading) return <Loading/>
  
  return (
    <div className="flex w-[90%] flex-col  items-center justify-center gap-4">
   {data &&
        data?.slice(0,20)?.map((news , i) => (
          <NewsCard key={i} title={news.headline} description={news.summary} newsUrl={news.url} image={news.image} />
        ))}

    </div>
  )
}

export default ExchangeNews