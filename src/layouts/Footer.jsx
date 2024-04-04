import { Link } from "react-router-dom";
import logo from "../assest/logo.png";

const Footer = () => {
  return (
    <footer className="flex w-full desktop:w-[90%] flex-col items-center mt-3 bg-[color:var(--bg-footer)] pt-4 ">
      <div className="flex items-center xmobile:items-start justify-between w-[90%] gap-4 flex-col  xmobile:flex-row">
        <Link to="/">
          {" "}
          <img src={logo} alt="logo" className="w-full max-w-[15rem] " />
        </Link>
        <div className="w-full max-w-[15rem]">
          <h2 className="text-xl font-bold text-slate-50">NEWS</h2>
          <nav className="flex flex-col text-gray-200 font-semibold gap-2 mt-2  ">
            <Link to="/currency">Currency</Link>
            <Link to="/gold"> Gold</Link>
            <Link to="/emtia"> Commodity</Link>
            <Link to="/cyrpto"> Cyrpto </Link>
            <Link to="/exchange"> Exchange</Link>
            <Link to="/credit"> FD Calculator</Link>
          </nav>
        </div>
        <div className="w-full max-w-[15rem]">
          <h2 className="text-xl font-bold text-slate-50">Contact US</h2>
          <nav className="flex flex-col gap-4 mt-2 text-gray-200 font-semibold ">
            <Link to="mailto:baris.tncdmr@gamil.com">
              {" "}
              baris.tncdmr@gamil.com{" "}
            </Link>
            <Link to="https://www.google.com/maps/place/Merve,+S%C4%B1dd%C4%B1k+Sk.+No:21,+34791+Sancaktepe%2F%C4%B0stanbul/@41.0051217,29.2396378,17z/data=!3m1!4b1!4m6!3m5!1s0x14cad1d0975bac89:0x2f5a8d3460400ecf!8m2!3d41.0051217!4d29.2396378!16s%2Fg%2F11c4k72c8y">
              {" "}
              Sıddık St.Merve, 34791 Sancaktepe/İstanbul
            </Link>
          </nav>
        </div>
      </div>
      <span className="mt-4 font-bold text-white pb-1 pt-4 ">
        ©2024 Privacy, Terms & Conditions of Use{" "}
      </span>
    </footer>
  );
};

export default Footer;
