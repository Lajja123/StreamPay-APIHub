import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import ListApi from "./components/ListApi";
import Subscription from "./components/Subscription";
import ApiDetailsForm from "./components/ApiDetailsForm";

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
            <Route path="/subscription" element={<Subscription />} />
            <Route path="/registration" element={<ApiDetailsForm />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
