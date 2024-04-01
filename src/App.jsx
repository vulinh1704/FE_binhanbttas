import "./index.css";

import { Route, Routes } from "react-router-dom";
import Landing from "./page/Landing";
import Service from "./page/Service";
import Layout from "./page/Layout";
import Tours from "./page/Tours";
import News from "./page/News";
import Admin from "./page/Admin";

function App() {
  return (
    <Routes>
      <Route path="" element={<Layout />}>
        <Route path="" element={<Landing />} />
        <Route path="service" element={<Service />} />
        <Route path="tours" element={<Tours />} />
        <Route path="news" element={<News />} />
      </Route>
      <Route path="admin" element={<Admin />} />
    </Routes>
  );
}
export default App;
