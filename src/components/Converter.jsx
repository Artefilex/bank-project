import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "./LoadingPage";
import { FaArrowRight } from "react-icons/fa";
import Dropdown from "./Dropdown";
const Converter = () => {
  const [currency, setCurrency] = useState(null);
  const [form, setForm] = useState({
    firstInput: "",
    secondInput: "1",
    firstOption: "TRY",
    secondOption: "AUD",
  });
  const [flags, setFlags] = useState({});

  useEffect(() => {
    const fetchCurrenciesAndFlags = async () => {
      try {
        const { data } = await axios.get('https://restcountries.com/v3.1/all');
        const currenciesDictionary = {};
        data.forEach(country => {
          Object.keys(country.currencies || {}).forEach(currencyCode => {
            if (!currenciesDictionary[currencyCode]) {
              currenciesDictionary[currencyCode] = {
                flagUrl: country.flags.svg,  // Bayrak URL'si
                currencyName: country.currencies[currencyCode].name,  // Para biriminin adı
                currencySymbol: country.currencies[currencyCode].symbol  // Para biriminin sembolü
              };
            }
          });
        });
        setFlags(currenciesDictionary);
      } catch (error) {
        console.error('Error fetching currency and flag data:', error);
      }
    };

    fetchCurrenciesAndFlags();
  }, []);
   console.log(flags)
  useEffect(() => {
    const fetchCurrency = async () => {
      const { data } = await axios.get("https://open.er-api.com/v6/latest/TRY");

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
  const handelSubmit = (e) => {
    e.preventDefault();
  };
  if (!currency) {
    return <Loading />;
  }

  return (
    <form
      onSubmit={handelSubmit}
      className="flex flex-col items-center w-full justify-between  tablet:w-[90%] gap-4 "
    >
      <div className="flex flex-row max-w w-[20rem] justify-between items-center ">
      <Dropdown
          options={Object.keys(currency).map((item) => ({
          value: item,
          label: item,
         flag: flags[item] || ''
  }))}
  value={form.secondOption}
  onChange={handelChange}
  name="secondOption"
        currencieValue={form.secondInput}
/>  
<FaArrowRight size={30} />
        <Dropdown
         options={Object.keys(currency).map((item) => ({
        value: item,
        label: item,
        flag: flags[item] || ''
  }))}
  value={form.firstOption}
  onChange={handelChange}
  name="firstOption"
  currencieValue={Number(form.firstInput).toFixed(2)}
/>
       

      </div>
      <div className="flex flex-row max-w w-[20rem] justify-between items-center gap-5 ">
        <input
          className="border-2 border-slate-900 outline-none w-full px-2 py-2"
          name="secondInput"
          type="text"
          value={form.secondInput}
          onChange={handelChange}
        />
        <input
          type="text"
          name="firstInput"
          value={form.firstInput}
          onChange={handelChange}
          className="border-2 border-slate-900 outline-none w-full px-2 py-2"
        />
      </div>
    </form>
  );
};
export default Converter;
