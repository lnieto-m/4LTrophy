import { Route, Routes } from "react-router-dom";
import { Home } from "../Components/Screens/Home";
import { About } from "../Components/Screens/About";
import { App } from "../App";
import { Sponsors } from "../Components/Screens/Sponsors";

export const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="sponsors" element={<Sponsors />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Route>
    </Routes>
  );
};
