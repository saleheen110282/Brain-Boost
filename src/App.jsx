import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"; // Import routing components
import Banner from "./components/Banner/Banner";
import Banner2 from "./components/Banner/Banner2";
import Courses from "./components/Courses";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Lecture from "./components/Lecture";
import Navbar from "./components/Navbar/Navbar"; // Import Navbar
import Payment from "./components/Payment";
import Services from "./components/Services/Services";
import SignIn from "./components/SignIn"; // Import SignIn component
import Subscribe from "./components/Subscribe/Subscribe";
import ParentsPortal from "./components/ParentsPortal";
import ContactUs from "./components/ContactUs";

const App = () => {
    return (
        <Router>
            {/* Navbar will be shown on all pages */}
            <Navbar />
            <main className="overflow-x-hidden bg-white text-dark">
                <Routes>
                    {/* Home page route */}
                    <Route
                        path="/"
                        element={
                            <>
                                <Hero />
                                <Services />
                                <Lecture />
                                <Banner />
                                <Subscribe />
                                <Banner2 />
                                <Footer />
                            </>
                        }
                    />
                    {/* Sign In page route */}
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/payment" element={<Payment />} />
                    <Route path="/Courses" element={<Courses />} />
                    <Route path="/parents-portal" element={<ParentsPortal />} />
                    <Route path="/contact" element={<ContactUs />} />
                </Routes>
            </main>
        </Router>
    );
};

export default App;
