import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import "./App.css";
import ListForm from "./components/ListForm";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <div className="app_form">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/listform" element={<ListForm />} />
        </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
