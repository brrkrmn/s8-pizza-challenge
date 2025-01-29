import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Home from "@/components/Home/Home";
import OrderForm from "@/components/OrderForm/OrderForm";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";
import Success from "@/components/Success/Success";
import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router";

const App = () => {
  const [orderDetails, setOrderDetails] = useState();

  return (
    <main className="w-screen min-h-screen flex items-center justify-center">
      <Router>
        <ScrollToTop />
        <body className="w-full h-full flex flex-col items-start justify-center">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/order"
              element={<OrderForm setOrderDetails={setOrderDetails} />}
            />
            <Route
              path="/success"
              element={<Success orderDetails={orderDetails} />}
            />
          </Routes>
          <Footer />
        </body>
      </Router>
    </main>
  );
};

export default App;
