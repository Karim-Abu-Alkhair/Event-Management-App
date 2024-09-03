import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";

function Layout() {
  return (
    <div className="flex flex-col h-screen gap-4 bg-layout-bg">
      <aside className="w-1/8 bg-primary p-2 text-white ">
        <Navigation />
      </aside>
      <main className="flex-1  p-4 bg-white rounded-xl my-4 mr-4 ">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
