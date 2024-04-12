

import { useGetExchangeNewsQuery } from '../reducers/NewsApi'
import NewsCard from '../components/NewsCard';
const ExchangeNews = () => {
  const { data ,isLoading , error} = useGetExchangeNewsQuery()

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred</div>;

  return (
    <div className="flex w-[90%] flex-col  items-start justify-center gap-4">
   {
        data && data.articles.slice(0, 20).map((excahnge) =>(
          <NewsCard key={excahnge.id} title={excahnge.title} description={excahnge.description} newsUrl={excahnge.url} image={excahnge.urlToImage} />
    
      ))
     }

    </div>
  )
}

export default ExchangeNews