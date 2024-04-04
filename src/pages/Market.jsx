import axios from "axios";
import { useEffect, useState } from "react";
import CurrencyNav from "../layouts/CurrencyNav";
import StockMarket from "../components/StockMarket";
import Charts from "../components/Charts";
function Market() {
  const [result, setResult] = useState(null);
 
  useEffect(() => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 2);
    const yesterdayStr = yesterday.toISOString().split("T")[0];
    const fetchData = async () => {
      const { data } = await axios.get(
        `https://api.polygon.io/v2/aggs/grouped/locale/us/market/stocks/${yesterdayStr}?adjusted=true&apiKey=${
          import.meta.env.VITE_EXCHANGE_API
        }`
      );
      setResult(data.results);
    };
    fetchData();
    const intervalData = setInterval(fetchData, 24 * 60 * 60 * 1000);
    return () => clearInterval(intervalData);
  }, []);
  

  return (
    <div>
     <Charts/>
      <CurrencyNav />
 
      {result &&
        result.slice(0,200).map((stock) => (
          <StockMarket
            key={stock.T}
            title={stock.T}
            volume={stock.v}
            high={stock.h}
            low={stock.l}
            open={stock.o}
            close={stock.c}
            volumeWeight={stock.vw}
            />
        ))}
     
    </div>
  );
}

export default Market;
