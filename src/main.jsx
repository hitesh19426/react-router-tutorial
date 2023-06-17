import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
  Form,
  Route,
  Routes,
} from "react-router-dom";
import App from "./App";
import "./index.css";
import Contact, { loader as contactLoader } from "./routes/contact";
import DeleteContact, { action as deleteAction } from "./routes/destroy";
import EditContact, { action as editAction } from "./routes/edit";
import ErrorPage from "./routes/error-page";
import Root, {
  loader as rootLoader,
  action as rootAction,
} from "./routes/root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: contactLoader,
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        loader: contactLoader,
        action: editAction,
      },
      {
        path: "contacts/:contactId/destroy",
        action: deleteAction,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />} errorElement={<ErrorPage />} loader={rootLoader} action={rootAction} >
          {/* <Route errorElement={<ErrorPage />}> */}
            {/* <Route path="contacts/:contactId" component={<Contact />} loader={contactLoader} action={contactAction} />
            <Route path="contacts/:contactId/edit" component={<EditContact />} loader={contactLoader} action={editAction} />
            <Route path="contacts/:contactId/destory" action={deleteAction} />
          </Route> */
        /* </Route> */
      /* // </Routes> */
    /* </BrowserRouter> */}
  </React.StrictMode>
);
