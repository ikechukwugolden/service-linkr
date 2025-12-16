import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Service.jsx";
import Pricing from "./pages/Pricing"; // Add this import
import RequestService from "./pages/RequestService";
import ProviderLogin from "./pages/ProviderLogin";
import ProviderDashboard from "./pages/ProviderDashboard";
import Navbar from "./components/Navbar";
import HowITworks from "./Pages/HowITworks.jsx";
import Professionals from "./Pages/Professionals.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/Professionals" element={<Professionals />} />
        <Route path="/HowITworks" element={<HowITWorks />} />
        <Route path="/pricing" element={<Pricing />} /> {/* Add this route */}
        <Route path="/request" element={<RequestService />} />
        <Route path="/provider/login" element={<ProviderLogin />} />
        <Route path="/provider/dashboard" element={<ProviderDashboard />} />
      </Routes>
    </Router>
  );
}
import HowITWorks from "./Pages/HowITworks.jsx";

export default App;