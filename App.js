import Header from "./component/header"
import Title from "./component/title"
import Cardone from "./component/cardone"
import Cardtwo from "./component/cardtwo"
import Cardthree from "./component/cardthree"
import Cardfour from "./component/cardfour"

function App() {
  return (
    <div>

<div className="p-4 w-full border border-black flex align-middle justify-between">
  <Header/>
        <h2 className="font-bold">About</h2>
        <h2 className="font-bold">Services</h2>
        <h2 className="font-bold">Contact</h2>
        <h2 className="font-bold">Portfolio</h2>
</div>
<div className="p-4 w-full border text-7xl  font-bold border-black text-center">
  <Title/>
    <h1>At Your Service</h1>
</div>

<div className=" flex items-stretch mt-28">
<div className="p-4 border-4 border-#4c0519 text-3xl ml-8 items-center content-center "><Cardone/></div>
<div className="p-4 border-4 border-#059669 text-3xl ml-8 items-center content-center "><Cardtwo/></div>
<div className="p-4 border-4 border-#059669 text-3xl ml-8 items-center content-center "><Cardthree/></div>
<div className="p-4 border-4 border-#059669 text-3xl ml-8 items-center content-center "><Cardfour/></div>
</div>

    </div>
    
  )
}

export default App;