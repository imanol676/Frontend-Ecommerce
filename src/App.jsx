import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CheckoutPage from "./pages/CheckOutPage";
import ThankYouPage from "./pages/ThanksYouPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Home display */}
        <Route path="/" element={<Home />} />
        <Route path="/checkout/:productId" element={<CheckoutPage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
      </Routes>
    </Router>
  );
}

export default App;
