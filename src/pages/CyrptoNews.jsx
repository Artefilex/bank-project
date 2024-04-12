
import { useGetCyrptoNewsQuery } from "../reducers/NewsApi";
import NewsCard from "../components/NewsCard";
import Loading from "../components/LoadingPage";
import Error from "../components/Errors";

const CyrptoNews = () => {
  const { data, isLoading, error } = useGetCyrptoNewsQuery();
 
  if ( error) return  <Error  status={error.status} message={error.message}/>
  if (isLoading) return <Loading/>
  return (
    <div className="flex w-[90%] flex-col  items-start justify-center gap-4">
      {data &&
        data.articles.slice(0, 20).map((cyrpto , i) => (
          <NewsCard key={i} title={cyrpto.title} description={cyrpto.description} newsUrl={cyrpto.url} image={cyrpto.urlToImage} />
        ))}
    </div>
  );
};

export default CyrptoNews;
