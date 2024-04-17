import StockMarket from "../components/StockMarket";
import Charts from "../components/Charts";
import { useGetAllStocksQuery } from "../reducers/StockDataApi";
import Search from "../components/Search";
import Error from "../components/Errors";
import Loading from "../components/LoadingPage";
function Market() {
  const { data: page1, error, isLoading } = useGetAllStocksQuery(1);
  const { data: page2 } = useGetAllStocksQuery(2);
  if (error)
    return <Error status={error.status} message={"SomeThing went Wrong"} />;
  if (isLoading) return <Loading />;
  return (
    <>
      <Charts />
      <Search />
      <div className="flex w-full items-center gap-6 flex-col ">
        {page1 &&
          page1?.body?.map((stock, i) => (
            <StockMarket
              key={i}
              title={stock.name}
              volume={stock.netchange}
              high={0}
              low={0}
              open={0}
              close={0}
              companySymbol={stock.symbol}
              netchange={stock.netchange}
              pctchange={stock.pctchange}
              lastSale={stock.lastsale}
            />
          ))}
        {page2 &&
          page2?.body?.map((stock, i) => (
            <StockMarket
              key={i}
              title={stock.name}
              companySymbol={stock.symbol}
              netchange={stock.netchange}
              pctchange={stock.pctchange}
              lastSale={stock.lastsale}
            />
          ))}
      </div>
    </>
  );
}

export default Market;
