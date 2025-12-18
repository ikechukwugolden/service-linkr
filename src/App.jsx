import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Services from "./Pages/Service.jsx";
import Pricing from "./Pages/Pricing.jsx"; // Add this import
import RequestService from "./Pages/Requestservice.jsx";
import Providerlogin from "./Pages/Providerlogin.jsx";
import ProviderDashboard from "./Pages/ProviderDashboard";
import Navbar from "./components/Navbar";
import HowITWorks from "./Pages/HowITworks.jsx";
import Professionals from "./Pages/Professionals.jsx";
import Login from "./Pages/login.jsx";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/Professionals" element={<Professionals />} />
        <Route path="/login" element={<Login />} />
        <Route path="/HowITworks" element={<HowITWorks />} />
        <Route path="/pricing" element={<Pricing />} /> 
        <Route path="/request" element={<RequestService />} />
        <Route path="/provider/login" element={<Providerlogin />} />
        <Route path="/provider/dashboard" element={<ProviderDashboard />} />
      </Routes>
    </Router>
  );
}


export default App;