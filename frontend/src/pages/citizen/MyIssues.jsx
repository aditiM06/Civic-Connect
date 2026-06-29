import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faClock,
  faArrowRight,
  faCircleCheck,
  faTriangleExclamation,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";

const issues = [
  {
    id: 1,
    title: "Large pothole near main road junction",
    category: "Road Damage",
    location: "Vijay Nagar, Sector 3",
    status: "Reported",
    severity: "High",
    date: "12 Jan 2026",
  },
  {
    id: 2,
    title: "Garbage accumulation near public park",
    category: "Garbage",
    location: "Scheme 54, Indore",
    status: "In Progress",
    severity: "Medium",
    date: "10 Jan 2026",
  },
  {
    id: 3,
    title: "Broken street light near residential lane",
    category: "Street Light",
    location: "Palasia Main Road",
    status: "Resolved",
    severity: "Low",
    date: "08 Jan 2026",
  },
];

function getStatusStyle(status) {
  if (status === "Resolved") {
    return "bg-emerald-50 text-emerald-700 border-emerald-200";
  }

  if (status === "In Progress") {
    return "bg-blue-50 text-blue-700 border-blue-200";
  }

  return "bg-amber-50 text-amber-700 border-amber-200";
}

function getSeverityStyle(severity) {
  if (severity === "High") {
    return "text-red-600";
  }

  if (severity === "Medium") {
    return "text-amber-600";
  }

  return "text-emerald-600";
}

function getStatusIcon(status) {
  if (status === "Resolved") {
    return faCircleCheck;
  }

  if (status === "In Progress") {
    return faSpinner;
  }

  return faTriangleExclamation;
}

function MyIssues() {
  return (
    <div className="w-full text-slate-900">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-3xl font-bold">My Issues</h1>
          <p className="mt-2 text-sm text-slate-500">
            Track all civic issues reported by you.
          </p>
        </div>

        <Link
          to="/citizen/report"
          className="rounded-full bg-blue-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-700"
        >
          Report New Issue
        </Link>
      </div>

      {/* Summary Cards */}
      <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-medium text-slate-500">Total Reports</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900">03</h2>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-medium text-slate-500">In Progress</p>
          <h2 className="mt-2 text-3xl font-bold text-blue-600">01</h2>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-medium text-slate-500">Resolved</p>
          <h2 className="mt-2 text-3xl font-bold text-emerald-600">01</h2>
        </div>
      </div>

      {/* Issue List */}
      <div className="mt-8 space-y-5">
        {issues.map((issue) => (
          <article
            key={issue.id}
            className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-center">
              <div className="flex gap-4">
                <div className="hidden h-24 w-28 shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-slate-400 sm:flex">
                  Image
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
                      {issue.category}
                    </span>

                    <span
                      className={`rounded-full border px-3 py-1 text-xs font-bold ${getStatusStyle(
                        issue.status
                      )}`}
                    >
                      <FontAwesomeIcon
                        icon={getStatusIcon(issue.status)}
                        className="mr-1"
                      />
                      {issue.status}
                    </span>
                  </div>

                  <h2 className="mt-3 text-lg font-bold text-slate-900">
                    {issue.title}
                  </h2>

                  <div className="mt-2 flex flex-wrap gap-4 text-sm text-slate-500">
                    <span>
                      <FontAwesomeIcon
                        icon={faLocationDot}
                        className="mr-2 text-blue-500"
                      />
                      {issue.location}
                    </span>

                    <span>
                      <FontAwesomeIcon
                        icon={faClock}
                        className="mr-2 text-slate-400"
                      />
                      {issue.date}
                    </span>
                  </div>

                  <p className="mt-2 text-sm">
                    Severity:{" "}
                    <span className={`font-bold ${getSeverityStyle(issue.severity)}`}>
                      {issue.severity}
                    </span>
                  </p>
                </div>
              </div>

              <Link
                to={`/citizen/issues/${issue.id}`}
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-5 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-100"
              >
                View Details
                <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default MyIssues;