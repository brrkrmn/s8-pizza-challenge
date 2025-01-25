import Header from "@/components/Header/Header";
import Home from "@/components/Home/Home";
import OrderForm from "@/components/OrderForm/OrderForm";
import Success from "@/components/Success/Success";
import { Route, BrowserRouter as Router, Routes } from "react-router";

const App = () => {
  return (
    <main className="w-screen h-full flex flex-col items-center justify-center px-4 mobile:px-7">
      <Router>
        <Header />
        <body className="w-full max-w-[532px] h-screen">
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
