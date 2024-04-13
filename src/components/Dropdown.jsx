import { useState } from 'react';
import PropTypes from "prop-types"
const Dropdown = ({ options, value, onChange, name }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (val) => {
    onChange({ target: { name, value: val } });  // Bu şekilde bir event objesi yaratıyoruz.
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <div
        className="px-2 w-[8rem] h-10 bg-gray-200 font-bold text-slate-800 flex items-center justify-between cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {value }
       
      </div>
      {isOpen && (
        <ul className="absolute z-10 w-full bg-gray-200 border mt-1 max-h-60 overflow-auto">
          {options.map((option, key) => (
            <li
              key={key}
              className="px-2 py-1 hover:bg-gray-300 flex items-center cursor-pointer"
              onClick={() => handleSelect(option.value)}
            >
              <img src={option.flag} alt={option.label} style={{ width: 20, height: 14, marginRight: 8 }} />
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
  
    name: PropTypes.string

}
export default Dropdown