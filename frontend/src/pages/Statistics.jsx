import DashboardNavbar from "../components/DashboardNavbar";

export default function Statistics() {
  const stats = [
    {
      title: "Total Applications",
      value: 24,
      description: "Jobs applied so far",
      icon: "📄",
      color: "bg-blue-100 text-blue-700",
    },
    {
      title: "Interviews",
      value: 8,
      description: "Interview opportunities",
      icon: "🎯",
      color: "bg-purple-100 text-purple-700",
    },
    {
      title: "Selected",
      value: 3,
      description: "Successful applications",
      icon: "🏆",
      color: "bg-green-100 text-green-700",
    },
    {
      title: "Rejected",
      value: 5,
      description: "Unsuccessful applications",
      icon: "📉",
      color: "bg-red-100 text-red-700",
    },
  ];

  const statusData = [
    { status: "Applied", count: 8, color: "bg-blue-500" },
    { status: "Interview", count: 8, color: "bg-purple-500" },
    { status: "Selected", count: 3, color: "bg-green-500" },
    { status: "Rejected", count: 5, color: "bg-red-500" },
  ];

  const totalApplications = statusData.reduce(
    (total, item) => total + item.count,
    0
  );

  return (
    <>
      <DashboardNavbar />

      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Page Heading */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Application Statistics
            </h1>
            <p className="mt-2 text-gray-600">
              Track your placement progress and review your job application
              activity.
            </p>
          </div>

          {/* Statistics Cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-md transition duration-200 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl text-2xl ${item.color}`}
                  >
                    {item.icon}
                  </div>
                  <span className="text-sm font-medium text-gray-400">
                    Statistics
                  </span>
                </div>

                <h2 className="mt-5 text-sm font-medium text-gray-500">
                  {item.title}
                </h2>

                <p className="mt-1 text-3xl font-bold text-gray-900">
                  {item.value}
                </p>

                <p className="mt-2 text-sm text-gray-500">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Application Status */}
          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <section className="rounded-2xl border border-gray-100 bg-white p-6 shadow-md">
              <h2 className="text-xl font-bold text-gray-900">
                Application Status
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Breakdown of your application progress
              </p>

              <div className="mt-8 space-y-6">
                {statusData.map((item) => {
                  const percentage =
                    totalApplications === 0
                      ? 0
                      : (item.count / totalApplications) * 100;

                  return (
                    <div key={item.status}>
                      <div className="mb-2 flex items-center justify-between">
                        <span className="text-sm font-semibold text-gray-700">
                          {item.status}
                        </span>

                        <span className="text-sm font-medium text-gray-600">
                          {item.count} ({percentage.toFixed(1)}%)
                        </span>
                      </div>

                      <div className="h-3 overflow-hidden rounded-full bg-gray-100">
                        <div
                          className={`h-full rounded-full ${item.color} transition-all duration-500`}
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Summary */}
            <section className="rounded-2xl border border-gray-100 bg-white p-6 shadow-md">
              <h2 className="text-xl font-bold text-gray-900">
                Placement Summary
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                A quick overview of your progress
              </p>

              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between rounded-xl bg-blue-50 p-4">
                  <span className="font-medium text-gray-700">
                    Total Applications
                  </span>
                  <span className="text-xl font-bold text-blue-700">
                    {totalApplications}
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-xl bg-purple-50 p-4">
                  <span className="font-medium text-gray-700">
                    Interview Rate
                  </span>
                  <span className="text-xl font-bold text-purple-700">
                    {totalApplications === 0
                      ? "0.0%"
                      : (
                          (8 / totalApplications) *
                          100
                        ).toFixed(1) + "%"}
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-xl bg-green-50 p-4">
                  <span className="font-medium text-gray-700">
                    Selection Rate
                  </span>
                  <span className="text-xl font-bold text-green-700">
                    {totalApplications === 0
                      ? "0.0%"
                      : (
                          (3 / totalApplications) *
                          100
                        ).toFixed(1) + "%"}
                  </span>
                </div>
              </div>

              <div className="mt-6 rounded-xl border border-indigo-100 bg-indigo-50 p-4">
                <p className="text-sm leading-6 text-indigo-900">
                  Keep your applications updated regularly to monitor your
                  progress and stay organized throughout your placement
                  journey.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}