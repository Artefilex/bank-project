import Charts from "../components/Charts"
import NewsCard from "../components/NewsCard";
import Search from "../components/Search";
import { useGetCountryNewsQuery } from "../reducers/NewsApi";

function Home() {
  const {data , isLoading , error} = useGetCountryNewsQuery()
  
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred</div>;
 
 console.log(data.articles)
  return <div className="flex items-center flex-col justify-center w-[90%] ">
  <Charts/>
  <Search/>
  
      {data &&
        data.articles.slice(0, 20).map((cyrpto , i) => (
          <NewsCard key={i} title={cyrpto.title} description={cyrpto.description} newsUrl={cyrpto.url} image={cyrpto.urlToImage} />
        ))}
   
  </div>;
}

export default Home;
