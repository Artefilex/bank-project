import Charts from "../components/Charts"
import { useGetCountryNewsQuery } from "../reducers/NewsApi";

function Home() {
  const {data , isLoading , error} = useGetCountryNewsQuery()
  
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred</div>;
 
 console.log(data.articles)
  return <div className="flex items-center justify-center w-[90%] flex-row">
  <Charts/>
 
  </div>;
}

export default Home;
