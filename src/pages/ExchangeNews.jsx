import { useGetExchangeNewsQuery } from "../reducers/NewsApi";
import NewsCard from "../components/NewsCard";
import Error from "../components/Errors";
import Loading from "../components/LoadingPage";
const ExchangeNews = () => {
  const { data: exchanges, isLoading, error } = useGetExchangeNewsQuery();
  if (error) return <Error status={error.status} message={error.message} />;
  if (isLoading) return <Loading />;

  return (
    <div className="flex w-[90%] flex-col  items-center justify-center gap-4">
      {exchanges &&
        exchanges?.data?.news?.map((currency, i) => (
          <NewsCard
            key={i}
            title={currency.article_title}
            description={currency.source}
            newsUrl={currency.article_url}
            image={currency.article_photo_url}
          />
        ))}
    </div>
  );
};

export default ExchangeNews;
