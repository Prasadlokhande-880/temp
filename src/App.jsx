import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Login from './pages/login'
import SignUp from "./pages/signup";
import SuccessStories from "./pages/SuccessStories";
import Problems from "./pages/Problems";
import Courses from "./pages/Courses";
import About from "./pages/About";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/courses",
    element: <Courses />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/successStories",
    element: <SuccessStories />,
  },
  {
    path: "/problems",
    element: <Problems />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
