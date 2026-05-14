import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import PostForm from "./components/PostForm";
import Register from "./components/Register";
import AuthProvider from "./context/AuthContext.jsx";
import ProtectedPostForm from "./components/ProtectPostForm.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {/* {needs to be logged in} */}

          <Route
            path="/newPost"
            element={
              <ProtectedPostForm>
                <PostForm />
              </ProtectedPostForm>
            }
          />
          <Route
            path="/editPost/:id"
            element={
              <ProtectedPostForm>
                <PostForm />
              </ProtectedPostForm>
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
);
