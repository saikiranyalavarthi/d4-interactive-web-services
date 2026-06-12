import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 lg:grid-cols-4">

          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-extrabold text-blue-600">
              D4 Interactive
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              IT & Web Services Pvt Ltd
            </p>

            <p className="mt-6 leading-7 text-slate-600">
              Professional Website Development, SEO Services,
              Google Ads, Meta Ads and Digital Marketing
              solutions for businesses across Hyderabad,
              Bengaluru and India.
            </p>

            <div className="mt-6 space-y-3">

              <a
                href="tel:+917675921117"
                className="flex items-center gap-2 text-slate-700 hover:text-blue-600"
              >
                <Phone size={18} />
                +91 76759 21117
              </a>

              <a
                href="mailto:contact@d4interactive.in"
                className="flex items-center gap-2 text-slate-700 hover:text-blue-600"
              >
                <Mail size={18} />
                contact@d4interactive.in
              </a>

              <div className="flex items-center gap-2 text-slate-700">
                <MapPin size={18} />
                Hyderabad & Bengaluru
              </div>

            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold text-slate-900">
              Services
            </h3>

            <ul className="mt-6 space-y-3">

              <li>
                <Link
                  href="/services/website-development"
                  className="text-slate-600 hover:text-blue-600"
                >
                  Website Development
                </Link>
              </li>

              <li>
                <Link
                  href="/services/website-design"
                  className="text-slate-600 hover:text-blue-600"
                >
                  Website Design
                </Link>
              </li>

              <li>
                <Link
                  href="/services/seo-services"
                  className="text-slate-600 hover:text-blue-600"
                >
                  SEO Services
                </Link>
              </li>

              <li>
                <Link
                  href="/services/google-ads"
                  className="text-slate-600 hover:text-blue-600"
                >
                  Google Ads
                </Link>
              </li>

              <li>
                <Link
                  href="/services/meta-ads"
                  className="text-slate-600 hover:text-blue-600"
                >
                  Meta Ads
                </Link>
              </li>

              <li>
                <Link
                  href="/services/social-media-marketing"
                  className="text-slate-600 hover:text-blue-600"
                >
                  Social Media Marketing
                </Link>
              </li>

            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-lg font-bold text-slate-900">
              Locations
            </h3>

            <ul className="mt-6 space-y-3">

              <li>
                <Link
                  href="/locations/hyderabad"
                  className="text-slate-600 hover:text-blue-600"
                >
                  Website Development Hyderabad
                </Link>
              </li>

              <li>
                <Link
                  href="/locations/hyderabad"
                  className="text-slate-600 hover:text-blue-600"
                >
                  SEO Services Hyderabad
                </Link>
              </li>

              <li>
                <Link
                  href="/locations/hyderabad"
                  className="text-slate-600 hover:text-blue-600"
                >
                  Digital Marketing Hyderabad
                </Link>
              </li>

              <li>
                <Link
                  href="/locations/bengaluru"
                  className="text-slate-600 hover:text-blue-600"
                >
                  Website Development Bengaluru
                </Link>
              </li>

              <li>
                <Link
                  href="/locations/bengaluru"
                  className="text-slate-600 hover:text-blue-600"
                >
                  SEO Services Bengaluru
                </Link>
              </li>

              <li>
                <Link
                  href="/locations/bengaluru"
                  className="text-slate-600 hover:text-blue-600"
                >
                  Digital Marketing Bengaluru
                </Link>
              </li>

            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-slate-900">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-3">

              <li>
                <Link
                  href="/"
                  className="flex items-center gap-2 text-slate-600 hover:text-blue-600"
                >
                  Home
                  <ArrowUpRight size={16} />
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="flex items-center gap-2 text-slate-600 hover:text-blue-600"
                >
                  About Us
                  <ArrowUpRight size={16} />
                </Link>
              </li>

              <li>
                <Link
                  href="/services"
                  className="flex items-center gap-2 text-slate-600 hover:text-blue-600"
                >
                  Services
                  <ArrowUpRight size={16} />
                </Link>
              </li>

              <li>
                <Link
                  href="/portfolio"
                  className="flex items-center gap-2 text-slate-600 hover:text-blue-600"
                >
                  Portfolio
                  <ArrowUpRight size={16} />
                </Link>
              </li>

              <li>
                <Link
                  href="/blog"
                  className="flex items-center gap-2 text-slate-600 hover:text-blue-600"
                >
                  Blog
                  <ArrowUpRight size={16} />
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="flex items-center gap-2 text-slate-600 hover:text-blue-600"
                >
                  Contact
                  <ArrowUpRight size={16} />
                </Link>
              </li>

            </ul>
          </div>

        </div>

        {/* Bottom Footer */}

        <div className="mt-16 border-t border-slate-200 pt-8">

          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row">

            <p className="text-slate-500">
              © {new Date().getFullYear()} D4 Interactive IT & Web Services Pvt Ltd.
              All Rights Reserved.
            </p>

            <div className="flex gap-6">

              <Link
                href="/privacy-policy"
                className="text-slate-500 hover:text-blue-600"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms-and-conditions"
                className="text-slate-500 hover:text-blue-600"
              >
                Terms & Conditions
              </Link>

            </div>

          </div>

        </div>

      </div>
    </footer>
  );
}