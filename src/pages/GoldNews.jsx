
import { useGetGoldNewsQuery } from '../reducers/NewsApi';
import NewsCard from '../components/NewsCard';

const GoldNews = () => {
  const {data , isLoading , error} = useGetGoldNewsQuery()
  
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred</div>;


  return (
    <div className="flex w-[90%] flex-col  items-start justify-center gap-4">
    {
       data && data.articles.map((gold) =>(
        <NewsCard key={gold.id} title={gold.title} description={gold.description} newsUrl={gold.url} image={gold.urlToImage} />
        ))
       }
  
      </div>
  )
}

export default GoldNews