import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { LineChart } from "@mui/x-charts/LineChart";

import {  useGetSearchQuery, useGetSearchResultQuery } from "../reducers/StockApi";
function Charts() {
  const { searchKey} = useSelector((state) => state.searchItem);

  const [chartData, setChartData] = useState([]);
  const { data, error, isLoading } = useGetSearchQuery(searchKey);
  const { data : result, } = useGetSearchResultQuery(searchKey);
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
     setChartData(formattedData)
    }
    
  }, [data]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred</div>;
  
 console.log(result)
  const yAxisData = chartData?.reduce((acc, curr) => acc + curr.y, 0);
  return (
    <div className="px-4 flex flex-col justify-between w-full items-start tablet:flex-row gap-4">
      <LineChart  
      
        yAxis={[{ min: Number( yAxisData / chartData.length) - 5 }]}
        series={[{ data: chartData?.map((dataPoint) =>Number(dataPoint.y).toFixed(4)), label: result?.resultsCount === 1 ? searchKey : "AAPL" , area: true, showMark: false }]}
        xAxis={[{ scaleType: 'point', data: chartData?.map((dataPoint) => dataPoint.x).reverse() }]}
        height={300}
        
        sx={{ 
        '.MuiLineElement-root': {
          display: 'none',
        },
      }}
      />
      <div className="flex w-[80%]">
       saclkasc
      </div>
    </div>
  );
}

export default Charts;
