import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router"

const Footer = () => {
  return (
    <footer className="bg-[#111C36] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="text-blue-400 text-xl"
              />
              <h2 className="text-2xl font-bold text-white">
                CivicConnect
              </h2>
            </div>

            <p className="text-gray-400 leading-7">
              AI-powered civic issue reporting for smarter, more responsive
              cities.
            </p>
          </div>

          {/* Citizens */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5">
              Citizens
            </h3>

            <ul className="space-y-3">
              <li>
                <Link
                  href="/report"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  Report Issue
                </Link>
              </li>

              <li>
                <Link
                  href="/reports"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  Track Report
                </Link>
              </li>

              <li>
                <Link
                  href="/map"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  Issue Map
                </Link>
              </li>

              <li>
                <Link
                  href="/community"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  Community
                </Link>
              </li>
            </ul>
          </div>

          {/* Authorities */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5">
              Authorities
            </h3>

            <ul className="space-y-3">
              <li>
                <Link
                  href="/admin/login"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  Municipal Login
                </Link>
              </li>

              <li>
                <Link
                  href="/admin/dashboard"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  Admin Dashboard
                </Link>
              </li>

              <li>
                <Link
                  href="/analytics"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  Analytics
                </Link>
              </li>

              <li>
                <Link
                  href="/api"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  API Access
                </Link>
              </li>
            </ul>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5">
              Platform
            </h3>

            <ul className="space-y-3">
              <li>
                <Link
                  href="/how-it-works"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  How It Works
                </Link>
              </li>

              <li>
                <Link
                  href="/privacy"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  href="/terms"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  Terms of Use
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-gray-700 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} CivicConnect. Making cities better
            together.
          </p>

          <div className="flex items-center gap-2 text-sm text-gray-400">
            <FontAwesomeIcon
              icon={faShieldHalved}
              className="text-green-400"
            />
            <span>Secure &amp; Encrypted</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;