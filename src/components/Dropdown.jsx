import { useState } from 'react';
import PropTypes from "prop-types"
const Dropdown = ({ options, value, onChange, name, currencieValue }) => {
  const [isOpen, setIsOpen] = useState(false);
const [filter , setFilter] = useState(value)
  const handleSelect = (val) => {
    onChange({ target: { name, value: val } });  
    setIsOpen(false);
  };
  const filteredOptions = options.filter(option =>
    option.label.toLowerCase().includes(filter.toLowerCase())
  );
  const filterCountryName = filteredOptions.filter((country) => country.value === filter  )

  console.log(filterCountryName)
  return (
    <div className="relative">
      {filterCountryName &&  filterCountryName.map((country) => (<div key={country.label}>  {currencieValue} {country.flag.currencySymbol}  {country.flag?.currencyName}</div>)) }
      <div
        className="px-2 w-[8rem] h-10 bg-gray-200 font-bold text-slate-800 flex items-center justify-between cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
       <input className='w-full border-none outline-none bg-transparent' type="text" value={filter } onChange={(e) => {setFilter(e.target.value) ; setIsOpen(true)} }/>
       
      </div>
      {isOpen && (
        <ul className="absolute z-10 w-full bg-gray-200 border mt-1 max-h-60 overflow-auto">
          {filteredOptions.map((option, key) => (
            <li
              key={key}
              className="px-2 py-1 hover:bg-gray-300 flex items-center cursor-pointer"
              onClick={() => {
                handleSelect(option.value);
                setFilter(option.value)
              }}
            >
              <img src={option.flag.flagUrl} alt={option.label} style={{ width: 20, height: 14, marginRight: 8 }} />
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

Dropdown.propTypes = {
    options : PropTypes.array,
    value: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func,
    currencieValue: PropTypes.number,
    name: PropTypes.string

}
export default Dropdown