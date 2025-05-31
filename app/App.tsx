import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./routes";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ path,Component }) => (
          <Route key={path} path={path} Component={Component} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}
