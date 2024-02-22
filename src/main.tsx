import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import ContactPage from "./pages/ContactPage.tsx";
import OurRooms from "./pages/OurRooms.tsx";
import QuotesPage from "./pages/QuotesPage.tsx";
import RoomPage from "./pages/RoomPage.tsx";
import Homepage from "./pages/StartPage.tsx";
import YogaPage from "./pages/YogaPage.tsx";
import SideMenu from "./SideMenu.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index Component={Homepage} />
      <Route path="menu" Component={SideMenu} />
      <Route Component={App}>
        <Route path="our-rooms" Component={OurRooms} />
        <Route path="our-rooms/:id" Component={RoomPage} />
        <Route path="yoga" Component={YogaPage} />
        <Route path="contact" Component={ContactPage} />
        <Route path="inspirational-quotes" Component={QuotesPage} />
        <Route path="*" element={<span>Sidan finns inte..</span>} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
