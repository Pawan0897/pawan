import { useEffect } from "react";
import Header from "./Header";
// import Pagination from "./Pagination";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
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

  return (
    <>
      <Header />
      <div className="cursor-dot" data-cursor-dot></div>
      <div className="curson-outline" data-cursor-outline></div>
      <div className="container-fluid   pt-5">
        <div className="row">
          <div className="col-md-10 offset-md-1 p-3 bg-width">
            <Section1 />
            <hr className="mt-5 mb-5 pb-5 pt-3"></hr>

            <Section2 />

            <hr className="mt-5 mb-5 "></hr>
            <Section3 />
            <hr className="mt-5 mb-5 "></hr>
            <Section4 />
            <hr className="mt-5 mb-5" />
            <Section5 />
            <hr className="mt-5 mb-5 " />
            <Section6 />
          </div>
        </div>
        {/* <Pagination/> */}
      </div>
    </>
  );
}
