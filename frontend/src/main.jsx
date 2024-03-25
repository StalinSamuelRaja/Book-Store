import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider } from 'notistack';
import TopBar from "./components/home/TopBar.jsx";
import Footer from "./components/home/Footer.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <SnackbarProvider>
      <TopBar/>
      <App />
      <Footer/>
    </SnackbarProvider>
  </BrowserRouter>
);
