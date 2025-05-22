import Card from "./components/Card";
import Deatails from "./components/Deatails";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div style={{"background": "#fffefa"}}>
        <Router>
        <Header />
          <Routes>
            <Route path="/" element={<Card />} />
            <Route path="/details/:title" element={<Deatails />} />
          </Routes>
      </Router>
      </div>
    </>
  );
}

export default App;
