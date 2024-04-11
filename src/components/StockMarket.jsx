
import PropTypes from "prop-types";
import { BiUpArrowAlt , BiDownArrowAlt } from "react-icons/bi";
import ListItem from "./ListItem";
function StockMarket({ close, high, low, open, volume, volumeWeight, title }) {
  return (
    <section className="flex w-[90%] justify-start gap-4 items-center flex-row">
      <header className="w-full max-w-[15rem]">
        <h2 className="text-[2rem] font-bold text-slate-950">{title}</h2>
        <h4 className="flex text-xl  gap-1 font-semibold text-slate-400 flex-col tablet:flex-row tablet:items-center"> Volume  <span className="text-lg text-slate-800">{volume}</span> </h4>
        <h4 className=" flex text-xl gap-1 font-semibold text-slate-400 flex-col tablet:flex-row  tablet:items-center"> <span > Volume Weight </span>
          <span className="text-lg text-slate-800">{volumeWeight}</span> </h4>
      </header>

     <div className="flex w-full flex-col items-center tablet:flex-row">
     <ul className="flex justify-around items-center w-full gap-4 text-xl font-semibold  ">
      <ListItem title="Open" value={open} />
      <ListItem title="Close" value={close} />
      </ul>
      <ul className="flex justify-around items-center w-full gap-4 text-xl font-semibold ">
      <ListItem title="High" value={high} />
      <ListItem title="Low" value={low} />
      </ul>
     </div>
     <div className="flex items-center">
     {
      open - close > 0 ? (<div> 
        <BiUpArrowAlt size={50} className="text-green-600" />
       <span className="flex w-[5rem] gap-1 font-semibold" > {Math.abs(Number(( (close - open )/ open) * 100 ).toFixed(4))} <div>%</div> </span>
      </div>) : open -close === 0 ? "" :(<div> 
        <BiDownArrowAlt   size={50} className="text-red-600"/>
        <span className="flex w-[5rem] gap-1 font-semibold" > {Math.abs(Number(( (close - open )/ open) * 100 ).toFixed(4))} <div>%</div> </span>
      </div>) 
     }
   </div>
    </section>
  );
}

StockMarket.propTypes = {
  close: PropTypes.number,
  high: PropTypes.number,
  low: PropTypes.number,
  open: PropTypes.number,
  volume: PropTypes.number,
  volumeWeight: PropTypes.number,
  title: PropTypes.string,
};
export default StockMarket;
