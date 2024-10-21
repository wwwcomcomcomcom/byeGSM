import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationLayout from "./components/navigationLayout";
import Home from "./components/page/home";
import OneseoPage from "./components/page/oneseo";
import WhyPage from "./components/page/why";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavigationLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="oneseo" element={<OneseoPage></OneseoPage>} />
          <Route path="why" element={<WhyPage></WhyPage>} />
        </Route>
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
