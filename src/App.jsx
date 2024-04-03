import { BrowserRouter as Router ,  Routes ,Route} from "react-router-dom";
import Home from "./pages/Home";
import CurrencyNews from "./pages/CurrencyNews"
import GoldNews from "./pages/GoldNews"
import EmtiaNews from "./pages/EmtiaNews"
import CyrptoNews from "./pages/CyrptoNews"
import ExchangeNews from "./pages/ExchangeNews"
import Credit from "./pages/Credit";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer"
function App() {
  return (
    <div className="flex items-center justify-start flex-col w-full h-full min-h-[100vh] ">
    <div className="flex items-center justify-start flex-col w-full max-w-[1280px]">
    <Router>
      <Navbar/>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/currency" element={<CurrencyNews />} />
          <Route path="/gold" element={<GoldNews />} />
          <Route path="/emtia" element={<EmtiaNews />} />
          <Route path="/cyrpto" element={<CyrptoNews />} />
          <Route path="/exchange" element={<ExchangeNews />} />
          <Route path="/credit" element={<Credit />}></Route>
 
        </Routes>
        <Footer/>
      </Router>

    </div>
    </div>
  );
}

export default App;
