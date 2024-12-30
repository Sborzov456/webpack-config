import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";

const root = document.getElementById("root");

const router = createBrowserRouter([
    {
        path: "/",
        element: <></>
    },
]);

createRoot(root).render(<RouterProvider router={router} />);
