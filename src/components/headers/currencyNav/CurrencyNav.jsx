import React, { useEffect, useState, useRef } from 'react'
import "./currency.css"
import { useSelector } from "react-redux"
const CurrencyNav = () => {
  const currencyItems =  useSelector((state) => state.currency.items.rates);
  const [previousRates, setPreviousRates] = useState({})
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollMax, setScrollMax] = useState();
  const scrollRef = useRef(null);
 
 
  useEffect(()=>{
   
  })

  useEffect(() => {
    const interval = setInterval(() => {
       if (scrollRef.current) {
         scrollRef.current.scrollLeft = scrollPosition ;
         const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
         setScrollMax(scrollWidth - clientWidth );
      
        if ( scrollLeft  < scrollMax ) {
          setScrollPosition(scrollPosition => scrollPosition + 30);
         
        } else if ( scrollLeft >= scrollMax) {
          setScrollPosition(0);
       }
      }}, 1000);
    return () => clearInterval(interval);
  }, [scrollMax,scrollPosition]);
 
  


  useEffect(() => {
    setPreviousRates(currencyItems);
    const interval = setInterval(() => {
      setPreviousRates(currencyItems);
    }, 5000);
    return () => clearInterval(interval);
  }, [currencyItems]);


  useEffect(() => {
    setInterval(() => {
      setPreviousRates(currencyItems)
    }, [5000])

  })
   
  

  const commonKeys = Object.keys(previousRates).filter(key => currencyItems.hasOwnProperty(key))
  if (!currencyItems) {
    return <div>Loading...</div>
  }
  let Base = currencyItems.TRY
      return (
        <div className='Currency_Header'  
        ref={scrollRef}
        style={{
          overflowX: 'hidden',
          scrollBehavior: 'smooth',
          whiteSpace: 'nowrap',
          width: "98vw",
          scrollLeft: scrollPosition,
        }}
        onScroll={(event) => setScrollPosition(event.target.scrollLeft)}
        >

          {
          commonKeys.map(key => {
            const changesRate = ((previousRates[key] - currencyItems[key]) / previousRates[key] * 100).toFixed(3)
            const Rates = (Base / currencyItems[key]).toFixed(3)
           

            let changeColor = {}
            if (currencyItems[key] >= previousRates[key]) {
              changeColor.color = "green"
            } else {
              changeColor.color = "red"
            }
            return (
              <div key={key}>
                <div className='Currency_Header-item'>
                  <div className='Currency_Header-item_left'>
                    <h5>{key}/TRY </h5>
                    <span style={changeColor}> % {changesRate}</span>
                  </div>
                  <h3>{Rates}</h3>
                </div>
              </div>
            )
          })
        }
        </div>
      )
  }

export default CurrencyNav