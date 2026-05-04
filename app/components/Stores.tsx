export default function Stores() {
  const stores = ["Currys", "MyProtein", "Farfetch", "Zavvi"];

  return (
    <div className="container py-6">
      <h3 className="mb-3 font-semibold">Popular Stores</h3>

      <div className="flex gap-3 overflow-x-auto">
        {stores.map((s, i) => (
          <div key={i} className="bg-white px-4 py-2 rounded shadow">
            {s}
          </div>
        ))}
      </div>
    </div>
  );
}
