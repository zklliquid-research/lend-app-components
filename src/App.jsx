import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import RootLayout from "./pages/root-layout";
import MyLoansPage from "./pages/my-loans";
import LendPage from "./pages/lend";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: (
            <p className=" text-yellow-50 text-[1rem] text-center">Dashboard</p>
          ),
        },
        { path: "lend", element: <LendPage /> },
        { path: "my-loans", element: <MyLoansPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
