import { useState } from "react";
import BankInterestCard from "../components/BankInterestCard";
import { allBank } from "../mockData/allbank";
const Credit = () => {
  const options = [
    { value: "0.274", label: "Gün" },
    { value: "8.2192", label: "Ay" },
    { value: "100", label: "Yıl" },
  ];
  const [mevduat, setMevduat] = useState("");
  const [period, setPeriod] = useState("");
  const [duration, setDuration] = useState("");
  const [time, setTime] = useState("Gün");

  const durationChange = (e) => {
    setDuration(e.target.value);
    setTime(options.find((option) => option.value === e.target.value).label);
  };

  const calculateCredit = (e) => {
    e.preventDefault();
    setMevduat("");
    setPeriod("");
    setDuration("");
  };

  return (
    <div className="flex flex-col w-[90%] items-center  justify-center">
    
      <form
        onSubmit={calculateCredit}
        className="flex mt-2 w-full p-4 gap-6 justify-between flex-col tablet:flex-row"
      >
        <div className="flex w-full flex-col gap-4 items-center justify-center tablet:flex-row tablet:gap-0 ">
          <div className="flex flex-col border-2 border-gray-400 rounded-md items-start tablet:border-r-0 gap-3 justify-start w-full tablet:rounded-tl-md tablet:rounded-bl-md tablet:rounded-tr-none tablet:rounded-br-none px-2">
            <label htmlFor="money" className="text-xl px-2 py-1 font-semibold">
              Mevduat Tutarı{" "}
            </label>
            <input
              id="money"
              name="money"
              value={mevduat}
              type="text"
              placeholder="Miktar Girin"
              className="border-none px-2 py-1 outline-none w-full"
              onChange={(e) => setMevduat(e.target.value)}
            />
          </div>
          <div className="flex w-full">
            <div className="flex flex-col border-2 border-gray-400 items-start gap-3 rounded justify-start w-full tablet:rounded-tr-none  rounded-tr-none rounded-br-none tablet:rounded-br-none px-2 tablet:rounded-tl-none tablet:rounded-bl-none ">
              <label
                htmlFor="period"
                className="text-xl px-2 py-1 font-semibold"
              >
                Vade{" "}
              </label>
              <input
                name="period"
                type="text"
                value={period}
                onChange={(e) => setPeriod(e.target.value)}
                className="border-none px-2 py-1 outline-none  w-full"
                placeholder="Süre Girin"
              />
            </div>
            <select
              className="w-full max-w-[5rem] flex items-center border-2 rounded-tr-md rounded-br-md border-l-0  border-gray-400  gap-1 justify-center text-xl font-semibold"
              name="vade"
              value={duration}
              onChange={durationChange}
            >
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button
          className="flex items-center justify-center bg-green-600 px-4 rounded text-white font-bold hover:bg-green-500 hover:text-slate-200 transition-colors  w-full tablet:max-w-[12rem] py-5 tablet:py-0 "
          type="submit"
        >
          Hesapla
        </button>
      </form>
      {allBank.map((banks, i) => (
        <BankInterestCard
          key={i}
          interestRate={banks.faizoran}
          url={banks.img}
          mevduat={mevduat}
          period={period}
          duration={duration}
          time={time}
        />
      ))}
    </div>
  );
};

export default Credit;
