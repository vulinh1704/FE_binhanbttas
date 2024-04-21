import "./index.css";
import Cookies from "js-cookie";
import { Route, Routes } from "react-router-dom";
import Landing from "./page/Landing";
import Service from "./page/Service";
import Layout from "./page/Layout";
import Tours from "./page/Tours";
import News from "./page/News";
import AdminLogin from "./page/Admin/AdminLogin";
import Contact from "./page/Contact";
import AboutUs from "./page/AboutUs";
import BlogDetails from "./page/BlogDetails";
import NotFound from "./page/NotFound";
import AdminLayout from "./page/Admin/AdminLayout";
import AdminHome from "./page/Admin/AdminHome";
import AdminCheckContact from "./page/Admin/AdminCheckContact";
import AdminListBlogs from "./page/Admin/AdminListBlogs";
import Search from "./page/Search";

function App() {
  const token = Cookies.get("token");
  return (
    <Routes>
      <Route path="" element={<Layout />}>
        <Route path="" element={<Landing />} />
        <Route path=":id" element={<BlogDetails />} />
        <Route path="service" element={<Service />} />
        <Route path="tours" element={<Tours />} />
        <Route path="results" element={<Search />} />
        <Route path="news" element={<News />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route path="admin" element={<AdminLayout />}>
        <Route
          path=""
          element={token === undefined ? <AdminLogin /> : <AdminHome />}
        />
        <Route
          path="check-contact"
          element={<AdminCheckContact token={token} />}
        />
        <Route path="list-blog" element={<AdminListBlogs token={token} />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
export default App;
