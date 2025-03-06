import { useEffect } from "react";
import Header from "./Header";
// import Pagination from "./Pagination";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Particles from "./Particles";
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

      <>
        <div
          style={{
            width: "100%",
            // height: "1600px",
            top: "0",
            bottom: "0",
            zIndex: "-1",
            position: "absolute",
          }}
        >
          <Particles
            particleColors={["#ffffff", "#ffffff"]}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>
      </>
          <Header />

      <div className="cursor-dot" data-cursor-dot></div>
      <div className="curson-outline" data-cursor-outline></div>
      <div className="container-fluid position-relative  pt-5">
      
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
