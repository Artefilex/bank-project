import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { LineChart } from "@mui/x-charts/LineChart";
import { BiUpArrowAlt, BiDownArrowAlt } from "react-icons/bi";
import {
  useGetSearchQuery,
} from "../reducers/StockApi";
import ListItem from "./ListItem";
import Error from "./Errors";
import Loading from "./LoadingPage";
import {useGetStocSearchkDataQuery} from "../reducers/StockSearchApi"
function Charts() {
  const { searchKey } = useSelector((state) => state.searchItem);

  const [chartData, setChartData] = useState([]);
  const { data, error, isLoading } = useGetSearchQuery(searchKey || "AAPL");
  const { data: result } = useGetStocSearchkDataQuery(searchKey || "AAPL");
  useEffect(() => {
    if (data && data.results && data.results.values) {
      const formattedData = data.results.values.map((item) => {
        const date = new Date(item.timestamp);
        const formattedDate = `${date.getFullYear()}-${String(
          date.getMonth() + 1
        ).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
        const value = isNaN(item.value) ? 0 : item.value;
        return { x: formattedDate, y: value };
      });
      setChartData(formattedData);
    }
  }, [data]);

 if ( error) return  <Error status={error?.status} message={"You've exceeded the maximum requests per minute, please wait"}/>
 if (isLoading) return <Loading/>


  const yAxisData = chartData?.reduce((acc, curr) => acc + curr.y, 0);
  return (
    <div className="px-4 flex flex-col justify-between w-[95%] items-center tablet:items-start tablet:flex-row gap-4 mt-5">
      <LineChart
        yAxis={[{ min: Number(yAxisData / chartData.length) - 5 }]}
        series={[
          {
            data: chartData?.map((dataPoint) => Number(dataPoint.y).toFixed(4)),
            label:  searchKey || "AAPL",  
            showMark: true,
            type: "line",
            area: true,
         
          },
        ]}
        
        xAxis={[
          {
            scaleType: "point",
            data: chartData?.map((dataPoint) => dataPoint.x).reverse(),
          
          },
        ]}
        height={300}
        sx={{
          ".MuiLineElement-root": {
            display: "none",
          },
          
        }}
      
      />
      <div className="flex w-[90%] items-center justify-center tablet:w-full">
        {result && result?.Results?.map((stock , i) => (
          <div
            key={i}
            className="flex w-[90%] justify-start gap-4 items-start flex-col"
          >
            <header className={"flex  items-start w-full justify-between"}>
              <div className="w-full max-w-[15rem]">
                <h2 className="text-[2rem] font-bold text-slate-800">
                  {searchKey}
                </h2>
                <h4 className="flex text-xl  gap-1 font-semibold text-slate-400 flex-col tablet:flex-row tablet:items-center">
                  {" "}
                  Volume{" "}
                  <span className="text-lg text-slate-800">{stock.Volume}</span>{" "}
                </h4>
                 <h4 className=" flex text-xl gap-1 font-semibold text-slate-400 flex-col tablet:flex-row  tablet:items-center">
                  {" "}
                  <span> Date </span>
                  <span className="text-lg text-slate-800">
                    {stock.Date}
                  </span>{" "} 
                </h4>
              </div>
              <div className="flex items-center">
                {stock.AdjClose - stock.Open  > 0 ? (
                  <div>
                    <BiUpArrowAlt size={60} className="text-green-600" />
                    <span className="flex w-[5rem] gap-1 font-semibold">
                      {" "}
                      {Math.abs(
                        Number(((stock.AdjClose - stock.Open) / stock.Open) * 100)
                      ).toFixed(4)}{" "}
                      <div>%</div>{" "}
                    </span>
                  </div>
                ) : stock.AdjClose - stock.Open=== 0 ? (
                  ""
                ) : (
                  <div>
                    <BiDownArrowAlt size={60} className="text-red-600" />
                    <span className="flex w-[5rem] gap-1 font-semibold">
                      {" "}
                      {Math.abs(
                       Number(((stock.AdjClose - stock.Open) / stock.Open) * 100)
                      ).toFixed(4)}{" "}
                      <div>%</div>{" "}
                    </span>
                  </div>
                )}
              </div>
            </header>

            <div className="flex w-full flex-col items-center tablet:flex-row">
              <ul className="flex justify-between items-center w-full gap-4 text-xl font-semibold  ">
                <ListItem title="Open" value={stock.Open} />
                <ListItem title="Close" value={stock.Close} />
                <ListItem title="High" value={stock.High} />
                <ListItem title="Low" value={stock.Low} />
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Charts;
