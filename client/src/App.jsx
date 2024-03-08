import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Protectroute from "./components/auth/Protectroute";
import { Layoutloader } from "./components/layout/Loaders";

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Groups = lazy(() => import("./pages/Groups"));
const Chat = lazy(() => import("./pages/Chat"));
const Notfound = lazy(() => import("./pages/Notfound"));
let user = true;
const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Layoutloader />}>
        <Routes>
          <Route element={<Protectroute user={user} />}>
            <Route path="/" element={<Home />} />
            <Route path="/groups" element={<Groups />} />
            <Route path="/chat:chatId" element={<Chat />} />
          </Route>
          <Route
            path="/login"
            element={
              <Protectroute user={!user} redirect="/">
                <Login />
              </Protectroute>
            }
          />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
