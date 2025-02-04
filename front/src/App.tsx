import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Notice from "./pages/Notice/Notice";
import { RoomProvider } from "./context/RoomContext";

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
  return (
    <RoomProvider>
      <RouterProvider router={router} />
    </RoomProvider>
  );
}

export default App;
