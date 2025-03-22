import { Route, Routes } from "react-router-dom";
// import Index from "./Index";
import Calender from "./Calender/Calender";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Stripe from "./PayGateway/Stripe";
import Contactus from "./Contactus";
import "../Style/Style.css";
import "../Style/Loader.css";
import "../JS/cursor.js";
import Form from "./Form.jsx";
import Calculater from "./Calculater.jsx";
import { lazy, Suspense, useEffect, useState } from "react";
import Loader from "./Loader.jsx";
const Index = lazy(() => import("./Index"));

const queryclient = new QueryClient();

export default function Layout() {
  const [showlayout, setlayout] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setlayout(true);
    }, 2000);
    return () => clearTimeout(timer);
  });

  return (
    <>
      {/************************************************************ */}
      <QueryClientProvider client={queryclient}>
        <Routes>
          {/* ------------------  Route One */}
          <Route
            path="/"
            element={
              <Suspense
                fallback={
                  <div className="load">
                    <Loader />
                  </div>
                }
              >
                {showlayout ? (
                  <Index />
                ) : (
                  <div className="load">


                    <Loader />

                  </div>
                )}
              </Suspense>
            }
          />
          {/* ------------------  Route One */}
          <Route path="/calender" element={<Calender />} />
          <Route path="/stripe" element={<Stripe />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/form" element={<Form />} />
          <Route path="/calculater" element={<Calculater />} />
        </Routes>
      </QueryClientProvider>
    </>
  );
}
