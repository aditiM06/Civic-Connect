import { useEffect, useState } from "react";
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

import { getReportById } from "../../api/reportApi";

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

function formatDate(dateString) {
  if (!dateString) return "Not available";

  return new Date(dateString).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function IssueDetails() {
  const { id } = useParams();

  const [issue, setIssue] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchIssueDetails() {
      try {
        setLoading(true);
        setError("");

        const data = await getReportById(id);
        setIssue(data.report);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchIssueDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-white p-6 text-slate-600 shadow-sm">
        Loading issue details...
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-3xl border border-red-200 bg-red-50 p-6 text-red-700 shadow-sm">
        {error}
      </div>
    );
  }

  if (!issue) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-white p-6 text-slate-600 shadow-sm">
        Issue not found.
      </div>
    );
  }

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
                <FontAwesomeIcon
                  icon={getStatusIcon(issue.status)}
                  className="mr-1"
                />
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
                {issue.locationText}
              </span>

              <span>
                <FontAwesomeIcon
                  icon={faClock}
                  className="mr-2 text-slate-400"
                />
                Reported on {formatDate(issue.createdAt)}
              </span>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4">
            <p className="text-sm font-medium text-slate-500">
              Priority Score
            </p>
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

            {issue.imageUrl ? (
              <img
                src={issue.imageUrl}
                alt={issue.title}
                className="mt-4 h-72 w-full rounded-2xl object-cover"
              />
            ) : (
              <div className="mt-4 flex h-72 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
                No image uploaded yet
              </div>
            )}
          </section>

          {/* Description */}
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900">Description</h2>

            <p className="mt-3 leading-7 text-slate-600">
              {issue.description || "No description provided."}
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
                <span
                  className={`font-bold ${getSeverityStyle(issue.severity)}`}
                >
                  {issue.severity}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-500">Upvotes</span>
                <span className="font-bold text-slate-900">
                  <FontAwesomeIcon
                    icon={faThumbsUp}
                    className="mr-2 text-blue-500"
                  />
                  {issue.upvotesCount}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-500">Comments</span>
                <span className="font-bold text-slate-900">
                  <FontAwesomeIcon
                    icon={faCommentDots}
                    className="mr-2 text-slate-400"
                  />
                  {issue.commentsCount}
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
              {issue.aiSummary ||
                "AI summary will be generated after AI assistant integration."}
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