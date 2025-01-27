import Home from "@/components/Home/Home";
import OrderForm from "@/components/OrderForm/OrderForm";
import Success from "@/components/Success/Success";
import { Route, BrowserRouter as Router, Routes } from "react-router";

const App = () => {
  return (
    <main className="w-screen min-h-screen flex flex-col items-center justify-center">
      <Router>
        <body className="w-full h-full flex items-start justify-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/order" element={<OrderForm />} />
            <Route path="/success" element={<Success />} />
          </Routes>
        </body>
      </Router>
    </main>
  );
};

export default App;
