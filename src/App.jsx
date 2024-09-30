import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import routing components
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Banner2 from "./components/Banner/Banner2";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar"; // Import Navbar
import SignIn from "./components/SignIn"; // Import SignIn component
import Payment from "./components/Payment";
import Courses from "./components/Courses";


const App = () => {
  return (
    <Router>
      {/* Navbar will be shown on all pages */}
      <Navbar /> 
      <main className="overflow-x-hidden bg-white text-dark">
        <Routes>
          {/* Home page route */}
          <Route path="/" element={
            <>
              <Hero />
              <Services />
              <Banner />
              <Subscribe />
              <Banner2 />
              <Footer />
            </>
          } />
          {/* Sign In page route */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/Courses" element={<Courses />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
