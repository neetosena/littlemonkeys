import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";

function App() {
  const { pathname, hash, key } = useLocation();
  console.log("useLocation", pathname, hash, key);

  //----------------this useeffect is just to do the scrolling id-----------------

  useEffect(() => {
    //if not a hash link, scroll to top
    if (hash === "") {
      window.scrollTo(0, 0);
    }
    //else scroll to id
    else {
      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }, 0);
    }
  }, [pathname, hash, key]);

  //------------------------------------end-------------------------------------

  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="contact" element={<Contact />} />
        <Route path="Blog" element={<Blog />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
