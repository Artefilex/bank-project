import NewsCard from "../components/NewsCard";
import Error from "../components/Errors";
import Loading from "../components/LoadingPage";
// import {useGetNewsQuery } from "../reducers/News2Api";
import { useGetAllNewsQuery } from "../reducers/FinnHubApi";

function Home() {
  // const {data, isLoading , error} = useGetNewsQuery()
  const {data, isLoading , error} = useGetAllNewsQuery()
  if ( error ) return  <Error  status={error.status} message={error.message}/>
  if (isLoading ) return <Loading/>
console.log(data)

  return <div className="flex items-center flex-col justify-center w-[90%] ">
  
      {data &&
        data?.slice(0,50)?.map((news , i) => (
          <NewsCard key={i} title={news.headline} description={news.c} newsUrl={news.url} image={news.image} />
        ))}
    
  </div>;
}

export default Home;
