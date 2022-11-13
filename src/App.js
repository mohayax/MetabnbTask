import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Card from "./components/Card";
import image from "./assets/images/frame.png";
import Cards from './components/Cards';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Banner />
      {/* <Card img={image} name="Desert king" price="1MBT per night" distance="2345km away" availabilty="available for 2weeks stay" /> */}
      <Cards />
    </>
  )
}

export default App;
