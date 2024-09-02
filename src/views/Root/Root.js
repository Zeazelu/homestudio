import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "../../components/Header/Header";
import MainPageView from "../MainPageView/MainPageView";

function Root() {
  return (
    <BrowserRouter>
      <Header />
      <MainPageView />
    </BrowserRouter>
  );
}

export default Root;
