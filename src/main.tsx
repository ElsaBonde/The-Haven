import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import RoomPage from "./pages/RoomPage.tsx";
import Homepage from "./pages/StartPage.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index Component={Homepage} />
      <Route Component={App}>
        <Route path="rooms/:id" Component={RoomPage} />
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
