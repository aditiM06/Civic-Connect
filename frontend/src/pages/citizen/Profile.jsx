import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faPhone,
  faLocationDot,
  faShieldHalved,
  faPen,
  faTriangleExclamation,
  faCircleCheck,
  faThumbsUp,
  faCommentDots,
  faAward,
} from "@fortawesome/free-solid-svg-icons";

function StatCard({ icon, label, value, helper }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
          <FontAwesomeIcon icon={icon} />
        </div>

        <div>
          <p className="text-sm font-medium text-slate-500">{label}</p>
          <h3 className="mt-1 text-2xl font-bold text-slate-900">{value}</h3>
        </div>
      </div>

      <p className="mt-4 text-sm text-slate-500">{helper}</p>
    </div>
  );
}

function InfoRow({ icon, label, value }) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-blue-600">
        <FontAwesomeIcon icon={icon} />
      </div>

      <div>
        <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
          {label}
        </p>
        <p className="mt-1 text-sm font-semibold text-slate-800">{value}</p>
      </div>
    </div>
  );
}

function Profile() {
  return (
    <div className="w-full text-slate-900">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Profile</h1>
        <p className="mt-2 text-sm text-slate-500">
          Manage your CivicConnect identity and view your civic activity.
        </p>
      </div>

      {/* Demo Notice */}
      {/* <div className="mb-6 rounded-3xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-800">
        <FontAwesomeIcon icon={faTriangleExclamation} className="mr-2" />
        You are currently viewing a demo citizen profile. Real account editing
        will be enabled after backend authentication is connected.
      </div> */}

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[360px_1fr]">
        {/* Left Profile Card */}
        <aside className="space-y-6">
          <section className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm">
            <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-blue-600 text-4xl font-bold text-white">
              A
            </div>

            <h2 className="mt-5 text-2xl font-bold text-slate-900">
               DemoUser
            </h2>

            <p className="mt-1 text-sm text-slate-500">Citizen Account</p>

            <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-700">
              <FontAwesomeIcon icon={faCircleCheck} />
              Verified Demo User
            </div>

            <button
              type="button"
              className="mt-6 w-full rounded-2xl border border-slate-300 px-5 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-100"
            >
              <FontAwesomeIcon icon={faPen} className="mr-2" />
              Edit Profile
            </button>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900">
              Account Details
            </h3>

            <div className="mt-5 space-y-4">
              <InfoRow
                icon={faEnvelope}
                label="Email"
                value="demo.citizen@civicconnect.in"
              />

              <InfoRow icon={faPhone} label="Phone" value="+91 98765 43210" />

              <InfoRow
                icon={faLocationDot}
                label="Primary Area"
                value="Vijay Nagar, Indore"
              />

              <InfoRow icon={faShieldHalved} label="Role" value="Citizen" />
            </div>
          </section>
        </aside>

        {/* Right Content */}
        <main className="space-y-6">
          {/* Stats */}
          <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            <StatCard
              icon={faTriangleExclamation}
              label="Reports"
              value="12"
              helper="Issues submitted by you"
            />

            <StatCard
              icon={faThumbsUp}
              label="Upvotes"
              value="28"
              helper="Issues you supported"
            />

            <StatCard
              icon={faCommentDots}
              label="Comments"
              value="07"
              helper="Discussions joined"
            />

            <StatCard
              icon={faAward}
              label="Badges"
              value="03"
              helper="Civic participation badges"
            />
          </section>

          {/* Recent Activity */}
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Recent Activity
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  Your latest actions on CivicConnect.
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-slate-200 p-4">
                <p className="text-sm font-bold text-slate-900">
                  Reported a road damage issue
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  Large pothole near Vijay Nagar main road · 2 days ago
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-4">
                <p className="text-sm font-bold text-slate-900">
                  Upvoted a garbage issue
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  Garbage accumulation near public park · 4 days ago
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-4">
                <p className="text-sm font-bold text-slate-900">
                  Commented on street light issue
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  Broken street light near bus stop · 1 week ago
                </p>
              </div>
            </div>
          </section>

          {/* Preferences */}
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900">
              Notification Preferences
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              These settings are frontend-only for now. Backend notification
              logic will come later.
            </p>

            <div className="mt-5 space-y-4">
              <label className="flex items-center justify-between rounded-2xl border border-slate-200 p-4">
                <span>
                  <span className="block text-sm font-bold text-slate-800">
                    Status Updates
                  </span>
                  <span className="text-sm text-slate-500">
                    Notify me when my issue status changes.
                  </span>
                </span>

                <input type="checkbox" defaultChecked className="h-5 w-5" />
              </label>

              <label className="flex items-center justify-between rounded-2xl border border-slate-200 p-4">
                <span>
                  <span className="block text-sm font-bold text-slate-800">
                    Community Comments
                  </span>
                  <span className="text-sm text-slate-500">
                    Notify me when someone comments on my issue.
                  </span>
                </span>

                <input type="checkbox" defaultChecked className="h-5 w-5" />
              </label>

              <label className="flex items-center justify-between rounded-2xl border border-slate-200 p-4">
                <span>
                  <span className="block text-sm font-bold text-slate-800">
                    Nearby High Priority Issues
                  </span>
                  <span className="text-sm text-slate-500">
                    Notify me about urgent issues near my area.
                  </span>
                </span>

                <input type="checkbox" className="h-5 w-5" />
              </label>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Profile;