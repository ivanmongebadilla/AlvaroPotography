import MainPage from "./pages/MainPage";
import Menu from "./components/Menu";
import {
  Routes,
  useLocation,
  Route
} from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Prices from './pages/Prices';
import { AnimatePresence } from "framer-motion";


function App() {

  const location = useLocation();
  
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Fragment>
  //                 <Menu />
  //                 <MainPage />
  //               </Fragment>,
  //   },
  //   {
  //     path: "/aboutme",
  //     element: <Fragment>
  //       <Menu />
  //       <AboutMe />
  //     </Fragment>
  //   },
  //   {
  //     path: "/portfolio",
  //     element: <Fragment>
  //       <Menu />
  //       <Portfolio />
  //     </Fragment>
  //   },
  //   {
  //     path: "/contact",
  //     element: <Fragment>
  //       <Menu />
  //       <Contact />
  //     </Fragment>
  //   },
  //   {
  //     path: "/price",
  //     element: <Fragment>
  //       <Menu />
  //       <Prices />
  //     </Fragment>
  //   }
  // ]);


  return (
    // <RouterProvider router={router}/>
    <div>
      <Menu />
      <AnimatePresence mode="wait">
          <Routes location={location} key={location.key}>
            <Route exact path="/" element={<MainPage/>}/>
            <Route path="/aboutme" element={<AboutMe/>}/>
            <Route path="/portfolio" element={<Portfolio/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/price" element={<Prices/>}/>
          </Routes>
      </AnimatePresence>
    </div>
    
  );
}

export default App;
