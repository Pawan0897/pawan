import Aos from "aos";
import { useEffect } from "react";


export default function Section5() {
  /**********************************8 */
  useEffect(() => {
    Aos.init({ duration: 2000, once: false })
  },[])

  return (
    <>
      <div className="container mt-5">
        <h2 className="text-center font-styleX pb-3 mb-5" data-aos="fade-up">
          Sk<strong className="bgcolortext">i</strong>ll
          <strong className="bgcolortext">s</strong>
        </h2>

        <div className="row mt-5 align-item-center justify-content-center" data-aos="fade-up">
          <div className="col-md-11 ">
            <div className="skill-slider p-3">
              <ul className="border-0 f-bolder p-4">
                <>
                  <li >
                    <a className="buttton" href="">
                      HTML
                    </a>
                  </li>
                  <li >
                    <a className="buttton" href="">
                      CSS
                    </a>
                  </li>
                  <li >
                    <a className="buttton" href="">
                      Bootstrap
                    </a>
                  </li>
                  <li >
                    <a className="buttton" href="">
                      JS
                    </a>
                  </li>

                  <li >
                    <a className="buttton" href="">
                      React
                    </a>
                  </li>
                  <li>
                    <a className="buttton" href="">
                      Node
                    </a>
                  </li>
                  <li>
                    <a className="buttton" href="">MongooDB</a>
                  </li>
                </>

                {/******************************************** */}

                <>
                  <li>
                    <a className="buttton" href="">
                      HTML
                    </a>
                  </li>
                  <li>
                    <a className="buttton" href="">
                      CSS
                    </a>
                  </li>
                  <li>
                    <a className="buttton" href="">
                      Bootstrap
                    </a>
                  </li>
                  <li>
                    <a className="buttton" href="">
                      JS
                    </a>
                  </li>

                  <li>
                    <a className="buttton" href="">
                      React
                    </a>
                  </li>
                  <li>
                    <a className="buttton" href="">
                      Node
                    </a>
                  </li>
                  <li>
                    <a className="buttton" href="">
                      Mongodb
                    </a>
                  </li>
                </>



              </ul>
            </div>
          </div>
        </div>
      </div>


    </>
  );
}
