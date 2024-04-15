import { useEffect, useState } from "react";
import BankInterestCard from "../components/BankInterestCard";
import { BankData } from "../mockData/BankData";
import { useGetInterestRateQuery } from "../reducers/InterestRateApi";
import Error from "../components/Errors";
import Loading from "../components/LoadingPage";
import axios from "axios";
const Credit = () => {
  const [mevduat, setMevduat] = useState("");
  const [currency ,setCurrency] = useState(null)
  const { data, error, isLoading } = useGetInterestRateQuery();
  const calculateCredit = (e) => {
    e.preventDefault();
    setMevduat("");
  };
  useEffect(() => {
    const fetchCurrency = async () => {
      const { data } = await axios.get("https://open.er-api.com/v6/latest/USD");

      setCurrency(data.rates);
    };
    fetchCurrency();
  }, []);


  if (error) return <Error status={error.status} message={error.message} />;
  if (isLoading) return <Loading />;
  return (
    <div className="flex flex-col w-[90%] items-center  justify-center">  
      <form
        onSubmit={calculateCredit}
        className="flex mt-2 w-full p-4 gap-6 justify-between flex-col tablet:flex-row"
      >
        <div className="flex w-full flex-col gap-4 items-center justify-center tablet:flex-row tablet:gap-0 ">
          <div className="flex flex-col border-2 border-gray-400 rounded-md items-start gap-3 justify-start w-full tablet:rounded-tl-md tablet:rounded-bl-md  px-2">
            <label htmlFor="money" className="text-xl px-2 py-1 font-semibold">
             Deposit
            </label>
            <input
              id="money"
              name="money"
              value={mevduat}
              type="text"
              placeholder="Deposit amount $"
              className="border-none px-2 py-1 outline-none w-full"
              onChange={(e) => setMevduat(e.target.value)}
            />
          </div>
        
        </div>

        <button
          className="flex items-center justify-center bg-green-600 px-4 rounded text-white font-bold hover:bg-green-500 hover:text-slate-200 transition-colors  w-full tablet:max-w-[12rem] py-5 tablet:py-0 "
          type="submit"
        >
          Calculate
        </button>
      </form>

      {data && data.central_bank_rates.map((bank) => {
        const matchingBank = BankData.find(item => item.bankName === bank.central_bank);
      
        if (matchingBank) {
          return (
            <BankInterestCard
              key={matchingBank.bankName}
              centralBank={matchingBank.bankName}
              ratePct={bank.rate_pct}
              url={matchingBank.img}
              mevduat={mevduat}
               rate = {currency[matchingBank.rate]}
               rateSymbol = {matchingBank.rateSymbol}
            />
          );
        }
        return null;
      })}
  
    </div>
  );
};

export default Credit;
