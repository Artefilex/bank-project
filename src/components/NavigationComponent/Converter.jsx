import React, { useEffect, useState } from 'react'

import { useSelector } from 'react-redux'
const Converter = () => {
  const currency = useSelector(state => state.currency.items.rates)
   const [firstInput ,setFirstInput] = useState("") 
   const [ secondInput, setSecondInput] = useState("1")
   const [firstOption , setFirstOption] = useState("TRY") 
   const [secondOption, setSecondOption] = useState("USD")

   const firstChange = e => setFirstInput(e.target.value)
   const secondChange = e =>setSecondInput( e.target.value)
   const baseChange = e =>setFirstOption(e.target.value)
   const exchangeChange = e => setSecondOption(e.target.value)

   useEffect(()=>{
   
      const rate = currency[secondOption] ;
      const rate2 = currency[firstOption] * secondInput
      const convert =  rate2  / rate
      const convertedValue = (convert).toFixed(2);
      setFirstInput( convertedValue );
    
   
   },[currency,secondOption,firstOption,secondInput ,firstInput])   
  
  
   if (!currency) {
    return <div>Loading...</div>
  }

  return (
 
  
        <form className='Currency_converter'>
      <div className='Currency_converter-container'>
      <select value={secondOption} className="categorys" onChange={exchangeChange}>
         {Object.keys(currency).filter(item => item !== "TRY").map((items, key) =>(
         <option key={key} value={items} defaultChecked> {items}</option>))}
       </select>
       <input type="text" value={secondInput} onChange={secondChange} />
      
     </div>
     <div className='Currency_converter-container'>
      
       <input type="text" value={firstInput} onChange={firstChange}  />
       <select className="categorys" value={firstOption} onChange={baseChange}>
         {Object.keys(currency).map((item, key) =>
           <option key={key} value={item}> {item} </option>)}
       </select>
     </div>
    
   </form>
    
 

   
  )
}
export default Converter