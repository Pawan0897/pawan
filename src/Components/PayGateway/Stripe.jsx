import { Elements } from "@stripe/react-stripe-js";
import Header from "../Header";
import { loadStripe } from "@stripe/stripe-js";
import StripeForm from "./StripeForm";

export default function Stripe() {
  
  const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");
  const options = {
    mode: "payment",
    amount: 1099,
    currency: "usd",
    appearance: {
      theme: "stripe",
      variables: {
        colorPrimary: "#0570de",
        colorBackground: "#ffffff",
        colorText: "#000000",
        colorTextSecondary: "#ffffff",
      },
      rules: {
        ".Label": {
          color: "#ffffff",
        },
        ".Input": {
          color: "#000000",
        },
      },
    },
  };

  // //////////////////////////////////  cursor
  const cursorDot = document.querySelector("[data-cursor-dot]");
  const cursorOutline = document.querySelector("[data-cursor-outline]");
  window.addEventListener("mousemove", function (e) {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    // cursorOutline.style.left = `${posX}px`;
    // cursorOutline.style.top = `${posY}px`;

    cursorOutline.animate(
      {
        left: `${posX}px`,
        top: `${posY}px`,
      },
      { duration: 500, fill: "forwards" }
    );
  });

  // ////////////////////////////////////////
  return (
    <>
      <Header />
      <div className="cursor-dot" data-cursor-dot></div>
      <div className="curson-outline" data-cursor-outline></div>
      <div className="container stripe mt-3  pt-5">
        <h1 className="text-center mb-4">Pay Now!</h1>
        <div className="row m-auto d-flex justify-content-center align-items-center">
          <div className="col-md-5 p-4 stripe-b ">
            <Elements
              stripe={stripePromise}
              options={options}
              className="text-light bg-dark"
            >
              <StripeForm />
            </Elements>
          </div>
        </div>
      </div>
    </>
  );
}
