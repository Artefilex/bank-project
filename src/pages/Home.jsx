// import Charts from "../components/Charts"
import NewsCard from "../components/NewsCard";
// import Search from "../components/Search";
import Error from "../components/Errors";
import Loading from "../components/LoadingPage";
import { useGetCountryNewsQuery } from "../reducers/NewsApi";
// import Converter from "../components/Converter";

function Home() {
  const {data , isLoading , error} = useGetCountryNewsQuery()
  
  if ( error) return  <Error  status={error.status} message={error.message}/>
  if (isLoading) return <Loading/>
 

  return <div className="flex items-center flex-col justify-center w-[90%] ">
       {/* <Converter/> */}
  {/* <Charts/>
  <Search/> */}
  
      {data &&
        data.articles.slice(0, 20).map((cyrpto , i) => (
          <NewsCard key={i} title={cyrpto.title} description={cyrpto.description} newsUrl={cyrpto.url} image={cyrpto.urlToImage} />
        ))}
   
  </div>;
}

export default Home;
