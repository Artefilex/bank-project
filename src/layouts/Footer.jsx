
import "./footer.css"

const Footer = () => {
  return (
    <div className='Footer'>
      <div className='Footer_Container'> 
      <div className='Footer_Container-content'> 
           <div className='Footer_Container-content-about'>
           <a href="http://localhost:3000/"> <img src={"Dollar"} alt="" /> <h4>CoinFlex </h4></a>
           </div>

          <div className='Footer_Container-content-navigate'>
              <h2>Haberler</h2>
              <nav className='Footer_Container-content-navigate-nav'>
                  <a href="http://localhost:3000/cyrpto"> Kripto Para</a>
                  <a href="http://localhost:3000/currency"> Döviz </a>
                  <a href="http://localhost:3000/emtia"> Emtia</a>
                  <a href="http://localhost:3000/exchange">Borsa</a>
                  <a href="http://localhost:3000/gold"> Altın</a>
              </nav>
          </div>
         <div className='Footer_Container-content-contac'>
             <h2>Bize Ulaşın</h2>
              <a  href='mailto:baris.tncdmr@gamil.com'> baris.tncdmr@gamil.com</a>
              <a href="tel:+905061210625"> Telefon </a>
              <a href="https://www.google.com/maps/place/Merve,+S%C4%B1dd%C4%B1k+Sk.+No:21,+34791+Sancaktepe%2F%C4%B0stanbul/@41.0051217,29.2396378,17z/data=!3m1!4b1!4m6!3m5!1s0x14cad1d0975bac89:0x2f5a8d3460400ecf!8m2!3d41.0051217!4d29.2396378!16s%2Fg%2F11c4k72c8y"> adrress</a>
         </div>
      </div>
         <div className="Footer_Container-bottom">
          <span>©2023 Privacy, Terms & Conditions of Use </span>
         </div>

      </div>
     
    </div>
  )
}

export default Footer