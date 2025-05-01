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

  return (
    <>
 

      <div className="cursor-dot" data-cursor-dot></div>
      <div className="curson-outline" data-cursor-outline></div>
      <div className="container-fluid position-relative ">
      <Header />
        <div className="row">
          <div className="col-md-10 offset-md-1 p-3 bg-width">
            {/* ***** Main Section */}
            <Section1 />

            <hr className="mt-3 mb-5 pb-5 pt-3" />

            <Section2 />

            <hr className="mt-5 mb-5 "></hr>
            <Section3 />
            {/* *********** Live project section  */}
            <hr className="mt-4 mb-5" />
            <Section7 />
            {/* ************* */}
            <hr className="mt-5 mb-5 "></hr>
            <Section4 />
            {/* ********** Skills section */}

            <hr className="mt-5 mb-5" />
            <Section5 />

            <hr className="mt-4 " />
            <Section6 />
          </div>
        </div>
        {/* <Pagination/> */}
      </div>
    </>
  );
}
