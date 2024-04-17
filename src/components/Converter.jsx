import axios from "axios";
import { useEffect, useState } from "react";
import Dropdown from "./Dropdown";
import PropTypes from "prop-types";
import { CgClose } from "react-icons/cg";
import { IoIosArrowRoundForward } from "react-icons/io";
const Converter = ({ setConverterShow }) => {
  const [currency, setCurrency] = useState(null);
  const [form, setForm] = useState({
    firstInput: "",
    secondInput: "1",
    firstOption: "TRY",
    secondOption: "USD",
  });
  const [flags, setFlags] = useState({});

  useEffect(() => {
    const fetchCurrenciesAndFlags = async () => {
      try {
        const { data } = await axios.get("https://restcountries.com/v3.1/all");
        const currenciesDictionary = {};
        data.forEach((country) => {
          Object.keys(country.currencies || {}).forEach((currencyCode) => {
            if (!currenciesDictionary[currencyCode]) {
              currenciesDictionary[currencyCode] = {
                flagUrl: country.flags.svg, // Bayrak URL'si
                currencyName: country.currencies[currencyCode].name, // Para biriminin adı
                currencySymbol: country.currencies[currencyCode].symbol, // Para biriminin sembolü
              };
            }
          });
        });
        setFlags(currenciesDictionary);
      } catch (error) {
        console.error("Error fetching currency and flag data:", error);
      }
    };

    fetchCurrenciesAndFlags();
  }, []);
  useEffect(() => {
    const fetchCurrency = async () => {
      const { data } = await axios.get("https://open.er-api.com/v6/latest/USD");

      setCurrency(data.rates);
    };
    fetchCurrency();
  }, []);
  useEffect(() => {
    if (!currency) return;

    const rate = currency[form.secondOption];
    const rate2 = currency[form.firstOption] * (Number(form.secondInput) || 0);
    const convert = rate2 / (rate || 1);

    const convertedValue = convert.toFixed(4);

    setForm((prevState) => ({
      ...prevState,
      firstInput: convertedValue,
    }));
  }, [currency, form.firstOption, form.secondInput, form.secondOption]);
  const handelChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <div className="flex flex-col items-center w-full justify-around max-w-[25rem] min-h-[20rem] tablet:w-[90%] gap-4 bg-slate-50 mobile:rounded-md border-2 border-slate-500 px-4 relative ">
      {flags && (
        <div className="w-[90%]">
          <button
            className="absolute top-2 right-2  mobile:-right-2 border-none outline-none mobile:-top-2 bg-red-700 rounded-full p-1"
            onClick={() => setConverterShow(false)}
          >
            <CgClose className="text-red-200" size={20} />
          </button>
          <h1 className="text-2xl mobile:text-3xl font-semibold w-full text-center text-blue-950  mt-2  ">
            Curreny Converter
          </h1>
          <div className="text-slate-500  mobile:text-xl mb-2 font-semibold mt-4 ">
            {form.secondInput} {flags[form.secondOption]?.currencyName} equal
          </div>
          <div className="text-slate-900 text-xl mobile:text-2xl font-bold ">
            {Number(form.firstInput).toFixed(2)}
            {flags[form.firstOption]?.currencyName}
          </div>
        </div>
      )}

      {currency && (
        <form className="flex flex-col items-center w-full justify-between  tablet:w-[90%] gap-4 ">
          <div className="flex flex-row  max-w-[50rem] w-full justify-between items-center gap-2">
            <Dropdown
              options={Object.keys(currency).map((item) => ({
                value: item,
                label: item,
                flag: flags[item] || "",
              }))}
              value={form.secondOption}
              onChange={handelChange}
              name="secondOption"
            />
            <IoIosArrowRoundForward size={40} />
            <Dropdown
              options={Object.keys(currency).map((item) => ({
                value: item,
                label: item,
                flag: flags[item] || "",
              }))}
              value={form.firstOption}
              onChange={handelChange}
              name="firstOption"
            />
          </div>

          <input
            className="border-2 border-gray-200 outline-none w-full px-2 py-2 mb-5 max-w-[50rem]  bg-gray-300 font-semibold"
            name="secondInput"
            type="text"
            value={form.secondInput}
            onChange={handelChange}
          />
        </form>
      )}
    </div>
  );
};

Converter.propTypes = {
  setConverterShow: PropTypes.func,
};

export default Converter;
