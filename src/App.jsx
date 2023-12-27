import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPageView from "./views/LoginPageView";
import LoginPageController from "./controllers/LoginPageController";
import MainPageController from "./controllers/MainPageController";
import HeaderView from "./views/HeaderView";
import DetailController from "./controllers/DetailController";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderView />
        <Routes>
          <Route path="/" element={<LoginPageController />} />
          <Route path="/home" element={<MainPageController />} />
          <Route path="/coin/:id" element={<DetailController />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
