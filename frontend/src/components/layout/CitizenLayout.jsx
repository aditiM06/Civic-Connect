import { useState } from "react";
import { Link, Outlet } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import Sidebar from "./Sidebar";
import { citizenLinks } from "../../data/sidebarLinks";

function CitizenLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Sidebar
        links={citizenLinks}
        userName="UserName_02"
        role="Citizen"
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* Small top action bar */}
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 px-4 py-3 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <button
            type="button"
            onClick={() => setIsSidebarOpen(true)}
            className="flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm hover:bg-slate-100"
          >
            <FontAwesomeIcon icon={faBars} />
            Menu
          </button>

          <Link
  to="/citizen"
  className="text-sm font-semibold text-slate-500 hover:text-blue-600"
>
  Citizen Portal
</Link>
        </div>
      </header>

      <main className="min-h-screen px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default CitizenLayout;