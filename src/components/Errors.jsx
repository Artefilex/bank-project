import { BiError } from "react-icons/bi";
import PropTypes from "prop-types";
function Error({ message, status }) {
  return (
    <div className="flex gap-4 flex-col xtablet:flex-row min-h-[4rem] w-[90%]  bg-rose-500 items-center px-4 py-2 rounded ">
      <h2 className="flex items-center justify-between text-xl font-bold text-slate-50">
        <BiError size={70} /> {status}
      </h2>
      <h4 className="flex items-center justify-between text-xl font-bold text-slate-50">
        {message}
      </h4>
    </div>
  );
}

Error.propTypes = {
  message: PropTypes.string,
  status: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default Error;
