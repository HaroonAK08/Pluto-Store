import '../styles/Home.css';
import Navbar from '../components/user/Navbar';
import Hero from '../components/user/Hero';
import FeaturedProducts from '../components/user/FeaturedProducts';
import Categories from '../components/user/Categories';
import HomeBanner from '../components/user/HomeBanner';
import Testimonials from '../components/user/Testimonials';
import Newsletter from '../components/user/Newsletter';

function Home() {
  return (
    <div className="home-container">
      <Hero />
      <FeaturedProducts />
      <Categories />
      <HomeBanner />
      <Testimonials />
      <Newsletter />
    </div>
  );
}

export default Home; 