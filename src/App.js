import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import PlaceToStay from "./components/PlaceToStay";

import {
  BrowserRouter as Router,
  Routes, Route, Link
} from "react-router-dom"


function App() {
  return (
    <>
      <Router>
        <div>
          <Navbar />
        </div>
        <Routes>
          <Route path="/placetostay" element={<PlaceToStay />} />
          <Route path="/" element={<Home />} />
        </Routes>

        <div>
          <Footer />
        </div>
      </Router>
    </>
  )
}

export default App;
