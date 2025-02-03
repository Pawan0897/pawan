function Section3() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="resum">
              <p className="text-center">
                Visit my portfolio and keep your feedback
              </p>

              <h2 className="text-center">
                M<strong className="bgcolortext">y</strong> Por
                <strong className="bgcolortext"></strong>tfo
                <strong className="bgcolortext">lio</strong>
              </h2>
              <div className="row justify-content-center mt-5">
                <div className="res-detail d-flex justify-content-center align-items-center">
                  <ul
                    className="nav nav-tabs border-0"
                    id="nav-tab"
                    role="tablist"
                  >
                    <li
                      className="nav-link  active"
                      id="nav-home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-home"
                      type="button"
                      role="tab"
                      aria-controls="nav-home"
                      aria-selected="true"
                    >
                      Education
                    </li>
                    <li
                      className="nav-link "
                      id="nav-profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-profile"
                      type="button"
                      role="tab"
                      aria-controls="nav-profile"
                      aria-selected="false"
                    >
                      Professional Skills
                    </li>
                    <li
                      className="nav-link "
                      id="nav-contact-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-contact"
                      type="button"
                      role="tab"
                      aria-controls="nav-contact"
                      aria-selected="false"
                    >
                      Experience
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ////////////////////////////////////// */}

      <>
        <div className="tab-content" id="nav-tabContent">
          <div
            className="tab-pane fade show active"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
          >
            <div className="container mt-5 pt-5">
              <div className="row">
                <div className="col-md-6 border-edit ps-5 pe-5 pe-0">
                  <div className="detail-first p-4 ">
                    <h2>koknj</h2>
                    <p>2020-2020</p>

                    <br></br>
                    <hr />

                    <p>ojihb</p>
                  </div>
                </div>
                <div className="col-md-6 border-edit ps-5 pe-0">
                  <div className="detail-first  p-4">
                    <h2>knj </h2>
                    <p>jh</p>

                    <br></br>
                    <hr />

                    <p>ojb</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ///////////////////////////////////////////// */}
          <div
            className="tab-pane fade"
            id="nav-profile"
            role="tabpanel"
            aria-labelledby="nav-profile-tab"
          >
            <div className="container mt-5 pt-5">
              <div className="row ">
                <div className="col-md-6 border-edit ps-5 pe-5 pe-0">
                  <div className="detail-first p-4 ">
                    <h2>kn </h2>
                    <p>oijhb</p>

                    <br></br>
                    <hr />

                    <p>ijhb</p>
                  </div>
                </div>
                <div className="col-md-6 border-edit ps-5 pe-0">
                  <div className="detail-first  p-4">
                    <h2>ojibh</h2>
                    <p>oijhb</p>

                    <br></br>
                    <hr />

                    <p>oijh</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ///////////////////////////////////////////// */}
          <div
            className="tab-pane fade"
            id="nav-contact"
            role="tabpanel"
            aria-labelledby="nav-contact-tab"
          >
            <div className="container  mt-5 pt-5">
              <div className="row ">
                <div className="col-md-6 border-edit ps-5 pe-5 pe-0">
                  <div className="detail-first p-4 ">
                    <h2>ojibh</h2>
                    <p>oijh</p>

                    <br></br>
                    <hr />

                    <p>okj</p>
                  </div>
                </div>
                <div className="col-md-6 border-edit ps-5 pe-0">
                  <div className="detail-first  p-4">
                    <h2>oiug</h2>
                    <p>kjb</p>

                    <br></br>
                    <hr />

                    <p>okj</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /////////////////////////////// */}
        </div>
      </>
    </>
  );
}

export default Section3;
