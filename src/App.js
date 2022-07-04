
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/main';
import Card1 from './components/card1';
import Katie from "./images/image 12.png";
import Wedding from "./images/wedding2.png";
import Bike from "./images/bike.png";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <div className="cards">
      <Card1  img={Katie} tag="SOLD OUT" rating1="5.0" rating2="6" para="Life Lessons with Katie zaferes" pricing="$135" />
      <Card1 img={Wedding} tag="ONLINE" rating1="5.0" rating2="30" para="Learn wedding photography" pricing="$125"/>
      <Card1 img={Bike} tag="ONLINE" rating1="4.8" rating2="2" para="Group Mountain Biking" pricing="$50"/>
      </div>
    </div>
  );
}

export default App;
