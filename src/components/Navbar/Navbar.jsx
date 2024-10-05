import React from "react";
import { IoMdMenu } from "react-icons/io";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Import Link for navigation

const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    path: "/", // Home link
  },
  {
    id: 2,
    title: "Courses",
    path: "/courses", // Path for Courses
  },
  {
    id: 3,
    title: "Payment",
    path: "/Payment", // Path for About Us
  },
  {
    id: 4,
    title: "Parents Portal",
    path: "/ParentsSignIn", // Path for Parents Portal
  },
  {
    id: 5,
    title: "Contact Us",
    path: "/contact", // Path for Contact Us
  },
];

const Navbar = () => {
  return (
    <nav className="relative z-20">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="container py-10 flex justify-between items-center"
      >
        {/* Logo section */}
        <div>
          <Link to="/" className="font-bold text-2xl"> {/* Wrap the logo with Link */}
            BrainBoost
          </Link>
        </div>
        {/* Menu section */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-3">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <Link
                  to={menu.path} // Use Link for navigation
                  className="inline-block py-2 px-3 hover:text-secondary relative group"
                >
                  <div className="w-2 h-2 bg-secondary absolute mt-4 rounded-full left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden"></div>
                  {menu.title}
                </Link>
              </li>
            ))}
            <Link to="/SignIn" className="primary-btn">Sign In</Link> {/* Link to Sign In */}
          </ul>
        </div>
        {/* Mobile Hamburger menu section */}
        <div className="lg:hidden">
          <IoMdMenu className="text-4xl" />
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
