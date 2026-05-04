export default function Filters() {
  return (
    <div className="container py-4 flex gap-2 flex-wrap">
      <button className="px-4 py-1 bg-white rounded shadow">All</button>
      <button className="px-4 py-1 bg-white rounded shadow">Verified</button>
      <button className="px-4 py-1 bg-white rounded shadow">
        Free Shipping
      </button>
    </div>
  );
}
