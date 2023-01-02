import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import DistanceSaleAgreement from "./components/DistanceSaleAgreement";
import PrivacyPolicy from "./components/PrivacyPolicy";
import DeliveryandReturns from "./components/Delivery&Returns";
import Contact from "./components/Contact";
import KVKK from "./components/KVKK";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/hifit" element={<Body/>} />
      <Route path="/DistanceSalesAgreement" element={<DistanceSaleAgreement/>} />
      <Route path="/PrivacyPolicy" element={<PrivacyPolicy/>} />
      <Route path="/Delivery&Returns" element={<DeliveryandReturns/>} />
      <Route path="/Contact" element={<Contact/>} />
      <Route path="/Kvkk" element={<KVKK/>} />
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
