import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Header from "../components/layout/Header.js";
import DashhBoard from "../components/pages/TweetsList";

import Login from "../components/auth/Login";
import React from "react";


function RequireAuth({ children }) {
  let isAuthenticated = localStorage.getItem("token");
  return isAuthenticated ? children : <Navigate to={"/login"} />;
}

function App() {


  return (
    <div className="d-flex  w-100 h-100 flex-column" id="project">
       {window.location.pathname !== "/" && <Header />}
      <div
        className={`d-flex  w-100 h-100 flex-column `}
      >
        <Routes>
          <Route
            path="/login"
            element={
                <Login />
            }
          />
          <Route
            path="/"
            element={
              <RequireAuth>
                <DashhBoard/>
              </RequireAuth>
            }
          />
        </Routes>
      </div>
    </div>
  );
}
function Routing() {
  return (
      <App />
  );
}

export default Routing;
