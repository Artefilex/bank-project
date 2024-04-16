import NewsCard from "../components/NewsCard";
import Error from "../components/Errors";
import Loading from "../components/LoadingPage";
import { useGetAllNewsQuery } from "../reducers/FinnHubApi";
import axios from "axios";
import { useEffect } from "react";

function Home() {

  const {data, isLoading , error} = useGetAllNewsQuery()
  const options = {
    method: 'GET',
    url: 'https://real-time-finance-data.p.rapidapi.com/currency-news',
    params: {
      from_symbol: 'USD',
      to_symbol: 'BTC',
      language: 'en'
    },
    headers: {
      'X-RapidAPI-Key': '1abe096d66mshdc7099091eeef91p14909cjsn206ff71dc890',
      'X-RapidAPI-Host': 'real-time-finance-data.p.rapidapi.com'
    }
  };
   
  
  useEffect(() =>{
  const fetchdata = async () =>{
    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  fetchdata()
  },[])
  if ( error ) return  <Error  status={error.status} message={error.message}/>
  if (isLoading ) return <Loading/>

  return <div className="flex items-center flex-col justify-center w-[90%] ">
  
      {data &&
        data?.slice(0,50)?.map((news , i) => (
          <NewsCard key={i} title={news.headline} description={news.c} newsUrl={news.url} image={news.image} />
        ))}
    
  </div>;
}

export default Home;
