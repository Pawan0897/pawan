import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import testi1 from "./Images/test1.jpg";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Quateimg from "./Images/motive-quote.png";
import testi2 from "./Images/tes2.jpg";
import testi3 from "./Images/tes3.jpg";

export default function Section4() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12 p-5 p0">
            <p className="bgcolortext ps-3">What Inspiring Me</p>
            <h2 className="font-styleX ps-2">
              {" "}
              Qu<strong className="bgcolortext">o</strong>t
              <strong className="bgcolortext">es</strong>
            </h2>
            {/* ********************************** */}
            <div className="container mt-4">
              <div className="row position-relative">
                <button
                  className="carousel-control-prev btn "
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <span className="" aria-hidden="true">
                    <i>
                      <FontAwesomeIcon icon={faArrowLeft} />
                    </i>
                  </span>
                  <span className="visually-hidden">Previous</span>
                </button>
                {/* ********************************** */}
                <button
                  className="carousel-control-next "
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span className="" aria-hidden="true">
                    <i>
                      <FontAwesomeIcon icon={faArrowRight} />
                    </i>
                  </span>
                  <span className="visually-hidden">Next</span>
                </button>
                {/* **************************************  */}
                <div className="col-md-12 ">
                  <div
                    id="carouselExampleIndicators"
                    className="carousel slide"
                  >
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <div className="row justify-content-center align-items-center">
                          <div className="col-md-5 col-lg-4 p5 p768">
                            <div className="test-img">
                              <img src={testi2} width={"90%"} alt="" />
                            </div>
                          </div>
                          {/* ***************************************** */}
                          <div className="col-md-7 col-lg-8 pe-4 ">
                            <div className="test-icon pt-2">
                              <img src={Quateimg} className="mb-5" alt="" />
                            </div>
                            {/* **************************** */}

                            {/* ************************************* */}
                            <div className="test-detail p-4  ">
                              <p>
                                "When something is important enough, you do it
                                even if the odds are against you. Some resist
                                change, but embracing it prevents disaster.
                                Failure is an option—if things aren’t failing,
                                you’re not innovating enough."
                                <strong className="bgcolortext">
                                  – Elon Musk
                                </strong>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* **************************************  */}
                      <div className="carousel-item">
                        <div className="row pb-3 justify-content-center align-items-center">
                          <div className="col-md-5 col-lg-4 p5 p768">
                            <div className="test-img">
                              <img src={testi3} width={"90%"} alt="" />
                            </div>
                          </div>
                          <div className="col-md-7 col-lg-8">
                            <div className="test-icon pt-2">
                              <img src={Quateimg} className="mb-5" alt="" />
                            </div>

                            <div className="test-detail p-4 ">
                              <p>
                                "If you are born poor, it's not your mistake,
                                but if you die poor, it’s your mistake. Success
                                seduces smart people into thinking they can't
                                lose. Celebrate success, but learning from
                                failure is far more important."{" "}
                                <strong className="bgcolortext">
                                  – Bill Gates
                                </strong>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* ///////////////////////////////////////////// */}
                      <div className="carousel-item">
                        <div className="row  justify-content-center align-items-center">
                          <div className="col-md-5 col-lg-4 p5 p768">
                            <div className="test-img">
                              <img src={testi1} width={"90%"} alt="" />
                            </div>
                          </div>
                          <div className="col-md-7 col-lg-8 ">
                            <div className="test-icon pt-2">
                              <img src={Quateimg} className="mb-5" alt="" />
                            </div>

                            <div className="test-detail p-4 ">
                              <p>
                                "If you don’t understand the details of your
                                business, you will fail. A brand is like a
                                reputation—you earn it by doing hard things
                                well. To escape challenges, invent your way out.
                                Stay stubborn on vision but flexible on
                                details."
                              </p>
                              <strong className="bgcolortext">
                                – Jeff Bezos
                              </strong>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* ///////////////////////////////////////////////// */}
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
              </div>
            </div>
            {/* //////////////////////////////////////////////// */}
          </div>
        </div>
      </div>
    </>
  );
}
