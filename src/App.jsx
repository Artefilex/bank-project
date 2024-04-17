import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {lazy ,Suspense } from "react"
const Home = lazy(() => import('./pages/Home'));
const CurrencyNews = lazy(() => import('./pages/CurrencyNews'));
const GoldNews = lazy(() => import('./pages/GoldNews'));
const EmtiaNews = lazy(() => import('./pages/EmtiaNews'));
const CyrptoNews = lazy(() => import('./pages/CyrptoNews'));
const ExchangeNews = lazy(() => import('./pages/ExchangeNews'));
const Credit = lazy(() => import('./pages/Credit'));
const Market = lazy(() => import('./pages/Market'));
const ErrorPage = lazy(() =>import("./pages/ErrorPage"))
import CurrencyNav from "./layouts/CurrencyNav";
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';
import Loading from "./components/LoadingPage";
function App() {
  return (
    <div className="flex items-center justify-start flex-col w-full h-full min-h-[100vh] ">
      <div className="flex items-center justify-start flex-col w-full max-w-[1280px]">
        <Router>
          <div className="fixed w-full flex items-center flex-col max-w-[1280px] bg-white z-50">
            <Navbar />
          </div>
          <div className="w-full flex items-center flex-col mt-[4rem] tablet:mt-[6rem]">
            <CurrencyNav />
            <Suspense fallback={<Loading />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/currency" element={<CurrencyNews />} />
                <Route path="/gold" element={<GoldNews />} />
                <Route path="/energy" element={<EmtiaNews />} />
                <Route path="/market" element={<Market />} />
                <Route path="/cyrpto" element={<CyrptoNews />} />
                <Route path="/exchange" element={<ExchangeNews />} />
                <Route path="/credit" element={<Credit />} />
                <Route path="*" element={<ErrorPage status={404} message={"Page is Not defined"} />} />
              </Routes>
            </Suspense>
          </div>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
