import { Route, Routes } from "react-router-dom";
import Index from "./Index";
import Calender from "./Calender/Calender";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Stripe from "./PayGateway/Stripe";
import Contactus from "./Contactus";
import "../Style/Style.css";

import "../JS/cursor.js";
import Form from "./Form.jsx";
import Calculater from "./Calculater.jsx";

const queryclient = new QueryClient();

export default function Layout() {
  return (
    <>
      {/************************************************************ */}
      <QueryClientProvider client={queryclient}>
        <Routes>
          <Route path="/" element={<Index />} />
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
