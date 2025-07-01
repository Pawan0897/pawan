import { useEffect } from "react";
import Header from "./Header";
// import Pagination from "./Pagination";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from "./Section7";
import { useLocation } from "react-router-dom";
// import Header from "../Header/Header";/

export default function Index() {
  useEffect(() => {
    const cursorDot = document.querySelector("[data-cursor-dot]");
    const cursorOutline = document.querySelector("[data-cursor-outline]");
    window.addEventListener("mousemove", function (e) {
      const posX = e.clientX;
      const posY = e.clientY;

      cursorDot.style.left = `${posX}px`;
      cursorDot.style.top = `${posY}px`;
      cursorOutline.animate(
        {
          left: `${posX}px`,
          top: `${posY}px`,
        },
        { duration: 500, fill: "forwards" }
      );
    });
  }, []);
  // //////////////////////////////////  cursor
  // ***********************************************

  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const scrollTo = params.get("scrollTo");

    if (scrollTo) {
      setTimeout(() => {
        const target = document.getElementById(scrollTo);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }, 200); // slight delay to wait for DOM render
    }
  }, [location]);
  return (
    <>
      <div className="cursor-dot" data-cursor-dot></div>
      <div className="curson-outline" data-cursor-outline></div>
      <div className="container-fluid position-relative ">
        <Header />
        <div className="row">
          <div className="col-md-10 offset-md-1 p-3 bg-width">
            {/* ***** Main Section */}
            <div id="top">
              <Section1 />
            </div>

            {/* ************** what i do  */}
            <hr className="mt-3 mb-5 pb-5 pt-3" />
            <div id="what-i-do">
              <Section2 />
            </div>
              {/* **************** about me */}
              

            <hr className="mt-5 mb-5 "></hr>
            <div id="about-me"></div>
            <Section3 />
            {/* *********** Live project section  */}
            <hr className="mt-4 mb-5" />
            <div id="project">
              <Section7 />
            </div>
            {/* *************What Inspire ME */}
            <hr className="mt-5 mb-5 "></hr>
            <div id="section4">
              <Section4 />
            </div>
            {/* ********** Skills section */}

            <hr className="mt-5 mb-5" />
            <div id="skill">
              <Section5 />
            </div>
            {/* ***** constact me */}
            <hr className="mt-4 " />
            <div id="contact-me">
              <Section6 />
            </div>
          </div>
        </div>
        {/* <Pagination/> */}
      </div>
    </>
  );
}
