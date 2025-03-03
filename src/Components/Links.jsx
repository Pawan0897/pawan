import { Link, useNavigate } from "react-router-dom";
// import DayNight from "./DayNight";

export default function Links() {
  const navigate = useNavigate();
  return (
    <>
      <li className="nav-item me-4">
        <Link
          to={"/"}
          className={`${
            location.pathname == "/" ? "navborder bgcolortext" : ""
          } nav-link bg-navtext active`}
          aria-current="page"
          href="#"
        >
          Home
        </Link>
      </li>
      <li className="nav-item me-4">
        <Link
          to={"/calender"}
          className={`${
            location.pathname == "/calender" ? "navborder bgcolortext" : ""
          } nav-link bg-navtext`}
          href="#"
        >
          Calender
        </Link>
      </li>
      {/* ******************************* */}
      <li className="nav-item me-4">
        <Link
          to={"/calculater"}
          className={`${
            location.pathname == "/stripe" ? "navborder bgcolortext" : ""
          } nav-link bg-navtext`}
          href="#"
        >
          Calculater
        </Link>
      </li>
      {/* /////////////////// */}
      <li className="nav-item me-4">
        <Link
          to={"/stripe"}
          className={`${
            location.pathname == "/stripe" ? "navborder bgcolortext" : ""
          } nav-link bg-navtext`}
          href="#"
        >
          Stripe
        </Link>
      </li>
      {/* ////////////// */}
      <li className="nav-item me-4">
        <Link
          to={"/contactus"}
          className={`${
            location.pathname == "/contactus" ? "navborder bgcolortext" : ""
          } nav-link bg-navtext`}
          href="#"
        >
          Contacts
        </Link>
      </li>
      <li className="nav-item me-4">
        <Link
          className={` nav-link bg-navtext`}
          onClick={(e) => {
            e.preventDefault();
            location.pathname == "/"
              ? window.scrollBy(2000, 2000)
              : navigate("/");
          }}
        >
          Quotes
        </Link>
      </li>
      {/* <li className="nav-item d-flex me-4">
        <DayNight />
      </li> */}
    </>
  );
}

