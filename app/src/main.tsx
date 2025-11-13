import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import './assets/css/styles.css'
import App from './App.tsx'
import Detail from "./pages/detail/index.tsx";


const router = createBrowserRouter([
  {  path: "/", element: <App /> },
  {  path: "/detail", element: <Detail /> },
]);

const root = document.getElementById("root");

if (!root) throw new Error("Root element not found");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />,
)
