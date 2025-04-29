import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import web1 from "../Images/clone/dr.png";
import web2 from "../Images/clone/hh.png";
import web3 from "../Images/clone/jk.png";
import web4 from "../Images/clone/loans.png";
import web5 from "../Images/clone/mnt.png";
import web6 from "../Images/clone/lakeview.png";
import { Link } from "react-router-dom";
// **************************************


import { useEffect } from "react";
import Aos from "aos";
export default function Section7() {
  /******************** Project object */
  const project = [
    { id: 1, img1: web1, srclink: "https://www.drgurbeergill.com/home.php" },
    { id: 2, img1: web2, srclink: "https://www.headoverheelsyyc.ca/" },
    { id: 3, img1: web3, srclink: "https://jkstucco.ca/" },
    { id: 4, img1: web4, srclink: "http://werloans.com/" },
    { id: 6, img1: web6, srclink: "https://lakeviewhomescalgary.ca/" },
    { id: 5, img1: web5, srclink: "https://ministryofcardetailing.com.au/" }
  ]
  // ********************************
  useEffect(() => {
    Aos.init({ duration: 2000, once: false, })
  }, [])
  return (
    <>
      <section>
        <div className="box-project ">
          <div className="container live-project ">
            <div className="row">
              {/* ******************************** Forst colouem */}
              <div className="col-md-12  mt-5">
                {/* *************** H@ */}
                <h2 className="font-styleX text-center " data-aos="fade-up">
                  L<strong className="bgcolortext">i</strong>ve P<strong className="bgcolortext">r</strong>oj
                  <strong className="bgcolortext">ec</strong>t
                </h2>
                {/* ************** Light */}
                <div className="light mt-3">
                  <div className=" text-center light-line">
                  </div>
                </div>
              </div>
            </div>
            {/* ********************* */}
            <div className="row  mt-5 pt-5" data-aos="zoom-in-up">
              {
                project.map((item) => {
                  return (
                    <>
                      <div className="col-md-6 col-lg-4 mt-4"  >
                        {/* ************************* Live peojects */}
                        <div className="project-card ">


                          <CardContainer className="inter-var" key={item?.id}>
                            <CardBody
                              className=" relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black   w-auto sm:w-[30rem] h-auto rounded-xl p-2   ">
                              {/* <CardItem
          translateZ="50"
          className=" font-bold text-neutral-950 text-align justify-center text-center">
         Ministry of Car Detailing
        </CardItem> */}

                              <CardItem translateZ="100" className="w-full ">
                                <Link to={item.srclink}>
                                  <img
                                    src={item?.img1}

                                    className="w-full object-cover  group-hover/card:shadow-xl"
                                    alt="thumbnail" />
                                </Link>
                              </CardItem>


                            </CardBody>
                          </CardContainer>

                        </div>
                      </div>
                    </>
                  )
                })
              }
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
