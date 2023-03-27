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
import Friends from "./pages/Friends";
import Groups from "./pages/Groups";
import Notification from "./pages/Notification";
import FriendList from "./components/FriendList";
import Suggestions from "./components/Suggestions";
import FriendRequest from "./components/FriendRequest";
import GroupInfo from "./components/GroupInfo";
import MemberRequest from "./components/MemberRequest";
import MemberList from "./components/MemberList";
import MyGroup from "./components/MyGroup";
import GroupList from "./components/GroupList";
import Block from "./pages/Block";
import Settings from "./pages/Settings";
import Watch from "./pages/Watch";

let router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Regstration />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/facebook" element={<RootLayout />}>
        <Route index element={<Home />}></Route>
        <Route path="friends" element={<Friends />}>
          <Route path="friendlist" element={<FriendList />}></Route>
          <Route path="suggestions" element={<Suggestions />}></Route>
          <Route path="friendrequest" element={<FriendRequest />}></Route>
        </Route>

        <Route path="notification" element={<Notification />}></Route>
        <Route path="groups" element={<Groups />}>
          <Route path="grouplist" element={<GroupList />}></Route>
          <Route path="mygroup" element={<MyGroup />}>
            <Route path="groupinfo" element={<GroupInfo />}>
              <Route path="memberrequest" element={<MemberRequest />}></Route>
              <Route path="memberlist" element={<MemberList />}></Route>
            </Route>
          </Route>
        </Route>
        <Route path="messege" element={<Messege />}></Route>
        <Route path="block" element={<Block />}></Route>
        <Route path="settings" element={<Settings />}></Route>
        <Route path="video" element={<Watch />}></Route>
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
