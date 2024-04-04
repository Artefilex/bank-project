import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import axios from "axios";
import { LineChart } from "@mui/x-charts/LineChart";
function Charts() {
  const { debaunce, data: result } = useSelector((state) => state.searchItem);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `https://api.polygon.io/v1/indicators/sma/AAPL?timespan=day&adjusted=true&window=50&series_type=close&order=desc&apiKey=${import.meta.env.VITE_EXCHANGE_API}`
      );
      if (data.results && data.results.values) {
        const formattedData = data.results.values.map((item) => {
          const date = new Date(item.timestamp);
          const formattedDate = `${date.getFullYear()}-${String(
            date.getMonth() + 1
          ).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
          const value = isNaN(item.value) ? 0 : item.value
          return { x: formattedDate, y: value };
        });
        setChartData(formattedData);
      }
    };

    fetchData();
    const intervalData = setInterval(fetchData, 60 * 1000);
    return () => clearInterval(intervalData);
  }, []);
  const yAxisData = chartData?.map((dataPoint) => dataPoint.y);
  const xAxisData = chartData?.map((dataPoint) => dataPoint.x);

  // series data preparation
//   const seriesData = [];
  console.log(chartData)
  return (
    <div>
      sss
      <LineChart
        xAxis={[{ data: xAxisData }]}
       
        series={[{data:chartData}]}
        width={500}
        height={300}
      />
    </div>
  );
}

export default Charts;
