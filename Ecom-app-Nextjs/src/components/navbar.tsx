"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b">
        <div className="flex justify-between items-center py-4">
          {/* Left side: Logo and Links */}
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-lg font-bold">
              Ecom
            </Link>
            <div className="hidden md:flex space-x-6">
              <Link href="/" className="text-sm hover:font-semibold">
                Home
              </Link>
              <Link
                href="/best-sellers"
                className="text-sm hover:font-semibold"
              >
                Best Sellers
              </Link>
              <Link href="/shop-all" className="text-sm hover:font-semibold">
                Shop All
              </Link>
              <Link href="/contact" className="text-sm hover:font-semibold">
                Contact
              </Link>
            </div>
          </div>

          {/* Right side: Search, Mode Toggle, Cart, Login/Signup */}
          <div className="hidden md:flex items-center space-x-4">
            <ModeToggle />
            <Button variant="outline">
              {/* SVG for cart */}
              <FaCartShopping />
            </Button>

            <Link href="/signin">
              <Button className="font-medium text-sm">Sign in &rarr;</Button>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex gap-2">
            <ModeToggle />
            <Button variant="outline">
              {/* SVG for cart */}
              <FaCartShopping />
            </Button>

            <Button variant="outline" onClick={() => setIsMenuOpen(true)}>
              {/* SVG for hamburger menu */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>

      {/* Shadcn Sheet for Hamburger Menu */}
      <Sheet open={isMenuOpen} onOpenChange={(open) => setIsMenuOpen(open)}>
        <SheetContent>
          <div className="flex flex-col py-4 space-y-4">
            <Link
              href="/"
              className="text-sm font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/best-sellers"
              className="text-sm font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Best Sellers
            </Link>
            <Link
              href="/shop-all"
              className="text-sm font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop All
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link href='/signin'>
              <Button
                className="font-medium text-sm "
                onClick={() => setIsMenuOpen(false)}
              >
                Sign in &rarr;
              </Button>
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default Navbar;
