export default function Newsletter() {
  return (
    <div className="container py-6">
      <div className="bg-purple-100 p-4 rounded flex justify-between items-center">
        <div>Exclusive Email Offers</div>

        <div className="flex gap-2">
          <input className="px-3 py-2 rounded" placeholder="Email" />
          <button className="bg-purple-600 text-white px-4 rounded">
            Get Deals
          </button>
        </div>
      </div>
    </div>
  );
}
