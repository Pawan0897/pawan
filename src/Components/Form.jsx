import { useState } from "react";
import Header from "../Components/Header";
import duck1 from "./Images/duck1.png";
import duck3 from "./Images/duck3.png";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { click, setduck } from "./Redux/Reducer";

export default function Form() {
  // *********************************
  const [state, setstate] = useState({
    email: "",
    password: "",
  });

  const { email, password } = state;

  const setimg = useSelector((state) => state.user.setimg);

  const imgdes = useDispatch();
  // const locemail = localStorage.getItem("email");
  // const locpass = localStorage.getItem("password");

  const locemail = "pawan@gmail.com";
  const locpass = "12345";

  const clicker = useSelector((state) => state.user.click);

  const setclick = useDispatch();

  //   console.log("clicker", clicker);
  /******************************************************* */
  const button = window.document.getElementById("btn");

  if (button) {
    /******************************************************* */
    if (locemail === email && locpass === password) {
      button.onmouseover = () => {
        button.style.left = `inherit`;
        button.style.top = `inherit`;
      };
      setclick(click(true));
      imgdes(setduck(duck1));
    } else if (locemail !== email) {
    /******************************************************* */
      button.onmouseover = () => {
        button.style.left = `${Math.ceil(Math.random() * 90)}%`;
        button.style.top = `${Math.ceil(Math.random() * 90)}%`;
      };
      setclick(click(false));
      imgdes(setduck(duck3));
    } else if (locpass !== password) {
    /******************************************************* */
      button.onmouseover = () => {
        button.style.left = `${Math.ceil(Math.random() * 90)}%`;
        button.style.top = `${Math.ceil(Math.random() * 90)}%`;
      };
      imgdes(setduck(duck3));
    }
    /************************************************** Nulll */
  }
  // UTS
  /******************************************************* */
  const clicked = () => {
    Swal.fire({
      title: "Succesfully Click ✌️✌️✌️",
      text: "finally you clicked me   !!!!",
      icon: "success",
    });
  };
  /******************************************************* */
  const handlechange = (event) => {
    const { name, value } = event.target;
    setstate((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  console.log(state);
  return (
    <>
      <Header />

      {/* /////////////////////////////// */}
      <div className="container-fluid position-relative mt-5 pt-5">
        <div className="row p-3 justify-content-center align-items-center">
          <h1 className="mb-4 text-center">Try To Submit 😉</h1>
          <div className="col-md-6 col-lg-4 col-sm-12  bg-light p-3 order-sm-2 mv-form">
            <div className="form  ">
              <div className="mb-3">
                <label className="form-label text-light">Email </label>
                <input
                  type="email"
                  name="email"
                  value={state.email}
                  onChange={handlechange}
                  className="form-control"
                />
              </div>
              {/* /////////////////////////// */}
              <div className="mb-3">
                <label className="form-label text-light">Password</label>
                <input
                  type="text"
                  name="password"
                  value={state.password}
                  onChange={handlechange}
                  className="form-control"
                />
              </div>
              <button
                id="btn"
                onClick={clicker ? clicked : ""}
                type="button"
                className="bg-success btnmover text-light me-3 btn float-end"
              >
                Submit
              </button>
              <button className="bg-danger text-light btn float-end">
                Cancel
              </button>
            </div>
          </div>
          <div className="col-md-4 col-lg-2  order-sm-1 order-xs-1">
            <div className="image2">
              <img src={setimg} style={{ width: "100%" }} alt="" />
              
              <div className="acordian">
                <div className="header  bgcolor">
                  <p className="p-1 m-0">You want to click </p>
                </div>
                <div className="acordian-detail d-flex justify-content-center align-items-center">
                  <div className="pt ">
                  <p>pawan@gmail.com</p>
                  <p>12345</p>
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
