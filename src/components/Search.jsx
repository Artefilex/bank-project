import { useState } from "react";
import useDebounce from "../hooks/useDebounce";
import { popularStocks } from "../mockData/popularStocks";
import { IoMdSearch } from "react-icons/io";
import { FaCircleArrowDown, FaCircleArrowUp } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { searchSMA } from "../reducers/SearchSlice";
function Search() {
  const dispatch = useDispatch();
  const [showStock, setShowStock] = useState(false);
  const [search, setSearch] = useState("");
  const debouncedValue = useDebounce(search, 500);
  const debouncedUpperCase = debouncedValue.toUpperCase().trim();
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(searchSMA(debouncedUpperCase));
    setSearch("");
  };
  return (
   <div  className="flex gap-4 items-center justify-between relative w-[90%] mb-20 ">
     <form
      onSubmit={handleSubmit}
      className="flex gap-4 items-center justify-between fixed w-[75%] pt-8  "
    >
      <div className="flex items-center gap-2 flex-col w-[90%] bg-white">
        <div className="border-2  border-black px-4 py-4 rounded w-full flex items-center justify-between">
          <input
            className="border-none outline-none w-[90%]"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="... Search Stock"
          />
          <button
            className="text-slate-900 w-[7rem] flex items-center justify-end"
            onClick={() => setShowStock(!showStock)}
          >
            {" "}
            {showStock ? <FaCircleArrowUp /> : <FaCircleArrowDown />}
          </button>
        </div>
        {showStock && (
          <div className="w-full max-w-[17rem] max-h-[15rem] flex gap-2 flex-col  font-semibold overflow-auto absolute right-[6.7rem] top-14 bg-slate-600 text-slate-50 p-2 ">
            {popularStocks.map((stock) => (
              <div
                className="cursor-pointer hover:bg-slate-500 hover:text-slate-50 px-2 py-2 transition-all duration-200"
                key={stock.label}
                onClick={() => {
                  setSearch(stock.value);
                  setShowStock(false);
                }}
              >
                {" "}
                {stock.label}{" "}
              </div>
            ))}
          </div>
        )}
      </div>
      <button type="submit" className=" text-slate-800">
        <IoMdSearch size={40} />{" "}
      </button>
    </form>
   </div>
  );
}

export default Search;
