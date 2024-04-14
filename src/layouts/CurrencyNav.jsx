import axios from "axios"
import { useEffect, useRef, useState   } from "react"

const CurrencyNav = () => {
  const [currencys , setCurrency] = useState(null)

  useEffect(()=>{
   const fetchCurrency = async () =>{
    const {data} = await axios.get("https://open.er-api.com/v6/latest/USD")
  
     setCurrency(data)
  }
   fetchCurrency()
   
  },[currencys?.time_last_update_unix])
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollMax, setScrollMax] = useState(null);
  const scrollRef = useRef(null);
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft = scrollPosition;
        const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
        const newScrollMax = scrollWidth - clientWidth;
        if (scrollMax === null || newScrollMax !== scrollMax) {
          setScrollMax(newScrollMax);
        }
      
        if (scrollLeft < newScrollMax) {
          setScrollPosition(scrollPosition => scrollPosition + 120);
        } else if (scrollLeft >= newScrollMax) {
          setScrollPosition(0);
        }
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [scrollPosition]); 

    return(<div    
      ref={scrollRef}
      className={`flex gap-2 overflow-x-hidden overflow-y-[${scrollPosition}] w-[95%] tablet:w-[90%] whitespace-nowrap scroll-smooth  mb-2`}
      onScroll={(event) => setScrollPosition(event.target.scrollLeft)}>
       {currencys && Object.entries(currencys?.rates).filter(([key]) => key !== "USD").map(([key, value]) => (
      <div className="flex flex-row " key={key}>
       <span className="text-[0.7rem] font-bold px-2 text-gray-700"> {key}/USD</span>  <span className="font-semibold text-gray-900"> {Number(value).toFixed(2)}$</span>
      </div>
    ))}
    </div>  )
  }

export default CurrencyNav