import Home from "@/components/Home/Home";
import Navbar from "@/components/Navbar/Navbar";
import OrderForm from "@/components/OrderForm/OrderForm";
import Success from "@/components/Success/Success";
import { Route, BrowserRouter as Router, Routes } from "react-router";

const App = () => {

  return (
    <div>
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<OrderForm />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
