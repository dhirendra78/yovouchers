export default function Hero() {
  return (
    <section className="bg-white">
      <div className="container grid md:grid-cols-2 gap-6 py-10">
        <div>
          <h1 className="text-4xl font-bold mb-3">
            YoVouchers All discounts in one place!
          </h1>

          <p className="text-gray-600 mb-4">
            Coupons, promo codes and deals for all shops and brands in the UK!
          </p>

          <div className="flex gap-4 text-sm text-gray-500">
            <span>✔ Verified</span>
            <span>✔ Daily Tested</span>
            <span>✔ Save More</span>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-2">
            Win a £200 Amazon Gift Card!
          </h3>
          <button className="bg-yellow-400 text-black px-4 py-2 rounded mt-4">
            Enter Giveaway
          </button>
        </div>
      </div>
    </section>
  );
}
