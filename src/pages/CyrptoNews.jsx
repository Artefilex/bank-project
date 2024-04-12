
import { useGetCyrptoNewsQuery } from "../reducers/NewsApi";
import NewsCard from "../components/NewsCard";

const CyrptoNews = () => {
  const { data, isLoading, error } = useGetCyrptoNewsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred</div>;
  return (
    <div className="flex w-[90%] flex-col  items-start justify-center gap-4">
      {data &&
        data.articles.slice(0, 20).map((cyrpto) => (
          <NewsCard key={cyrpto.id} title={cyrpto.title} description={cyrpto.description} newsUrl={cyrpto.url} image={cyrpto.urlToImage} />
        ))}
    </div>
  );
};

export default CyrptoNews;
