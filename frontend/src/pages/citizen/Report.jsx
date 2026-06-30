import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faCamera,
  faWandMagicSparkles,
  faLocationDot,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

import { createReport } from "../../api/reportApi";

function Report() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    severity: "Medium",
    description: "",
    locationText: "Vijay Nagar, Main Road, Sector 3",
    latitude: "",
    longitude: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      setLoading(true);
      setError("");

      const data = await createReport({
        ...formData,
        latitude: formData.latitude || null,
        longitude: formData.longitude || null,
      });

      navigate(`/citizen/issues/${data.reportId}`);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full text-slate-900">
      <div>
        <Link
          to="/citizen"
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
          Back to Dashboard
        </Link>

        <div className="mt-6">
          <h1 className="text-3xl font-bold md:text-4xl">
            Report a Civic Issue
          </h1>

          <p className="mt-2 text-slate-600">
            Help improve your community. This takes less than 60 seconds.
          </p>
        </div>

        <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-4 text-sm font-medium text-emerald-700">
          Average completion time: <span className="font-bold">45 seconds</span>
        </div>
      </div>

      {error && (
        <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-sm font-semibold text-red-700">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        {/* Upload Card */}
        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="font-bold text-slate-900">
            <FontAwesomeIcon icon={faCamera} className="mr-2 text-slate-500" />
            Upload Photo
            <span className="ml-2 text-sm font-normal text-slate-400">
              coming next — image upload will be connected after basic reports
            </span>
          </h2>

          <div className="mt-5 flex min-h-40 flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 text-center">
            <FontAwesomeIcon
              icon={faCamera}
              className="mb-3 text-3xl text-slate-300"
            />

            <p className="font-medium text-slate-600">
              Image upload will be added next
            </p>

            <p className="mt-1 text-sm text-slate-400">
              First we are testing report creation
            </p>
          </div>
        </section>

        {/* AI Assistant */}
        <section className="rounded-3xl border border-dashed border-blue-200 bg-white p-6">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h2 className="font-bold text-slate-900">
                <FontAwesomeIcon
                  icon={faWandMagicSparkles}
                  className="mr-2 text-blue-500"
                />
                AI Issue Assistant
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                AI auto-fill will be connected after report APIs are stable.
              </p>
            </div>

            <button
              type="button"
              disabled
              className="cursor-not-allowed rounded-full bg-slate-300 px-6 py-3 text-sm font-bold text-white"
            >
              Generate with AI
            </button>
          </div>
        </section>

        {/* Form Card */}
        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-bold text-slate-800">
                Issue Title <span className="text-red-500">*</span>
              </label>

              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="e.g. Large pothole near main road junction"
                className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-slate-800">
                Category <span className="text-red-500">*</span>
              </label>

              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              >
                <option value="">Select category...</option>
                <option value="Road Damage">Road Damage</option>
                <option value="Garbage">Garbage</option>
                <option value="Water Leakage">Water Leakage</option>
                <option value="Street Light">Street Light</option>
                <option value="Open Manhole">Open Manhole</option>
                <option value="Sewage Overflow">Sewage Overflow</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-slate-800">
                Severity
              </label>

              <select
                name="severity"
                value={formData.severity}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-slate-800">
                Description
              </label>

              <textarea
                rows="5"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="When did this start? How severe is it? Any immediate danger?"
                className="w-full resize-none rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              ></textarea>
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-slate-800">
                Location <span className="text-red-500">*</span>
              </label>

              <div className="relative">
                <input
                  type="text"
                  name="locationText"
                  value={formData.locationText}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 pr-12 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />

                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-blue-500"
                />
              </div>

              <div className="mt-4 flex h-44 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
                Map preview will appear here later
              </div>
            </div>
          </div>
        </section>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-2xl bg-blue-600 px-6 py-4 text-base font-bold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-300"
        >
          <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
          {loading ? "Submitting..." : "Submit Report"}
        </button>
      </form>
    </div>
  );
}

export default Report;