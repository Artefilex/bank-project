
import { useGetEmtiaNewsQuery } from '../reducers/NewsApi'
import NewsCard from '../components/NewsCard';
import Error from '../components/Errors';
import Loading from '../components/LoadingPage';
const EmtiaNews = () => {
  const {data , isLoading , error} = useGetEmtiaNewsQuery()
  

  if ( error) return  <Error  status={error.status} message={error.message}/>
  if (isLoading) return <Loading/>

  return (
    <div className="flex w-[90%] flex-col  items-start justify-center gap-4">
   {  data &&
        data.articles.slice(0, 20).map((cyrpto ,i ) =>(
       <NewsCard key={i} title={cyrpto.title} description={cyrpto.description} newsUrl={cyrpto.url} image={cyrpto.urlToImage} />
      ))
     }

    </div>
    
  )
}

export default EmtiaNews