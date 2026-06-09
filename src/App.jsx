import { useState } from "react";
import SplashScreen from "./components/SplashScreen";
import AnnouncementBar from "./components/AnnouncementBar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Products from "./components/Products";
import Deals from "./components/Deals";
import Features from "./components/Features";
import Reviews from "./components/Reviews";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <SplashScreen onFinish={() => setLoading(false)} />
      ) : (
        <div className="bg-slate-50 min-h-screen">
      <AnnouncementBar />
      <Header />
      <Hero />
      <Categories />
      <Products />
      <Deals />
      <Features />
      <Reviews />
      <Newsletter />
      <Footer />
    </div>
      )}
    </>
  );
}
export default App;