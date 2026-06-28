import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faRobot,
  faChartLine,
  faCircleCheck,
  faCamera,
  faMapLocationDot,
  faUsers,
  faArrowRight,
  faThumbsUp,
  faComment,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";

function LandingPage() {
  const reports = [
    {
      status: "In Progress",
      severity: "High",
      title: "Large pothole near Vijay Nagar main road",
      location: "Vijay Nagar, Main Road",
      upvotes: 34,
      comments: 8,
      date: "2026-06-20",
    },
    {
      status: "Verified",
      severity: "Medium",
      title: "Garbage accumulation near public park",
      location: "Central Park, Sector 12",
      upvotes: 21,
      comments: 5,
      date: "2026-06-21",
    },
    {
      status: "Assigned",
      severity: "Medium",
      title: "Broken street light near bus stop",
      location: "Bus Stop 14, MG Road",
      upvotes: 18,
      comments: 3,
      date: "2026-06-19",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Navbar */}
      <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 text-white">
              <FontAwesomeIcon icon={faLocationDot} />
            </div>
            <h1 className="text-xl font-bold text-white">CivicConnect</h1>
          </div>

          <ul className="hidden items-center gap-8 text-sm font-medium text-slate-200 md:flex">
            <li>
              <a href="#home" className="hover:text-blue-300">
                Home
              </a>
            </li>
            <li>
              <a href="#how-it-works" className="hover:text-blue-300">
                How it works
              </a>
            </li>
            <li>
              <a href="#live-reports" className="hover:text-blue-300">
                Live Reports
              </a>
            </li>
          </ul>

          <button className="rounded-full bg-blue-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-600">
            Report Issue
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative flex min-h-screen items-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://c.ndtvimg.com/2025-07/bd7nb4os_indore_625x300_17_July_25.jpeg?im=FeatureCrop,algorithm=dnn,width=1200,height=738')",
        }}
      >
        <div className="absolute inset-0 bg-slate-950/75"></div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 pt-24">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-300/30 bg-white/10 px-4 py-2 text-sm font-medium text-blue-100 backdrop-blur">
              <FontAwesomeIcon icon={faRobot} />
              AI-Powered Civic Technology Platform
            </div>

            <h1 className="text-4xl font-extrabold leading-tight text-white md:text-6xl">
              Report Civic Issues. Track Real Solutions.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              Citizens report public problems. AI categorizes and prioritizes
              issues. Municipal authorities resolve them faster with
              transparent tracking.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button className="rounded-full bg-blue-500 px-7 py-3 font-semibold text-white transition hover:bg-blue-600">
                Report an Issue
                <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
              </button>

              <button className="rounded-full border border-white/30 bg-white/10 px-7 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/20">
                View Nearby Issues
              </button>
            </div>

            <div className="mt-12 grid max-w-2xl grid-cols-3 gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/10 p-5 text-center backdrop-blur">
                <h2 className="text-3xl font-bold text-white">2,847</h2>
                <p className="mt-1 text-sm text-slate-300">Issues Reported</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 p-5 text-center backdrop-blur">
                <h2 className="text-3xl font-bold text-white">1,654</h2>
                <p className="mt-1 text-sm text-slate-300">Resolved</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 p-5 text-center backdrop-blur">
                <h2 className="text-3xl font-bold text-white">94%</h2>
                <p className="mt-1 text-sm text-slate-300">Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-semibold text-blue-600">How it works</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Simple reporting. Smarter resolution.
            </h2>
            <p className="mt-4 text-slate-600">
              CivicConnect keeps the citizen flow fast while helping officials
              understand what needs urgent attention.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-4">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                <FontAwesomeIcon icon={faCamera} />
              </div>
              <h3 className="text-lg font-bold">Report</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Citizens upload a photo, add location, and submit the issue in
                under one minute.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-100 text-purple-600">
                <FontAwesomeIcon icon={faRobot} />
              </div>
              <h3 className="text-lg font-bold">AI Assists</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                AI suggests category, severity, summary, and priority reason for
                faster review.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-600">
                <FontAwesomeIcon icon={faUsers} />
              </div>
              <h3 className="text-lg font-bold">Verify</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Community members upvote and verify real issues to reduce fake
                or duplicate complaints.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100 text-green-600">
                <FontAwesomeIcon icon={faCircleCheck} />
              </div>
              <h3 className="text-lg font-bold">Resolve</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Officials update status transparently from reported to resolved.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Live Reports */}
      <section id="live-reports" className="bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="font-semibold text-blue-600">Live community reports</p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Real issues being tracked right now
              </h2>
              <p className="mt-3 text-slate-600">
                A transparent view of civic problems reported by citizens.
              </p>
            </div>

            <button className="font-semibold text-blue-600 hover:text-blue-700">
              View all on map
              <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </button>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {reports.map((report) => (
              <div
                key={report.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-700">
                    {report.status}
                  </span>

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-bold ${
                      report.severity === "High"
                        ? "bg-red-100 text-red-700"
                        : "bg-amber-100 text-amber-700"
                    }`}
                  >
                    {report.severity}
                  </span>
                </div>

                <h3 className="text-lg font-bold">{report.title}</h3>

                <p className="mt-3 text-sm text-slate-500">
                  <FontAwesomeIcon icon={faMapLocationDot} className="mr-2" />
                  {report.location}
                </p>

                <div className="mt-5 flex flex-wrap gap-5 text-sm text-slate-500">
                  <span>
                    <FontAwesomeIcon icon={faThumbsUp} className="mr-2" />
                    {report.upvotes}
                  </span>

                  <span>
                    <FontAwesomeIcon icon={faComment} className="mr-2" />
                    {report.comments}
                  </span>

                  <span>
                    <FontAwesomeIcon icon={faCalendarDays} className="mr-2" />
                    {report.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-emerald-700 px-6 py-20 text-center text-white">
        <h2 className="text-3xl font-bold md:text-4xl">
          Your Voice Builds a Better City
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-emerald-50">
          Join citizens making a real difference — one report at a time.
        </p>

        <button className="mt-8 rounded-full bg-white px-8 py-3 font-bold text-emerald-700 transition hover:bg-emerald-50">
          Join CivicConnect — It&apos;s Free
        </button>
      </section>
    </div>
  );
}

export default LandingPage;