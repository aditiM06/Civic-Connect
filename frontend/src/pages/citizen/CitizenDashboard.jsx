function StatCard({ title, value, description }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex h-24 items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-gray-50">
        <span className="text-3xl font-bold text-gray-800">{value}</span>
      </div>

      <h3 className="mt-4 text-sm font-semibold text-gray-800">{title}</h3>
      <p className="mt-1 text-xs text-gray-500">{description}</p>
    </div>
  );
}

function IssuePreviewCard({ title, status }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
      <div className="h-20 rounded-xl border-2 border-gray-300 bg-gray-50"></div>

      <h4 className="mt-3 text-sm font-semibold text-gray-800">{title}</h4>
      <p className="mt-1 text-xs text-gray-500">{status}</p>
    </div>
  );
}

function CitizenDashboard() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">
          Citizen Dashboard
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          Track your civic reports, activity, and issue updates.
        </p>
      </div>

      {/* Activity Section */}
      <section className="border-b border-gray-200 pb-8">
        <h2 className="mb-4 text-lg font-semibold text-gray-800">
          Your Activity
        </h2>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          <StatCard
            value="12"
            title="You reported this"
            description="Total issues reported by you"
          />

          <StatCard
            value="28"
            title="You upvoted this issue"
            description="Issues you supported"
          />

          <StatCard
            value="07"
            title="You commented this issue"
            description="Discussions you participated in"
          />
        </div>
      </section>

      {/* Official Status Section */}
      <section className="border-b border-gray-200 py-8">
        <h2 className="mb-4 text-lg font-semibold text-gray-800">
          Issues marked by officials
        </h2>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          <StatCard
            value="05"
            title="Marked completed"
            description="Issues resolved by officials"
          />

          <StatCard
            value="04"
            title="In progress"
            description="Issues currently being worked on"
          />

          <StatCard
            value="03"
            title="Started"
            description="Issues accepted for action"
          />
        </div>
      </section>

      {/* All Issues Preview */}
      <section className="py-8">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-800">
            View all issues
          </h2>

          <button className="text-sm font-semibold text-gray-900 hover:underline">
            See all
          </button>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
          <IssuePreviewCard title="Pothole near main road" status="Reported" />
          <IssuePreviewCard title="Garbage pile" status="Verified" />
          <IssuePreviewCard title="Broken street light" status="In Progress" />
          <IssuePreviewCard title="Water leakage" status="Assigned" />
          <IssuePreviewCard title="Open manhole" status="High Priority" />
          <IssuePreviewCard title="Damaged road" status="Resolved" />
        </div>
      </section>
    </div>
  );
}

export default CitizenDashboard;