import user from "../Images/port5.png";
import "../Style/cd-wordwrapper.css";
// import "../JS/cdjs-wordwrapper.js";

import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Particles from "./Particles.jsx";
import Aos from "aos";
import { TbFileCv } from "react-icons/tb";
import { TbBrandWhatsapp } from "react-icons/tb";
// ***********************************
import { RiInstagramLine } from "react-icons/ri";
export default function Section1() {
  useEffect(() => {
    Aos.init({ duration: 1500, once: false }),
      import("../JS/cdjs-wordwrapper.js");
  }, []);
  // ********************************

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "600px",
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
      {/* ******************************* */}

      <div className="container-fluid p-2 mt-4">
        <div className="row justify-content-center align-items-center ">
          {/* ************************************** */}
          <div className="col-md-12 col-lg-4" data-aos="fade-in">
            <div className="user-image p-5" id="pk">
              <img src={user} width={"100%"} style={{ transform: "s" }} />
            </div>
          </div>
          {/* ************************************** */}
          <div className="col-md-12 col-lg-8 ps-5 pt " data-aos="fade-in">
            <div className="user-detail p-3 me-3 ">
              <div className="title">
                <span>
                  Hi, I’m <b>Pawan Kumar </b>
                </span>

                <div className="dynamic-title cd-headline clip is-full-width">
                  <br></br>
                  <span className="cd-words-wrapper">
                    <b className="is-visible">
                      {" "}
                      a&nbsp;
                      <span className="gold-title">Frontend Developer.</span>
                    </b>

                    <b>
                      {" "}
                      a&nbsp;
                      <span className="gold-title">FullStack Developer.</span>
                    </b>
                  </span>
                </div>
              </div>

              <p>
                Dedicated web developer with 1 year of experience and 6 months
                of specialized Internship in React.js and Node.js. Proficient in
                React.js, Node.js, MongoDB, HTML, CSS, JavaScript, Bootstrap,
                and PHP, with expertise in both front-end and back-end
                development.
              </p>
            </div>
            {/* ////////////////////  start  */}
            <div className="skill">
              <div className="row">
                <div className="col-md-5 col-lg-6 ">
                  <div className="icon-box1">
                    <ul>
                      <li>
                        <Link
                          to="mailto:pawankumarwebdev@gmail.com"
                          className="button"
                        >
                          <MailOutlineIcon />
                        </Link>
                      </li>
                      {/* ************************** */}
                      <li>
                        <a
                          className="buttton"
                          href="https://www.linkedin.com/in/pawan-kumar-05533b242/"
                        >
                          <LinkedInIcon />
                        </a>
                      </li>
                      {/* ************************** */}
                      <li>
                        <a
                          className="buttton"
                          onClick={() =>
                            window.open(`/PawanKumar_CV.pdf`, "_blank")
                          }
                        >
                          <TbFileCv />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-7 col-lg-6 ">
                  <div className="icon-box">
                    <ul>
                      <li>
                        <Link className="button" to={"https://www.instagram.com/sauravpk00/"}>
                          <RiInstagramLine />
                        </Link>
                      </li>
                      {/* ///////////////// */}
                      <li>
                        {/* <a className="button" href="https://api.whatsapp.com/send?phone=919781222386&text=Hello, My self Pawan Kumar?"> */}
                        <Link
                          to={
                            "https://wa.me/919781222386?text=Hello, I'm Web Developer"
                          }
                        >
                          
                          <TbBrandWhatsapp />
                        </Link>
                      </li>
                      <li>
                        <Link className="button">
                          <FacebookIcon />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
