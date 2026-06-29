import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faUser,
  faArrowRight,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

function AuthPage() {
  const [isSignup, setIsSignup] = useState(false);
  const navigate = useNavigate();

  function handleDemoLogin() {
    navigate("/citizen");
  }

  function handleSubmit(event) {
    event.preventDefault();

    // TEMPORARY:
    // Real login/signup will be connected after backend APIs are ready.
    navigate("/citizen");
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-5 py-10 text-slate-900">
      <div className="grid w-full max-w-6xl grid-cols-1 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm lg:grid-cols-2">
        {/* Left Info Section */}
        <section className="hidden bg-blue-600 p-10 text-white lg:flex lg:flex-col lg:justify-between">
          <div>
            <Link to="/" className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-blue-600">
                <FontAwesomeIcon icon={faLocationDot} />
              </div>

              <span className="text-2xl font-bold">CivicConnect</span>
            </Link>

            <div className="mt-16">
              <h1 className="text-4xl font-bold leading-tight">
                Report civic issues faster. Track them transparently.
              </h1>

              <p className="mt-5 max-w-md text-blue-100">
                Login to report problems, view your submissions, and track
                updates from local authorities.
              </p>
            </div>
          </div>

          <div className="rounded-3xl bg-white/10 p-5">
            <p className="text-sm font-medium text-blue-100">
              Demo access is available for recruiters and evaluators.
            </p>
          </div>
        </section>

        {/* Right Auth Section */}
        <section className="flex min-h-[650px] items-center justify-center p-6 sm:p-10">
          <div className="w-full max-w-md">
            {/* Mobile Logo */}
            <Link to="/" className="mb-8 flex items-center gap-3 lg:hidden">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white">
                <FontAwesomeIcon icon={faLocationDot} />
              </div>

              <span className="text-xl font-bold">CivicConnect</span>
            </Link>

            {/* Flip Card Wrapper */}
            <div className="[perspective:1200px]">
              <div
  className={`relative min-h-[620px] transition-transform duration-500 [transform-style:preserve-3d] ${
    isSignup ? "[transform:rotateY(180deg)]" : ""
  }`}
>
                {/* Login Card */}
                <div className="absolute inset-0 overflow-y-auto rounded-3xl border border-slate-200 bg-white p-7 shadow-sm [backface-visibility:hidden]">
                  <div>
                    <h2 className="text-3xl font-bold text-slate-900">
                      Welcome back
                    </h2>

                    <p className="mt-2 text-sm text-slate-500">
                      Login to continue reporting and tracking civic issues.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                    <div>
                      <label className="mb-2 block text-sm font-bold text-slate-700">
                        Email
                      </label>

                      <div className="relative">
                        <input
                          type="email"
                          placeholder="you@example.com"
                          className="w-full rounded-2xl border border-slate-300 px-4 py-3 pl-11 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                        />

                        <FontAwesomeIcon
                          icon={faEnvelope}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-bold text-slate-700">
                        Password
                      </label>

                      <div className="relative">
                        <input
                          type="password"
                          placeholder="Enter your password"
                          className="w-full rounded-2xl border border-slate-300 px-4 py-3 pl-11 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                        />

                        <FontAwesomeIcon
                          icon={faLock}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="flex w-full items-center justify-center rounded-2xl bg-blue-600 px-5 py-4 text-sm font-bold text-white transition hover:bg-blue-700"
                    >
                      Login
                      <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                    </button>
                  </form>

                  <button
                    type="button"
                    onClick={handleDemoLogin}
                    className="mt-4 w-full rounded-2xl border border-slate-300 px-5 py-4 text-sm font-bold text-slate-700 transition hover:bg-slate-100"
                  >
                    Login as Demo User
                  </button>

                  <p className="mt-6 text-center text-sm text-slate-500">
                    Don&apos;t have an account?{" "}
                    <button
                      type="button"
                      onClick={() => setIsSignup(true)}
                      className="font-bold text-blue-600 hover:text-blue-700"
                    >
                      Sign up
                    </button>
                  </p>
                </div>

                {/* Signup Card */}
                <div className="absolute inset-0 overflow-y-auto rounded-3xl border border-slate-200 bg-white p-7 shadow-sm [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <div>
                    <h2 className="text-3xl font-bold text-slate-900">
                      Create account
                    </h2>

                    <p className="mt-2 text-sm text-slate-500">
                      Join CivicConnect and start reporting local issues.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="mt-4 space-y-5">
                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-sm font-bold text-slate-700">
                          First Name
                        </label>

                        <div className="relative">
                          <input
                            type="text"
                            placeholder="First Name"
                            className="w-full rounded-2xl border border-slate-300 px-4 py-3 pl-11 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                          />

                          <FontAwesomeIcon
                            icon={faUser}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-bold text-slate-700">
                          Last Name
                        </label>

                        <input
                          type="text"
                          placeholder="Last Name"
                          className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-bold text-slate-700">
                        Email
                      </label>

                      <div className="relative">
                        <input
                          type="email"
                          placeholder="you@example.com"
                          className="w-full rounded-2xl border border-slate-300 px-4 py-3 pl-11 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                        />

                        <FontAwesomeIcon
                          icon={faEnvelope}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-bold text-slate-700">
                        Password
                      </label>

                      <div className="relative">
                        <input
                          type="password"
                          placeholder="Create a password"
                          className="w-full rounded-2xl border border-slate-300 px-4 py-3 pl-11 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                        />

                        <FontAwesomeIcon
                          icon={faLock}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="flex w-full items-center justify-center rounded-2xl bg-blue-600 px-5 py-4 text-sm font-bold text-white transition hover:bg-blue-700"
                    >
                      Sign Up
                      <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                    </button>
                  </form>

                  <button
                    type="button"
                    onClick={handleDemoLogin}
                    className="mt-4 w-full rounded-2xl border border-slate-300 px-5 py-4 text-sm font-bold text-slate-700 transition hover:bg-slate-100"
                  >
                    Continue as Demo User
                  </button>

                  <p className="mt-6 text-center text-sm text-slate-500">
                    Already have an account?{" "}
                    <button
                      type="button"
                      onClick={() => setIsSignup(false)}
                      className="font-bold text-blue-600 hover:text-blue-700"
                    >
                      Login
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AuthPage;