
import { CryptoNews, GoldNews, EmtiaNews, CurrencyNews, ExchangeNews ,Converter} from "../NavigationComponent/index"
import "./main.css"
import { useSelector } from "react-redux";
const MainPage = () => {
  const currency =  useSelector((state) => state.currency.items.rates);
  return (
    <div className='MainPage'>
    {
      currency && <Converter/>
    }
  
  <div className="MainPage_Content">
  <div className="MainPage_News">
      <h2>Haberler</h2>
    <EmtiaNews />
      <CurrencyNews />
      <GoldNews />
      <ExchangeNews />
      <CryptoNews />
    </div>
  </div>
   
    </div>
  )
}

export default MainPage