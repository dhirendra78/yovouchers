export default function Header() {
  return (
    <header className="bg-[var(--primary)] text-white">
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-2 font-bold text-lg">
          <img src="/logo/logo.svg" className="h-8" />
          YoVouchers
        </div>

        <nav className="hidden md:flex gap-6 text-sm">
          <a>Top Stores</a>
          <a>Categories</a>
          <a>Deals</a>
          <a>Blog</a>
        </nav>

        <div className="flex gap-2">
          <input
            placeholder="Search..."
            className="px-3 py-1 rounded text-black"
          />
          <button className="bg-white text-black px-3 rounded">Login</button>
        </div>
      </div>
    </header>
  );
}
