import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import User from "./pages/Users";
import UserDetail from "./pages/UserDetail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/Build-a-Multi-Page-React-Application-with-Routing" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="users" element={<User />} />  
          <Route path="users/:id" element={<UserDetail />} />  
        </Route>
      </Routes>
    </>
  );
}

export default App;
