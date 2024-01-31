import { Fragment } from "react";
import MainPage from "./pages/MainPage";
import Menu from "./components/Menu";
import {
  createBrowserRouter,
  RouterProvider,
  useLocation
} from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Prices from './pages/Prices';
import { AnimatePresence } from "framer-motion";


function App() {

  const location = useLocation();
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Fragment>
                  <Menu />
                  <MainPage />
                </Fragment>,
    },
    {
      path: "/aboutme",
      element: <Fragment>
        <Menu />
        <AboutMe />
      </Fragment>
    },
    {
      path: "/portfolio",
      element: <Fragment>
        <Menu />
        <Portfolio />
      </Fragment>
    },
    {
      path: "/contact",
      element: <Fragment>
        <Menu />
        <Contact />
      </Fragment>
    },
    {
      path: "/price",
      element: <Fragment>
        <Menu />
        <Prices />
      </Fragment>
    }
  ]);

  return (
    <AnimatePresence>
      <RouterProvider router={router}/>
    </AnimatePresence>
  );
}

export default App;
