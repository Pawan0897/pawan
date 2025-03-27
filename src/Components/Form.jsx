import { useEffect, useState } from "react";
import Header from "../Components/Header";
import duck1 from "./Images/duck1.png";
import duck3 from "./Images/duck3.png";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { click, setduck } from "./Redux/Reducer";
import { useFormik } from "formik";
import * as yup from "yup";
export default function Form() {
  
  // *********************************
    // *************************************** formik
    const formik = useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: yup.object({
        email: yup.string().email().required(),
        password: yup.string().required(),
      }),
     
    });
    /************************************ */
  const setimg = useSelector((state) => state.user.setimg);

  const imgdes = useDispatch();
  // const locemail = localStorage.getItem("email");
  // const locpass = localStorage.getItem("password");

  const locemail = "pawan@gmail.com";
  const locpass = "12345";

  const img1 = duck1;
  const img3 = duck3;

  const clicker = useSelector((state) => state.user.click);

  const setclick = useDispatch();

  //   console.log("clicker", clicker);
  /******************************************************* */
  const button = window.document.getElementById("btn");

  if (button) {
    const movebutton = () => {
      button.style.left = `${Math.ceil(Math.random() * 90)}%`;
      button.style.top = `${Math.ceil(Math.random() * 90)}%`;
    };
    const stopbutton = () => {
      button.style.left = `inherit`;
      button.style.top = `inherit`;
    }
    /******************************************************* */
    if (locemail === formik?.values?.email && locpass === formik?.values?.password) {
      button.onmouseover = stopbutton;
      button.ontouchstart =stopbutton;
      setclick(click(true));
      imgdes(setduck(duck1));
      
      
    } else if (locemail !== formik?.values?.email) {
      /******************************************************* */
      button.ontouchstart = movebutton;
      button.onmouseover = movebutton;
      setclick(click(false));
      imgdes(setduck(duck3));
    } else if (locpass !== formik?.values?.password) {
      /******************************************************* */
      button.ontouchstart = movebutton;
      button.onmouseover = movebutton;
      imgdes(setduck(duck3));
    }
    /************************************************** Nulll */
  }
  // UTS
  /******************************************************* */
 const clicks =  () => {
        Swal.fire({
          title: "Succesfully Click ✌️✌️✌️",
          text: "finally you clicked me   !!!!",
          icon: "success",
        });
      }
  /******************************************************* */
  // const handlechange = (event) => {
  //   const { name, value } = event.target;
  //   setstate((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // };
  // console.log(state);
  // *************************************  cursor

  useEffect(() => {
    const cursorDot = document.querySelector("[data-cursor-dot]");
    const cursorOutline = document.querySelector("[data-cursor-outline]");
    window.addEventListener("mousemove", function (e) {
      const posX = e.clientX;
      const posY = e.clientY;

      cursorDot.style.left = `${posX}px`;
      cursorDot.style.top = `${posY}px`;
      cursorOutline.animate(
        {
          left: `${posX}px`,
          top: `${posY}px`,
        },
        { duration: 500, fill: "forwards" }
      );
    });
  }, []);


  return (
    <>
      <Header />
     
      <div className="cursor-dot" data-cursor-dot></div>
      <div className="curson-outline" data-cursor-outline></div>
      {/* /////////////////////////////// */}
      <div className="container-fluid position-relative mt-5 pt-5">
        <div className="row p-3 justify-content-center align-items-center">
          <h1 className="mb-4 text-center">Try To Submit 😉</h1>
          <div className="col-md-6 col-lg-4 col-sm-12  bg-light p-3 order-sm-2 mv-form">
            <div className="form  ">
              <div className="mb-3">
                <label className="form-label text-light">Email </label>
                <input
                  type="text"
                  name="email"
                  value={formik?.values?.email}
                  onChange={formik?.handleChange}
                  className="form-control"
                />
                {formik?.errors?.email && (
                  <p className="text-danger">{formik?.errors?.email}</p>
                )}
              </div>
              {/* /////////////////////////// */}
              <div className="mb-3">
                <label className="form-label text-light">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formik?.values?.password}
                  onChange={formik?.handleChange}
                  className="form-control"
                />
                {formik?.errors?.password && (
                  <p className="text-danger">{formik?.errors?.password}</p>
                )}
              </div>
              <button
                id="btn"
                onClick={() => {
                  if(formik?.values?.email == "" && formik?.values?.password == "")
                  {
                    formik?.handleSubmit()
                  }
                  else if(clicker == true)
                  {
                    clicks()
                  }
                  else{
                    ""
                  }
                }}
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
