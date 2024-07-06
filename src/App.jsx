import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import RootLayout from "./pages/root-layout";
import Lend from "./pages/lend";
import MyLoansPage from "./pages/my-loans";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <Lend /> },
        { path: "/my-loans", element: <MyLoansPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
