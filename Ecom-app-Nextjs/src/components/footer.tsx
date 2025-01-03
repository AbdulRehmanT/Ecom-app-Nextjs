import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { FaPaypal, FaCcVisa, FaCcMastercard } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Left: Logo and Subscribe Section */}
          <div className="space-y-6">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Link href="/" className="text-2xl font-bold">
                Ecom
              </Link>
            </div>

            {/* Subscribe Section */}
            <div className="space-y-2">
              <h4 className="text-lg font-semibold">
                Subscribe to Our Newsletter
              </h4>
              <form className="flex gap-2">
                <div className="flex flex-col w-full">
                  <Label htmlFor="email" className="sr-only">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your email address"
                    required
                    className="rounded-l-md"
                  />
                </div>
                <Button type="submit" className="rounded-r-md">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>

          {/* Middle: Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-sm hover:font-bold">
                Home
              </Link>
              <Link
                href="/best-sellers"
                className="text-sm hover:font-bold"
              >
                Best Sellers
              </Link>
              <Link href="/shop-all" className="text-sm hover:font-bold">
                Shop All
              </Link>
              <Link href="/contact" className="text-sm hover:font-bold">
                Contact
              </Link>
            </nav>
          </div>

          {/* Third: Address & Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact & Address</h4>
            <p className="text-sm">123 Ecom Street, Suite 101, City, Country</p>
            <p className="text-sm">Phone: +1 (234) 567-8901</p>
            <p className="text-sm">Email: support@example.com</p>
          </div>

          {/* Fourth: Payment Methods */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Payment Methods</h4>
            <div className="flex gap-4">
              <FaCcVisa size={30} />
              <FaCcMastercard size={30} />
              <FaPaypal size={30} />
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-10 border-t pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Ecom, All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}