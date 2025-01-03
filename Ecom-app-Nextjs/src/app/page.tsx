import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import Navbar from "@/components/navbar";
import Product from "@/components/product";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection/>
      <Product />
      <Footer/>
    </>
  );
}
