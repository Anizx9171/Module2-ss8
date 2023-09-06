import { useState } from "react";
import "./App.css";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import ContactPage from "./components/Contact/ContactPage";
import HomePage from "./components/HomePage";
import AboutPage from "./components/About/AboutPage";
import NotFound from "./components/NotFound";
import AboutUser from "./components/About/AboutUser";
import AboutProduct from "./components/About/AboutProduct";
import AboutIndex from "./components/About/AboutIndex";
import NavBar from "./components/NavBar";
import DemoNavigate from "./components/DemoNavigate";
import Course from "./components/DynamicRouter/Course";
import CourseDetail from "./components/DynamicRouter/CourseDetail";
import CourseDetail2 from "./components/DynamicRouter/CourseDetail2";
import PrivateRouter from "./components/PrivateRouter/PrivateRouter";
import Login from "./components/PrivateRouter/Login.jsx";
import Admin from "./components/PrivateRouter/Admin";

// function App() {
//   return (
//     <>
//       <div>
//         {/* Dùng NavLink
//       {/* Cấu hình các router  */}
//         <Routes>
//           {/* Route: nhận  giá trị
//         +path: Đường dẫn url
//         +element: component tương ứng
//         */}
//           <Route path="/" element={<HomePage />} />
//           <Route path="/contactpage" element={<ContactPage />} />
//           <Route path="/aboutpage" element={<AboutPage />}>
//             <Route index element={<AboutIndex />} />
//             <Route path="about-user" element={<AboutUser />} />
//             <Route path="about-product" element={<AboutProduct />} />
//           </Route>
//           {/* {} */}
//           <Route path="/course" element={<Course />}></Route>
//           <Route path="/course/:id" element={<CourseDetail />}></Route>
//           <Route path="/course/:id/:type" element={<CourseDetail2 />}></Route>
//           {/* {} */}
//           <Route path="/login" element={<Login />} />
//           <Route element={<PrivateRouter />}>
//             <Route path="/admin" element={<Admin />} />
//           </Route>
//           {/*  */}
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//         <DemoNavigate />
//       </div>
//     </>
//   );
// }

// export default App;

import React from "react";
import Home from "./componentsBT/Home";
import Index2 from "./componentsBT/Index2";
import Portfolio from "./componentsBT/Portfolio.Jsx";
import Contactt from "./componentsBT/Contactt";
import Aboutt from "./componentsBT/Aboutt";
import Services from "./componentBT2/Services";
import Homee from "./componentBT2/Homee";
import PortfolioGrid from "./componentBT2/PortfolioGrid";
import Aboutf from "./componentBT2/Aboutf";
import Team from "./componentBT2/Team";
import Contact from "./componentBT2/Contact";

export default function App() {
  return (
    <>
      {/* <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Index2 />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contactt />} />
          <Route path="/about" element={<Aboutt />} />
        </Route>
      </Routes> */}
      <Routes>
        <Route path="/" element={<Homee />}>
          <Route index element={<Services />} />
          <Route path="/portfolio" element={<PortfolioGrid />} />
          <Route path="/About" element={<Aboutf />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/Contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}
