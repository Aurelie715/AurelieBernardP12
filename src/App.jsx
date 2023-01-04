import "./index.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";

function App() {
  return (
  <div>
    <Header />
    <Routes>
      <Route path="/home/:userId" element={<Home />}/>
    </Routes>
  </div>
  );
}

export default App;
