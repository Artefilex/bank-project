

import StockMarket from "../components/StockMarket";
import Charts from "../components/Charts";
import { useGetAllStocksQuery } from "../reducers/StockApi";
import Search from "../components/Search";
import Error from "../components/Errors";
import Loading from "../components/LoadingPage";
function Market() {
  const {data , error , isLoading} = useGetAllStocksQuery()

  if ( error) return  <Error status={error.status} message={error.data.error}/>
  if (isLoading) return <Loading/>
  return (
    <>
     <Charts/>
      <Search />
      <div className="flex w-full items-center gap-6 flex-col ">
      {data &&
        data?.results?.slice(0,400)?.map((stock , i) => (
          <StockMarket
            key={i}
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
