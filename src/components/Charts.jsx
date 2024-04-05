import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import axios from "axios";
import { LineChart } from "@mui/x-charts/LineChart";
import { data } from "autoprefixer";
function Charts() {
  const search = useSelector((state) => state.searchItem.search);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchData = async () => { 
      const { data } = await axios.get(
        `https://api.polygon.io/v1/indicators/sma/${search ? search?.debaunce:"AAPL"}?timespan=day&adjusted=true&window=50&series_type=close&order=desc&apiKey=${import.meta.env.VITE_EXCHANGE_API}`
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
    const intervalData = setInterval(fetchData,60 * 60 * 1000);
    return () => clearInterval(intervalData);
  }, [search]);

  const yAxisData = chartData?.reduce((acc, curr) => acc + curr.y, 0);



  return (
    <div className="px-4">
      <LineChart
      
        yAxis={[{ min: Number( yAxisData / chartData.length) - 5 }]}
        series={[{ data: chartData?.map((dataPoint) =>Number(dataPoint.y).toFixed(4)), label: search?.debaunce, area: true, showMark: false }]}
        xAxis={[{ scaleType: 'point', data: chartData?.map((dataPoint) => dataPoint.x).reverse() }]}
        width={500}
        height={300}
        sx={{ 
        '.MuiLineElement-root': {
          display: 'none',
        },
      }}
      />
    </div>
  );
}

export default Charts;
