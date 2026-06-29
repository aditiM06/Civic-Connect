import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faFilter,
  faPlus,
  faMinus,
  faThumbsUp,
  faComment,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";

const issues = [
  {
    id: 1,
    title: "Large pothole near Vijay Nagar main road",
    location: "Vijay Nagar",
    status: "In Progress",
    severity: "High",
    category: "Road Damage",
    upvotes: 34,
    comments: 8,
    top: "58%",
    left: "18%",
  },
  {
    id: 2,
    title: "Garbage accumulation near public park",
    location: "Sector 12",
    status: "Verified",
    severity: "Medium",
    category: "Garbage",
    upvotes: 21,
    comments: 5,
    top: "32%",
    left: "61%",
  },
  {
    id: 3,
    title: "Broken street light near bus stop",
    location: "MG Road",
    status: "Assigned",
    severity: "Medium",
    category: "Street Light",
    upvotes: 18,
    comments: 3,
    top: "48%",
    left: "78%",
  },
  {
    id: 4,
    title: "Water leakage near colony gate",
    location: "Shastri Nagar",
    status: "Resolved",
    severity: "Low",
    category: "Water Leakage",
    upvotes: 12,
    comments: 2,
    top: "66%",
    left: "50%",
  },
  {
    id: 5,
    title: "Open manhole near service road",
    location: "Nehru Nagar",
    status: "Reported",
    severity: "High",
    category: "Open Manhole",
    upvotes: 29,
    comments: 7,
    top: "75%",
    left: "70%",
  },
];

function getPinColor(issue) {
  if (issue.status === "Resolved") {
    return "bg-emerald-600";
  }

  if (issue.status === "In Progress") {
    return "bg-blue-600";
  }

  if (issue.severity === "High") {
    return "bg-red-600";
  }

  return "bg-amber-500";
}

function NearbyIssues() {
  return (
    <div className="w-full text-slate-900">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Nearby Issues</h1>
        <p className="mt-2 text-sm text-slate-500">
          Explore civic issues reported around your area.
        </p>
      </div>

      <div className="grid min-h-[720px] grid-cols-1 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm lg:grid-cols-[340px_1fr]">
        {/* Left Panel */}
        <aside className="border-b border-slate-200 bg-white p-5 lg:border-b-0 lg:border-r">
          <div>
            <h2 className="text-xl font-bold">Live Issue Map</h2>
            <p className="mt-1 text-sm text-slate-500">
              {issues.length} issues visible
            </p>
          </div>

          {/* Filters */}
          <div className="mt-6 space-y-5">
            <div className="flex items-center gap-2 text-sm font-bold text-slate-700">
              <FontAwesomeIcon icon={faFilter} />
              Filters
            </div>

            <div>
              <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-400">
                Category
              </label>

              <select className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100">
                <option>All</option>
                <option>Road Damage</option>
                <option>Garbage</option>
                <option>Water Leakage</option>
                <option>Street Light</option>
                <option>Open Manhole</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-400">
                Status
              </label>

              <select className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100">
                <option>All</option>
                <option>Reported</option>
                <option>Verified</option>
                <option>Assigned</option>
                <option>In Progress</option>
                <option>Resolved</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-400">
                Severity
              </label>

              <select className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100">
                <option>All</option>
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
            </div>
          </div>

          {/* Legend */}
          <div className="mt-8">
            <h3 className="text-xs font-bold uppercase tracking-wide text-slate-400">
              Pin Legend
            </h3>

            <div className="mt-4 space-y-3 text-sm text-slate-600">
              <div className="flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-red-600"></span>
                High Severity
              </div>

              <div className="flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-amber-500"></span>
                Pending / Reported
              </div>

              <div className="flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-blue-600"></span>
                In Progress
              </div>

              <div className="flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-emerald-600"></span>
                Resolved
              </div>
            </div>
          </div>

          {/* Issue List */}
          <div className="mt-8 max-h-[270px] space-y-3 overflow-y-auto pr-1">
            {issues.map((issue) => (
              <div
                key={issue.id}
                className="rounded-2xl border border-slate-200 p-4 hover:bg-slate-50"
              >
                <div className="flex items-start gap-3">
                  <span
                    className={`mt-1 h-3 w-3 shrink-0 rounded-full ${getPinColor(
                      issue
                    )}`}
                  ></span>

                  <div>
                    <h4 className="line-clamp-1 text-sm font-bold text-slate-900">
                      {issue.title}
                    </h4>

                    <p className="mt-1 text-xs text-slate-500">
                      {issue.location} · {issue.status}
                    </p>

                    <div className="mt-2 flex gap-4 text-xs text-slate-500">
                      <span>
                        <FontAwesomeIcon icon={faThumbsUp} className="mr-1" />
                        {issue.upvotes}
                      </span>

                      <span>
                        <FontAwesomeIcon icon={faComment} className="mr-1" />
                        {issue.comments}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </aside>

        {/* Fake Map Area */}
        <section className="relative min-h-[600px] overflow-hidden bg-slate-200">
          {/* Map Grid Background */}
          <div className="absolute inset-0 opacity-70">
            <div className="grid h-full grid-cols-6 gap-6 p-8">
              {Array.from({ length: 36 }).map((_, index) => (
                <div
                  key={index}
                  className="rounded-xl border-4 border-slate-300 bg-slate-100/70"
                ></div>
              ))}
            </div>
          </div>

          {/* Area Labels */}
          <span className="absolute left-[15%] top-[35%] text-xs font-semibold text-slate-400">
            Vijay Nagar
          </span>

          <span className="absolute left-[57%] top-[25%] rounded-2xl bg-emerald-200/60 px-10 py-8 text-xs font-semibold text-emerald-700">
            Central Park
          </span>

          <span className="absolute left-[48%] top-[70%] text-xs font-semibold text-slate-400">
            Shastri Nagar
          </span>

          <span className="absolute left-[76%] top-[70%] text-xs font-semibold text-slate-400">
            Nehru Nagar
          </span>

          <span className="absolute left-[62%] top-[52%] text-xs font-semibold text-slate-400">
            MG Road
          </span>

          {/* Pins */}
          {issues.map((issue) => (
            <button
              key={issue.id}
              type="button"
              title={issue.title}
              className={`absolute flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white text-white shadow-lg transition hover:scale-110 ${getPinColor(
                issue
              )}`}
              style={{
                top: issue.top,
                left: issue.left,
              }}
            >
              <FontAwesomeIcon icon={faLocationDot} />
            </button>
          ))}

          {/* Zoom Controls */}
          <div className="absolute right-5 top-5 flex flex-col gap-3">
            <button className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-slate-700 shadow hover:bg-slate-100">
              <FontAwesomeIcon icon={faPlus} />
            </button>

            <button className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-slate-700 shadow hover:bg-slate-100">
              <FontAwesomeIcon icon={faMinus} />
            </button>
          </div>

          {/* Map Notice */}
          <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-blue-200 bg-white/90 p-4 text-sm text-slate-600 shadow-sm backdrop-blur md:right-auto md:max-w-md">
            <FontAwesomeIcon
              icon={faTriangleExclamation}
              className="mr-2 text-blue-600"
            />
            This is a visual map placeholder. Real interactive map will be added
            later using Leaflet.
          </div>
        </section>
      </div>
    </div>
  );
}

export default NearbyIssues;