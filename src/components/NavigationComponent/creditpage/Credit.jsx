import { useState } from 'react'
import "./credit.css"

const Credit = () => {
  const options = [
    { value: "0.274", label: "Gün" },
    { value: "8.2192", label: "Ay" },
    { value: "100", label: "Yıl" }
  ]

  const [mevduat, setMevduat] = useState("")
  const [period, setPeriod] = useState("")
  const [duration, setDuration] = useState("1")
  const [time, setTime] = useState("Gün")
  const allBank = [{
    "id": 1,
    "bankName": "Odeabank Enuygun’a Özel Odeabank Oksijen Dinamik Hesap",
    "faizoran": [
      { "label": "Gün", "oran": 25.00 },
      { "label": "Ay", "oran": 25.00 },
      { "label": "Yıl", "oran": 22.50 }

    ]
  },
  {
    "img": "https://cdn2.enuygun.com/img/finance/uploads/logo_odeabank_981c25c8e4.png",
    "brüt": "1",
    "net": "0.95",
    "faiz": "0.05"
  },
  {
    "id": 2,
    "bankName": "ON Dijital E-Mevduat ON",
    "faizoran": [
      { "label": "Gün", "oran": 10.00 },
      { "label": "Ay", "oran": 18.75 },
      { "label": "Yıl", "oran": 27.00 }

    ],
    "img": "https://cdn2.enuygun.com/img/finance/uploads/ON_127a9d2631.png",
    "brüt": "1",
    "net": "0.95",
    "faiz": "0.05"
  },
  {
    "id": 3,
    "bankName": "Alternatif Bank e – Mevduat",
    "faizoran": [
      { "label": "Gün", "oran": 29.00 },
      { "label": "Ay", "oran": 29.00 },
      { "label": "Yıl", "oran": 29.00 }

    ],
    "img": "https://cdn2.enuygun.com/img/finance/uploads/logo_alternatifbank_ddd930f269.png",
    "brüt": "1",
    "net": "0.95",
    "faiz": "0.05"
  },
  {
    "id": 4,
    "bankName": "ING e-Turuncu Hesap  ",
    "faizoran": [
      { "label": "Gün", "oran": 27.00 },
      { "label": "Ay", "oran": 27.00 },
      { "label": "Yıl", "oran": 0 }
    ],
    "img": "https://cdn2.enuygun.com/img/finance/uploads/logo_ing_52e54fb1a3.png",
    "brüt": "1",
    "net": "0.95",
    "faiz": "0.05"

  },
  {
    "id": 5,
    "bankName": "Fibabanka Kiraz Hesap   ",
    "faizoran": [
      { "label": "Gün", "oran": 27.00 },
      { "label": "Ay", "oran": 27.00 },
      { "label": "Yıl", "oran": 27.00 }

    ],
    "img": "https://cdn2.enuygun.com/img/finance/uploads/logo_fibabanka_824ead55e2.png",
    "brüt": "1",
    "net": "0.95",
    "faiz": "0.05"

  },
  {
    "id": 6,
    "bankName": "Akbank Direkt Vadeli Hesap ",
    "faizoran": [
      { "label": "Gün", "oran": 0 },
      { "label": "Ay", "oran": 24.00 },
      { "label": "Yıl", "oran": 15.00 }

    ],
    "img": "https://cdn2.enuygun.com/img/finance/uploads/logo_akbank_83bb615f39.png",
    "brüt": "1",
    "net": "0.95",
    "faiz": "0.05"

  },
  {
    "id": 7,
    "bankName": "Türkiye İş Bankası Şubesiz Vadeli Mevduat  ",
    "faizoran": [
      { "label": "Gün", "oran": 27.00 },
      { "label": "Ay", "oran": 16.50 },
      { "label": "Yıl", "oran": 11.75 }

    ],
    "img": "https://cdn2.enuygun.com/img/finance/uploads/logo_turkiyeisbankasi_9a149e23d8.png",
    "brüt": "1",
    "net": "0.95",
    "faiz": "0.05"
  }]



  const changed = (e) => setMevduat(e.target.value)
  const changedPeriod = (e) => setPeriod(e.target.value)
  const durationChange = (e) => {
    setDuration(e.target.value)
    setTime((options.find(option => option.value === e.target.value).label))
  }
  // const filteredData = allBank.filter(item => item.faizoran && item.faizoran.length > 0)
  //   .map(item => item.faizoran.filter(items => items.label === time))

  
  const calculateCredit = (e) => {
    e.preventDefault()


    console.log(18.75 / 100 * mevduat * period * duration / 100)
    setMevduat("")
    setPeriod("")
    setDuration("")

  }

  return (
    <div>
      <form onSubmit={calculateCredit}>
        <label htmlFor="money"> Mevduat Tutarı </label>
        <input id='money' name='money' value={mevduat} type="text" onChange={changed} />
        <label htmlFor="vade"> Vade</label>
        <input type="text" value={period} onChange={changedPeriod} />
        <select name='vade' value={duration} onChange={durationChange} >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <button type='submit'> Hesapla </button>
      </form>

      <div className="Credit_Bank">
          {

            allBank.map((banks, key) => (
              <div key={key} className='Credit_Bank_container' >
                <img src={banks.img} alt={banks.bankName} />
                  
          
                 <div>

                  {banks.faizoran && banks.faizoran.filter(oran => oran.label === time && oran.oran !== 0).map(b => (
                    <div key={b}>
                       %{b.oran.toFixed(2)}
                      
                    </div>
                  ))
                  }
                </div>
              </div>
            ))
          }
      
      </div>


    </div>
  )
}

export default Credit