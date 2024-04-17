import PropTypes from "prop-types";
import { BiUpArrowAlt, BiDownArrowAlt } from "react-icons/bi";
import ListItem from "./ListItem";
function StockMarket({ title, companySymbol, netchange, pctchange, lastSale }) {
  return (
    <section className="flex w-[90%] justify-start gap-4 items-center flex-col">
      <header className="w-full flex flex-col  gap-2  tablet:flex-row  tablet:items-center">
        <h2 className="text-xl font-bold text-slate-950">{companySymbol}</h2>
        <h4 className="flex text-xl gap-1 font-semibold text-slate-400 flex-col tablet:flex-row tablet:items-center">
          ({title} )
        </h4>
      </header>

      
        <ul className="flex justify-between items-center w-full gap-4 text-xl font-semibold  ">
          <ListItem title="Net Change" value={netchange} />
          <ListItem title="Percent Change" value={pctchange} />
          <ListItem title="Last Sale" value={lastSale} />
          <div className="flex items-center">
          {  Number(netchange) > 0 ? (
            <div>       
              <BiUpArrowAlt size={50} className="text-green-600" />
              <span className="flex w-[5rem] gap-1 font-semibold">       
                {Number(netchange)} <div>%</div>
              </span>
            </div>
          ) : Number(netchange) === 0 ? (
            <div className="w-[5rem]" />
          ) : (
            <div>
              <BiDownArrowAlt size={50} className="text-red-600" />
              <span className="flex w-[5rem] gap-1 font-semibold">   
             
                {Number(netchange)}
                <div>%</div>
              </span>
            </div>
          )}
        </div>
        </ul>
  
    </section>
  );
}

StockMarket.propTypes = {
  companySymbol: PropTypes.string,
  netchange: PropTypes.string,
  pctchange: PropTypes.string,
  lastSale: PropTypes.string,
  title: PropTypes.string,
};
export default StockMarket;
