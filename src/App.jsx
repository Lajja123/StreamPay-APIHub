import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import ListApi from "./components/ListApi";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/listapi" element={<ListApi />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
