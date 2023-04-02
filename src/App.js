import Headers from "./components/headers/Headers";
import Footer from "./components/footer/Footer"
import {BrowserRouter as Router} from "react-router-dom"
import Location from "./components/headers/Location";
import DataList from "./components/List/DataList";

function App() {
  return (
   <div className="App_Container">
   <Router>
     <Headers/>
     <Location/>
   </Router>
   <DataList/>
   <Footer/>
   
   </div>
  )
   
}

export default App;
