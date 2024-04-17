import { useGetGoldNewsQuery } from "../reducers/News2Api";
import NewsCard from "../components/NewsCard";
import Error from "../components/Errors";
import Loading from "../components/LoadingPage";

const GoldNews = () => {
  const { data: goldNews, isLoading, error } = useGetGoldNewsQuery();

  if (error) return <Error status={error.status} message={error.message} />;
  if (isLoading) return <Loading />;

  return (
    <div className="flex w-[90%] flex-col  items-start justify-center gap-4">
      {goldNews &&
        goldNews.map((gold, i) => (
          <NewsCard
            key={i}
            title={gold.title}
            description={gold.body}
            newsUrl={gold.url}
            image={gold?.img?.w}
          />
        ))}
    </div>
  );
};

export default GoldNews;
