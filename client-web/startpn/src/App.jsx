import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignIn";
import GlobalStyle from "./global/global";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />} />
        </Routes>
        <GlobalStyle />
      </BrowserRouter>
    </>
  );
}
