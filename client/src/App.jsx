import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Reviewer from "./pages/Reviewer";
import Flashcard from "./pages/Flashcard";
import NoPage from "./pages/NoPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


const App = () => {
  const routes = [
    { path: "/", element: <Home /> },
    { path: "/reviewer", element: <Reviewer /> },
    { path: "/quiz", element: <Quiz /> },
    { path: "/flashcard", element: <Flashcard /> },
    { path: "/*", element: <NoPage /> },
  ];

  return (
    <div>
      <Navbar />
      <Routes>
        {routes.map((route, i) => (
          <Route key={i} path={route.path} element={route.element} />
        ))}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
