

import StockMarket from "../components/StockMarket";
import Charts from "../components/Charts";
import { useGetAllStocksQuery } from "../reducers/StockApi";
import Search from "../components/Search";
function Market() {
  const {data} = useGetAllStocksQuery()
  return (
    <>
     <Charts/>
      <Search />
      <div className="flex w-full items-center gap-6 flex-col ">
      {data &&
        data.results.slice(0,200).map((stock) => (
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
     
    </>
  );
}

export default Market;
