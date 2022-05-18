import "./app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import List from "./pages/List/List";
import Hotel from "./pages/Hotel/Hotel";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={  <List />} />
        <Route path="/hotels/:id" element={<Hotel />} />
        <Route path="*" element={<h2 className="text-4xl text-center flex justify-center items-center h-[100vh]">404 Error</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
