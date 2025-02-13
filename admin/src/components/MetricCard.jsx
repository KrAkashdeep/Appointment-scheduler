export default function MetricCard({ title, value }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
      <p className="text-3xl font-semibold mt-2">{value}</p>
    </div>
  );
}
