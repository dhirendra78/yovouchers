import Header from "./components/Header";
import Hero from "./components/Hero";
import Stores from "./components/Stores";
import Trending from "./components/Trending";
import Newsletter from "./components/Newsletter";
import Filters from "./components/Filters";
import CouponCard from "./components/CouponCard";
import Articles from "./components/Articles";
import Trust from "./components/Trust";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Stores />
      <Trending />
      <Newsletter />
      <Filters />

      <div className="container grid md:grid-cols-4 gap-4">
        <CouponCard title="Currys Deals" code="SAVE10" discount={10} />
        <CouponCard title="MyProtein" code="MYPRO70" discount={70} />
        <CouponCard title="Farfetch" code="FF65" discount={65} />
        <CouponCard title="Missguided" code="MISS20" discount={20} />
      </div>

      <Articles />
      <Trust />
      <Footer />
    </div>
  );
}
