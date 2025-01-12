import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Notice from "./pages/Notice/Notice";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />, // "/" URL에서는 Home 컴포넌트 렌더링
  },
  {
    path: "/notice",
    element: <Notice />, // "/notice" URL에서는 Notice 컴포넌트 렌더링
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
