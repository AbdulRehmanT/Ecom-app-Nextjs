import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { Button } from "./ui/button";

export default function HeroSection() {
  return (
    <section className="relative py-24 bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Navigation Menu with Categories */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Discover Your Favorite Products
            </h2>
            <p className="text-lg mb-8">
              Explore our diverse range of categories, from fashion to
              electronics, all in one place.
            </p>
            <div className="flex flex-wrap gap-6">
              <Button
                variant="outline"
                className="px-6 py-3 rounded-lg font-semibold text-foreground"
              >
                <Link href="/category/men">Men's Fashion</Link>
              </Button>
              <Button
                variant="outline"
                className="px-6 py-3 rounded-lg font-semibold text-foreground"
              >
                <Link href="/category/electronics">Electronics</Link>
              </Button>
              <Button
                variant="outline"
                className="px-6 py-3 rounded-lg font-semibold text-foreground"
              >
                <Link href="/category/women">Women's Fashion</Link>
              </Button>
            </div>
          </div>

          {/* Right: Hero Banner with Image and Text */}
          <div className="relative">
            {/* <img
              src="/images/hero-banner.jpg" // Use a relevant banner image
              alt="Ecommerce Banner"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            /> */}
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50 rounded-lg"></div>
            <div className="absolute top-1/4 left-1/4 text-center text-white z-10">
              <h3 className="text-3xl font-bold mb-4">Start Shopping Today</h3>
              <p className="mb-6 text-lg">
                Find the best deals and explore our newest arrivals
              </p>
              <Link
                href="/shop"
                className="bg-blue-500 px-8 py-3 text-lg rounded-full font-semibold hover:bg-blue-400 transition duration-300"
              >
                Shop Now <FaShoppingCart className="inline ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
