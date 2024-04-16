import NewsCard from "../components/NewsCard";
import Error from "../components/Errors";
import Loading from "../components/LoadingPage";
import { useGetAllNewsQuery } from "../reducers/News2Api";


function Home() {

  const {data : news, isLoading , error} = useGetAllNewsQuery()

   
  if ( error ) return  <Error  status={error.status} message={error.message}/>
  if (isLoading ) return <Loading/>

  return <div className="flex items-center flex-col justify-center w-[90%] ">
  
  {
      news && news.map((countryNews , i) =>(
        <NewsCard key={i} title={countryNews.title} description={countryNews.body} newsUrl={countryNews.url} image={countryNews?.img?.w} />
      ))
     }  
    
  </div>;
}

export default Home;
