import PropTypes from "prop-types";
function BankInterestCard({
  interestRate,
  url,
  time,
  mevduat,
  period,
  duration,
}) {
  return (
    <div className="flex gap-8 w-full justify-between items-center p-4
    
    bg-slate-200 rounded-md mt-3  ">
      <img src={url} alt={url} />
      {interestRate &&
        interestRate
          .filter((rate) => rate.label === time)
          .map((bank) => (
            <section key={bank} className="flex w-full gap-4 justify-around ">
              <div className="text-center">
                <span className="text-[1.2rem] font-semibold text-slate-500"> Faiz Oranı</span>
                <h4 className="font-semibold"> % {bank.oran.toFixed(2)}</h4>
              </div>
              <div className="text-center">
              <span className="text-[1.2rem] font-semibold text-slate-500"> Net Getiri</span>
              <h4 className="font-semibold">
                  {(((bank.oran / 100) * 0.95 * mevduat * period * duration) /  100  ).toFixed(2)} TL
                </h4>
              </div>
              <div className="text-center">
              <span className="text-[1.2rem] font-semibold text-slate-500">Vade Sonu Ödeme </span>
              <h4 className="font-semibold">
                  {Number( ((bank.oran / 100) * 0.95 * mevduat * period * duration) /100 + Number(mevduat) ).toFixed(2)}  TL
                </h4>
              </div>
            </section>
          ))}
    </div>
  );
}

BankInterestCard.propTypes = {
  interestRate: PropTypes.array,
  url: PropTypes.string,
  time: PropTypes.string,
  mevduat: PropTypes.number,
  duration: PropTypes.number,
  period: PropTypes.string,
};

export default BankInterestCard;
