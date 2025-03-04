import { useEffect, useState } from "react";
import { FaDivide } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { ImCross } from "react-icons/im";

import Header from "./Header";
export default function Calculater() {
 
  // ****************************************************************
  const [value1, setvalue1] = useState(0);
  const [value2, setvalue2] = useState(0);
  const cal = (ope) => {
    switch (ope) {
      case "+":
        setvalue1(Number(value1) + Number(value2));
        break;
      case "-":
        setvalue1(Number(value1) - Number(value2));
        break;
      case "*":
        setvalue1(Number(value1) * Number(value2));
        break;
      case "/":
        setvalue1(Number(value1) / Number(value2));
        break;
      default:
        break;
    }
  };
//   ******************************************
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
  }, [])

  return (
    <>
      <Header />
      <div className="cursor-dot" data-cursor-dot></div>
      <div className="curson-outline" data-cursor-outline></div>
      <div className="calculater-block mt-5 container">
        <div className="row">
          <h1 className="text-center">Calculate Now!</h1>

          <div className="col-md-6 col-lg-4 offset-md-4">
            <div className="cal-block">
              {/* ************************ */}
              <h1 className="bgcolortext">{value1}</h1>
              <div className="calculater">
                <div className="field">
                  <div className="input-box">
                    {/* ************************ */}
                    <input
                      type="text"
                      onChange={(e) => setvalue1(e.target.value)}
                    />
                  </div>
                </div>
                <div className="field mt-4">
                  <div className="input-box">
                    {/* ************************ */}
                    <input
                      type="text"
                      onChange={(e) => setvalue2(e.target.value)}
                    />
                  </div>
                </div>
                <div className="cal-process d-flex justify-content-center align-items-center">
                  <div className="calculate-btn mt-5">
                    {/* ************************Plus */}
                    <button onClick={() => cal("+")}>
                      <i className="bgcolortext">
                        <FaPlus />
                      </i>
                    </button>

                    {/* ************************  Minus */}
                    <button onClick={() => cal("-")}>
                      <i className="bgcolortext">
                        <FaMinus />
                      </i>
                    </button>

                    {/* ************************ Multiply*/}
                    <button onClick={() => cal("*")}>
                      <i className="bgcolortext">
                        <ImCross />
                      </i>
                    </button>

                    {/* ************************ Divided */}
                    <button onClick={() => cal("/")}>
                      <i className="bgcolortext">
                        <FaDivide />
                      </i>
                    </button>
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
