import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";

function App() {
  return (
  <div>
    <Routes>
      <Route path="home/:userId" element={<Home />}/>
    </Routes>
  </div>
  );
}

export default App;
