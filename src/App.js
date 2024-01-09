import { Fragment } from "react";
import MainPage from "./pages/MainPage";
import Menu from "./components/Menu";

function App() {
  return (
    <Fragment>
      <Menu />
      <MainPage />
    </Fragment>
  );
}

export default App;
