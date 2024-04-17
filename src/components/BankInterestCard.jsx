import PropTypes from "prop-types";
function BankInterestCard({
  url,
  mevduat,
  centralBank,
  ratePct,
  rate,
  rateSymbol
}) {
  return (
    <div className="flex flex-col items-center justify-between w-full gap-8 p-4 mt-3 rounded-md bg-slate-200 tablet:flex-row ">
       
           <div className="w-full max-w-[12rem] max-h-[12rem] h-[12rem] flex items-center justify-center ">
           <img src={url} alt={rateSymbol}  className={`w-full  ${centralBank === "Mexican Central Bank" ? "bg-black/80" : "" }`}  />
           </div>
     
            <section  className="flex flex-col justify-around w-full gap-4 xmobile:flex-row ">
              <div className="text-center">
                <span className="text-[1.2rem] font-semibold text-slate-600"> Interest Rate</span>
                <h4 className="font-semibold"> % {ratePct.toFixed(2)}</h4>
              </div>
              <div className="text-center">
              <div className="flex flex-col items-center justify-center">
              <span className="text-[1.2rem] font-semibold text-slate-600"> Net Return</span>
              <span className="text-[1.2rem] font-semibold text-slate-600"> ({ rateSymbol}) </span>
              </div>
              <h4 className="font-semibold">
                  {((ratePct / 100) * mevduat * rate).toFixed(2)} 
                </h4>
              </div>
              <div className="text-center">
            <div className="flex flex-col items-center justify-center">
             <span className="text-[1.2rem] font-semibold text-slate-600">Payment at Maturity</span>
              <span className="text-[1.2rem] font-semibold text-slate-600"> ({ rateSymbol}) </span>
            </div>
              <h4 className="font-semibold">
                  {Number( (((ratePct / 100)  * mevduat) + Number(mevduat) ) * rate ).toFixed(2)} 
                </h4>
              </div>
            </section>
         
    </div>
  );
}

BankInterestCard.propTypes = {
  url: PropTypes.string,
  mevduat: PropTypes.string,
  centralBank: PropTypes.string,
  ratePct: PropTypes.number,
  rate:  PropTypes.number,
  rateSymbol: PropTypes.string,
};

export default BankInterestCard;
