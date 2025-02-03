function Section2() {
  return (
    <>
      <div className="container  ">
        <div
          className="section2"
          data-aos="fade-zoom-in"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          {/* ////////////////////////////////// */}

          <>
            <div className="row ">
              <p className="text-center font-bold bgcolortext">Feactures</p>
              <h2 className="mb-5 pb-3 text-center font-styleX ">
                what i <strong className="bgcolortext">do</strong>
              </h2>

              <div className="col-md-4 ">
                <div className="do-sec  p-4">
                  <h3 className="font-styleXX bgcolortext">Todo List </h3>
                  <p className="">
                    To-Do List Application that allows users to manage their
                    tasks efficiently. This project focuses on user
                    interactivity and usability, enabling users to add, edit,
                    mark as complete, and delete tasks seamlessly.
                  </p>
                  <h3 className="font-styleXX bgcolortext">Secure Form</h3>
                  <p>
                    In this application, if the entered password does not meet
                    the required criteria, the submit button will not be
                    clickable
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="do-sec p-4">
                  <i></i>
                  <h3 className="font-styleXX bgcolortext">
                    Dynamic Portfolio{" "}
                  </h3>
                  <p>
                    I developed a dynamic portfolio that pulls project data
                    using Mock APIs, making the portfolio more scalable and
                    maintainable. Instead of hardcoding content, this project
                    retrieves information dynamically.
                  </p>
                  <p>
                    A key feature of my portfolio is the integration of CRUD
                    (Create, Read, Update, Delete) operations for project
                    management. You can add new Details dynamically via a form,
                    view details fetched from the API, update Details or content
                    to reflect modifications, and delete outdated projects,
                    keeping the portfolio organized and up to date.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="do-sec p-4">
                  <i></i>
                  <h3 className="font-styleXX bgcolortext"> E-Commerce Site</h3>
                  <p>
                    E-commerce applications have transformed the digital
                    marketplace, and I wanted to challenge myself by building a
                    full-stack e-commerce platform with Node.js and MongoDB
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
          </>
        </div>
      </div>
    </>
  );
}

export default Section2;
