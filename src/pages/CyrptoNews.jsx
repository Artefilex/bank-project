

import NewsCard from "../components/NewsCard";
import Loading from "../components/LoadingPage";
import Error from "../components/Errors";
import { useGetBtcNewsQuery } from "../reducers/News2Api";
const CyrptoNews = () => {
  const { data : cyrpto , isLoading, error } = useGetBtcNewsQuery();
  if ( error) return  <Error  status={error.status} message={error.message}/>
  if (isLoading) return <Loading/>
  return (
    <div className="flex w-[90%] flex-col  items-start justify-center gap-4">

  {
      cyrpto && cyrpto.map((gold , i) =>(
        <NewsCard key={i} title={gold.title} description={gold.body} newsUrl={gold.url} image={gold?.img?.w} />
      ))
     }  
    </div>
  );
};

export default CyrptoNews;
