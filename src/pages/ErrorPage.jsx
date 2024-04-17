import { Link } from "react-router-dom";
import ErrorPages from "../assest/error.svg";
function ErrorPage() {
  return (
    <div className="w-full  flex items-center justify-start flex-col">
      <div className="text-4xl font-bold text-gray-700"> Page Not Found </div>
      <img src={ErrorPages} alt={"error"} className="max-h-[25rem]" />
      <Link
        to="/"
        className="text-2xl font-bold bg-gray-800 text-slate-50 px-8 py-4 rounded-lg active:translate-y-1 hover:bg-gray-700 transition-all duration-200"
      >
        Back To Home
      </Link>
    </div>
  );
}

export default ErrorPage;
