import { Link, NavLink, useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

function Sidebar({
  links = [],
  userName = "UserName_02",
  role = "Citizen",
  isOpen,
  onClose,
}) {

  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    if (onClose) {
      onClose();
    }
    navigate("/auth", { replace: true });
}


  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <button
          type="button"
          aria-label="Close sidebar overlay"
          onClick={onClose}
          className="fixed inset-0 z-40 bg-slate-950/40 backdrop-blur-sm"
        ></button>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-72 flex-col border-r border-slate-200 bg-white px-5 py-5 shadow-xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Top */}
        <div className="flex items-center justify-between">
          <Link
            to="/citizen"
            onClick={onClose}
            className="flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white">
              <FontAwesomeIcon icon={faLocationDot} />
            </div>

            <span className="text-lg font-bold text-slate-900">
              CivicConnect
            </span>
          </Link>

          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full text-slate-500 hover:bg-slate-100 hover:text-slate-900"
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>

        {/* Profile */}
        <div className="mt-8 flex flex-col items-center border-b border-slate-200 pb-6">
          <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-slate-900 bg-slate-100 text-3xl font-bold text-slate-700">
            {userName.charAt(0)}
          </div>

          <h2 className="mt-4 text-lg font-semibold text-slate-800">
            {userName}
          </h2>

          <p className="text-sm text-slate-500">{role}</p>
        </div>

        {/* Navigation */}
        <nav className="mt-6 flex flex-1 flex-col gap-2">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
                  isActive
                    ? "bg-slate-900 text-white"
                    : "text-slate-700 hover:bg-slate-100"
                }`
              }
            >
              <FontAwesomeIcon icon={link.icon} className="text-base" />
              <span>{link.label}</span>
            </NavLink>
          ))}
        </nav>

        {/* Logout */}
        <button
  type="button"
  onClick={handleLogout}
  className="mt-6 rounded-xl border border-slate-300 px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100"
>
  Logout
</button>
      </aside>
    </>
  );
}

export default Sidebar;