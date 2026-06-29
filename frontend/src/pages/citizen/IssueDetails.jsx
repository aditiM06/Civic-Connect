import { Link, useParams } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faLocationDot,
  faClock,
  faTriangleExclamation,
  faCircleCheck,
  faSpinner,
  faThumbsUp,
  faCommentDots,
  faUserShield,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";

const issueDetails = {
  1: {
    id: 1,
    title: "Large pothole near main road junction",
    category: "Road Damage",
    location: "Vijay Nagar, Sector 3",
    status: "Reported",
    severity: "High",
    date: "12 Jan 2026",
    upvotes: 24,
    comments: 6,
    priorityScore: 87,
    description:
      "A large pothole has formed near the main road junction. It is causing traffic slowdown and may be dangerous for two-wheelers during evening hours.",
    aiSummary:
      "AI detected a high-severity road damage issue. Suggested category: Road Damage. Recommended priority: High.",
  },
  2: {
    id: 2,
    title: "Garbage accumulation near public park",
    category: "Garbage",
    location: "Scheme 54, Indore",
    status: "In Progress",
    severity: "Medium",
    date: "10 Jan 2026",
    upvotes: 18,
    comments: 4,
    priorityScore: 64,
    description:
      "Garbage has been accumulating near the public park entrance for several days. It is creating smell and hygiene concerns for nearby residents.",
    aiSummary:
      "AI detected a medium-severity sanitation issue. Suggested category: Garbage. Recommended priority: Medium.",
  },
  3: {
    id: 3,
    title: "Broken street light near residential lane",
    category: "Street Light",
    location: "Palasia Main Road",
    status: "Resolved",
    severity: "Low",
    date: "08 Jan 2026",
    upvotes: 9,
    comments: 2,
    priorityScore: 38,
    description:
      "A street light near the residential lane was not working, creating visibility problems at night.",
    aiSummary:
      "AI detected a low-severity public lighting issue. Suggested category: Street Light. Recommended priority: Low.",
  },
};

const statusSteps = [
  "Reported",
  "Verified",
  "Assigned",
  "In Progress",
  "Resolved",
  "Closed",
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

function IssueDetails() {
  const { id } = useParams();
  const issue = issueDetails[id] || issueDetails[1];

  const currentStepIndex = statusSteps.indexOf(issue.status);

  return (
    <div className="w-full text-slate-900">
      <Link
        to="/citizen/issues"
        className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700"
      >
        <FontAwesomeIcon icon={faArrowLeft} />
        Back to My Issues
      </Link>

      {/* Header */}
      <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-start">
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
                <FontAwesomeIcon icon={getStatusIcon(issue.status)} className="mr-1" />
                {issue.status}
              </span>
            </div>

            <h1 className="mt-4 text-3xl font-bold text-slate-900">
              {issue.title}
            </h1>

            <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-500">
              <span>
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="mr-2 text-blue-500"
                />
                {issue.location}
              </span>

              <span>
                <FontAwesomeIcon icon={faClock} className="mr-2 text-slate-400" />
                Reported on {issue.date}
              </span>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4">
            <p className="text-sm font-medium text-slate-500">Priority Score</p>
            <p className="mt-1 text-3xl font-bold text-slate-900">
              {issue.priorityScore}
            </p>
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Main Details */}
        <div className="space-y-6 lg:col-span-2">
          {/* Image Placeholder */}
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900">Issue Photo</h2>

            <div className="mt-4 flex h-72 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
              Uploaded issue image will appear here
            </div>
          </section>

          {/* Description */}
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900">Description</h2>

            <p className="mt-3 leading-7 text-slate-600">
              {issue.description}
            </p>
          </section>

          {/* Status Timeline */}
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900">
              Status Timeline
            </h2>

            <div className="mt-6 space-y-4">
              {statusSteps.map((step, index) => {
                const isCompleted = index <= currentStepIndex;

                return (
                  <div key={step} className="flex items-center gap-4">
                    <div
                      className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold ${
                        isCompleted
                          ? "bg-blue-600 text-white"
                          : "bg-slate-100 text-slate-400"
                      }`}
                    >
                      {index + 1}
                    </div>

                    <div>
                      <p
                        className={`font-semibold ${
                          isCompleted ? "text-slate-900" : "text-slate-400"
                        }`}
                      >
                        {step}
                      </p>

                      <p className="text-sm text-slate-500">
                        {isCompleted
                          ? "Step completed or currently active"
                          : "Waiting for update"}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>

        {/* Right Sidebar Info */}
        <aside className="space-y-6">
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900">Issue Metrics</h2>

            <div className="mt-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-500">Severity</span>
                <span className={`font-bold ${getSeverityStyle(issue.severity)}`}>
                  {issue.severity}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-500">Upvotes</span>
                <span className="font-bold text-slate-900">
                  <FontAwesomeIcon icon={faThumbsUp} className="mr-2 text-blue-500" />
                  {issue.upvotes}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-500">Comments</span>
                <span className="font-bold text-slate-900">
                  <FontAwesomeIcon
                    icon={faCommentDots}
                    className="mr-2 text-slate-400"
                  />
                  {issue.comments}
                </span>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-blue-200 bg-blue-50 p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900">
              <FontAwesomeIcon
                icon={faWandMagicSparkles}
                className="mr-2 text-blue-600"
              />
              AI Summary
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              {issue.aiSummary}
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900">
              <FontAwesomeIcon
                icon={faUserShield}
                className="mr-2 text-slate-500"
              />
              Official Response
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              This issue is currently waiting for review by the responsible
              department.
            </p>
          </section>
        </aside>
      </div>
    </div>
  );
}

export default IssueDetails;