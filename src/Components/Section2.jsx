import { Link } from "react-router-dom";
import Particles from "./Particles";
import { useEffect } from "react";
import Aos from "aos";

function Section2() {
  /************************** */
  useEffect(() => {
    Aos.init({ duration: 2000, once: false })
  },[])
  /**************************** */
  return (
    <>
      <section className="">
        <div
          style={{
            width: "100%",

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
        <div className="container ">
          <div
            className="section2"

          >
            {/* ////////////////////////////////// */}

            <>
              <div className="row ">
                <p className="text-center font-bold bgcolortext" data-aos="fade-up">Features</p>
                <h2 className="mb-5 pb-3 text-center font-styleX " data-aos="fade-up">
                  what i <strong className="bgcolortext">do</strong>
                </h2>

                <div className="col-md-12 mb-3 col-lg-4 " data-aos="zoom-in">
                  <div className="what-do ">
                    <div className="do-sec  p-4">
                      <h3 className="font-styleXX ">Todo-List </h3>
                      <p className="">
                        To-Do List Application that allows users to manage their
                        tasks efficiently. This project focuses on user
                        interactivity and usability, enabling users to add, edit,
                        mark as complete, and delete tasks seamlessly.
                      </p>
                      <h3 className="font-styleXX ">Live Project</h3>
                      <p>
                        Real-world projects showcasing my frontend development
                        skills and responsive design expertise.
                      </p>
                      <Link
                        className="bgcolortext"
                        href="https://ministryofcardetailing.com.au/"
                      >
                        💭 https://ministryofcardetailing.com.au/
                      </Link>
                      <br></br>
                      <Link className="bgcolortext" href="https://jkstucco.ca/">
                        💭 https://jkstucco.ca/
                      </Link>
                      <br></br>
                      <Link
                        className="bgcolortext"
                        href="https://www.drgurbeergill.com/"
                      >
                        💭 https://www.drgurbeergill.com/
                      </Link>
                      <br></br>
                      <Link
                        className="bgcolortext mb-2"
                        href="https://lakeviewhomescalgary.ca/"
                      >
                        💭 https://lakeviewhomescalgary.ca/
                      </Link>
                      <br></br>
                      <Link
                        className="bgcolortext "
                        href="https://www.headoverheelsyyc.ca/"
                      >
                        💭 https://www.headoverheelsyyc.ca/
                      </Link>
                      <br></br>
                    </div>
                  </div>
                </div>
                {/* ************************************ */}
                <div className="col-md-12 mb-3 col-lg-4" data-aos="zoom-in">
                  <div className="what-do">
                    <div className="do-sec p-4">
                      {/* <div className="bg"></div>
                  <div className="blob"></div> */}
                      <i></i>
                      <h3 className="font-styleXX ">Dynamic Portfolio </h3>
                      <p>
                        I developed a dynamic portfolio that pulls project data
                        using Mock APIs, making the portfolio more scalable and
                        maintainable. Instead of hardcoding content, this project
                        retrieves information dynamically.
                      </p>
                      <p className="">
                        A key feature of my portfolio is the integration of CRUD
                        (Create, Read, Update, Delete) operations for project
                        management. You can add new Details dynamically via a
                        form, view details fetched from the API, update Details or
                        content to reflect modifications, and delete outdated
                        projects, keeping the portfolio organized and up to date.
                      </p>
                    </div>
                  </div>
                </div>
                {/* *************************** */}
                <div className="col-md-12 mb-3  col-lg-4 " data-aos="zoom-in">
                  <div className="what-do mdt-2">
                    <div className="do-sec p-4">
                      <i></i>
                      <h3 className="font-styleXX "> E-Commerce Site</h3>
                      <p>
                        E-commerce applications have transformed the digital
                        marketplace, and I wanted to challenge myself by building
                        a full-stack e-commerce platform with Node.js and MongoDB
                        APIs. This project not only provides a seamless shopping
                        experience but also includes secure payment processing,
                        order management, and authentication.
                      </p>
                      <p>
                        Secure user login & registration using JWT-based
                        authentication. and a fully functional CRUD system for
                        adding, updating, and deleting products.The entire
                        e-commerce backend is powered by MongoDB APIs, ensuring
                        smooth database operations
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          </div>
        </div>
      </section>
    </>
  );
}

export default Section2;
