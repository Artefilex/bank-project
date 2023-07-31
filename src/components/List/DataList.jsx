
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {addCurrency} from "../../reducers/CurrencySlice";

const DataList = () => {

 const dispatch = useDispatch()
 
 const myHeaders = new Headers()
 myHeaders.append("apikey", `${process.env.REACT_APP_API_URL}`)

  const requestOptions = {
    method: 'GET',
  redirect: 'follow',
  headers: myHeaders
  }

  useEffect(() => {
   data()
    const intervalData = setInterval(() => {
      data()
    }, 60 * 60 * 1000)
    return clearInterval(intervalData)
  })

   const data = async () => {
    const response = await fetch("https://api.apilayer.com/exchangerates_data/latest?base=TRY", requestOptions)
    const result = await response.json()
    dispatch(addCurrency(result)) 
  }




  return (
    <div>

    </div>
  )
}

export default DataList