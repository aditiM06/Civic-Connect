import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faCamera,
  faWandMagicSparkles,
  faLocationDot,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

function Report() {
  return (
    <div className="w-full text-slate-900">
      {/* Page Header */}
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
          Average completion time:{" "}
          <span className="font-bold">45 seconds</span>
        </div>
      </div>

      {/* Form */}
      <form className="mt-8 space-y-6">
        {/* Upload Card */}
        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="font-bold text-slate-900">
            <FontAwesomeIcon icon={faCamera} className="mr-2 text-slate-500" />
            Upload Photo
            <span className="ml-2 text-sm font-normal text-slate-400">
              recommended — helps AI assist you
            </span>
          </h2>

          <label className="mt-5 flex min-h-40 cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 text-center transition hover:border-blue-400 hover:bg-blue-50">
            <FontAwesomeIcon
              icon={faCamera}
              className="mb-3 text-3xl text-slate-300"
            />

            <p className="font-medium text-slate-600">
              Tap to upload or take a photo
            </p>

            <p className="mt-1 text-sm text-slate-400">
              JPG, PNG — up to 10 MB
            </p>

            <input type="file" accept="image/*" className="hidden" />
          </label>
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
                Analyze your photo and auto-fill the form below.
              </p>
            </div>

            <button
              type="button"
              className="rounded-full bg-blue-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-blue-700"
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
                placeholder="e.g. Large pothole near main road junction"
                className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-slate-800">
                Category <span className="text-red-500">*</span>
              </label>

              <select className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100">
                <option value="">Select category...</option>
                <option value="road_damage">Road Damage</option>
                <option value="garbage">Garbage</option>
                <option value="water_leakage">Water Leakage</option>
                <option value="street_light">Street Light</option>
                <option value="open_manhole">Open Manhole</option>
                <option value="sewage_overflow">Sewage Overflow</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-slate-800">
                Description
              </label>

              <textarea
                rows="5"
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
                  defaultValue="Vijay Nagar, Main Road, Sector 3"
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 pr-12 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />

                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-blue-500"
                />
              </div>

              <div className="mt-4 flex h-44 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
                Map preview will appear here
              </div>
            </div>
          </div>
        </section>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full rounded-2xl bg-blue-600 px-6 py-4 text-base font-bold text-white transition hover:bg-blue-700"
        >
          <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
          Submit Report
        </button>
      </form>
    </div>
  );
}

export default Report;