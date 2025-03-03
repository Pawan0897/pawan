import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <>
      {/* ************************************************************************************ */}
      <Navbar expand="lg" className="navbar-expand-lg py-3 px-3 bg-bodyNav">
        <Container>
          <Navbar.Brand href="#home">
            {" "}
            <Link className="navbar-brand" to="/">
              M<strong className="bgcolortext">y </strong>Ju
              <strong className="bgcolortext">rn</strong>er
              <strong className="bgcolortext">y</strong>
            </Link>
          </Navbar.Brand>
          {/* *********************** */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className=" ms-auto mb-2 mb-lg-0">
              {/* ****************************** */}
              <Nav.Link>
                <Link
                  to="/"
                  className={`nav-link bg-navtext ${
                    location.pathname === "/" ? "navborder bgcolortext" : ""
                  }`}
                >
                  Home
                </Link>
              </Nav.Link>
              {/* ****************************** */}
              <Nav.Link>
                <Link
                  to="/calender"
                  className={`nav-link bg-navtext ${
                    location.pathname === "/calender"
                      ? "navborder bgcolortext"
                      : ""
                  }`}
                >
                  Calendar
                </Link>
              </Nav.Link>
              {/* ****************************** */}
              <Nav.Link>
                <Link
                  to="/stripe"
                  className={`nav-link bg-navtext ${
                    location.pathname === "/stripe"
                      ? "navborder bgcolortext"
                      : ""
                  }`}
                >
                  Stripe
                </Link>
              </Nav.Link>
              {/* ***************************** */}
              <Nav.Link>
                <Link
                  to="/calculater"
                  className={`nav-link bg-navtext ${
                    location.pathname === "/calculater"
                      ? "navborder bgcolortext"
                      : ""
                  }`}
                >
                  Caculater
                </Link>
              </Nav.Link>
              {/* ****************************** */}
              <Nav.Link>
                <Link
                  className={`${
                    location.pathname == "/form" ? "navborder bgcolortext" : ""
                  } nav-link bg-navtext`}
                  // onClick={(e) => {
                  //   e.preventDefault();
                  //   if (location.pathname === "/") {
                  //     window.scrollBy(2000, 2000);
                  //   } else {
                  //     navigate("/form");
                  //   }
                  // }}
                  to="/form"
                >
                  Form
                </Link>
              </Nav.Link>
              {/* ****************************** */}
              <Nav.Link>
                <Link
                  to="/contactus"
                  className={`nav-link bg-navtext ${
                    location.pathname === "/contactus"
                      ? "navborder bgcolortext"
                      : ""
                  }`}
                >
                  Contacts
                </Link>
              </Nav.Link>
              {/* ****************************** */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
