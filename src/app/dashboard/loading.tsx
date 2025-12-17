export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Skeleton Header */}
        <div className="flex justify-between items-center mb-8 bg-white p-6 rounded shadow animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/3"></div>
          <div className="h-10 bg-gray-200 rounded w-20"></div>
        </div>

        <h2 className="text-xl font-bold mb-4 text-gray-800">Sedang memuat data...</h2>

        {/* Skeleton Cards */}
        <div className="grid gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white p-6 rounded shadow border-l-4 border-gray-300 animate-pulse">
              <div className="h-6 bg-gray-200 rounded w-1/4 mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
