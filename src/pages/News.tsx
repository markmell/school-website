import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NewsSection from "../components/NewsSection";

export default function News() {
  return (
    <>
      <Navbar />

      <div className="pt-24">
        <NewsSection />
      </div>

      <Footer />
    </>
  );
}
