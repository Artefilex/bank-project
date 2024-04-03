import { BrowserRouter as Router ,  Routes ,Route} from "react-router-dom";
import Home from "./pages/Home";
import CurrencyNews from "./pages/CurrencyNews"
import GoldNews from "./pages/GoldNews"
import EmtiaNews from "./pages/EmtiaNews"
import CyrptoNews from "./pages/CyrptoNews"
import ExchangeNews from "./pages/ExchangeNews"
import NewsLinks from "./pages/NewsLinks"
function App() {
  return (
    <div className="flex items-center justify-center flex-col w-full h-full min-h-[100vh]">
      <Router>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/currency" element={<CurrencyNews />} />
          <Route path="/gold" element={<GoldNews />} />
          <Route path="/emtia" element={<EmtiaNews />} />
          <Route path="/cyrpto" element={<CyrptoNews />} />
          <Route path="/exchange" element={<ExchangeNews />} />
          {/* <Route path="/news" element={<NewsList />} /> */}
          {/* <Route path="/credit" element={<Credit />}></Route> */}
          <Route path="/:title" element={<NewsLinks />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
