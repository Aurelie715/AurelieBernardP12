import "./index.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import LeftSidebar from "./components/LeftSidebar/LeftSidebar";

function App() {
  return (
  <div>
    <Header />
    <LeftSidebar />
    <Routes>
      <Route path="/user/:id" element={<Home />}/>
    </Routes>
  </div>
  );
}

export default App;
