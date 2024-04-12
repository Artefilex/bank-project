
import { useGetGoldNewsQuery } from '../reducers/NewsApi';
import NewsCard from '../components/NewsCard';
import Error from '../components/Errors';
import Loading from '../components/LoadingPage';

const GoldNews = () => {
  const {data , isLoading , error} = useGetGoldNewsQuery()
  
  if ( error) return  <Error  status={error.status} message={error.message}/>
  if (isLoading) return <Loading/>


  return (
    <div className="flex w-[90%] flex-col  items-start justify-center gap-4">
    {
       data && data.articles.map((gold , i ) =>(
        <NewsCard key={i} title={gold.title} description={gold.description} newsUrl={gold.url} image={gold.urlToImage} />
        ))
       }
  
      </div>
  )
}

export default GoldNews