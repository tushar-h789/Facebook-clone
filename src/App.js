import "./App.css";
import Regstration from "./pages/Regstration";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Home from "./components/Home";
import Login from "./pages/Login";
import RootLayout from "./components/RootLayout";
import Messege from "./pages/Messege";

let router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Regstration />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/facebook" element={<RootLayout />}>
        <Route index element={<Home />}></Route>
        <Route path="messege" element={<Messege/>}></Route>
      </Route>
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />

      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
