import "../styles/Home.css";
import Navbar from "../components/user/Navbar";
import Hero from "../components/user/Hero";
import FeaturedProducts from "../components/user/FeaturedProducts";
import Categories from "../components/user/Categories";
import HomeBanner from "../components/user/HomeBanner";
import Newsletter from "../components/user/Newsletter";

function Home() {
  return (
    <div className="home-container">
      <Hero />
      <FeaturedProducts />
      <Categories />
      <HomeBanner />
      <Newsletter />
    </div>
  );
}

export default Home;
