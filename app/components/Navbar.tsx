// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import {
//   Menu,
//   X,
//   ChevronDown,
//   Phone,
//   Mail,
// } from "lucide-react";

// export default function Navbar() {
//   const [mobileMenu, setMobileMenu] = useState(false);

//   return (
//     <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
//       <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

//         {/* Logo */}
//         <Link href="/" className="group">
//           <h2 className="text-2xl font-extrabold text-blue-600">
//             D4 Interactive
//           </h2>
//           <p className="text-xs text-slate-500">
//             IT & Web Services Pvt Ltd
//           </p>
//         </Link>

//         {/* Desktop Menu */}
//         <nav className="hidden items-center gap-8 lg:flex">

//           <Link
//             href="/"
//             className="font-medium text-slate-700 transition hover:text-blue-600"
//           >
//             Home
//           </Link>

//           <Link
//             href="/about"
//             className="font-medium text-slate-700 transition hover:text-blue-600"
//           >
//             About
//           </Link>

//           {/* Services Dropdown */}
//           <div className="group relative">
//             <button className="flex items-center gap-1 font-medium text-slate-700 hover:text-blue-600">
//               Services
//               <ChevronDown size={16} />
//             </button>

//             <div className="invisible absolute left-0 top-12 w-80 rounded-3xl border border-slate-200 bg-white p-4 opacity-0 shadow-2xl transition-all duration-300 group-hover:visible group-hover:opacity-100">

//               <Link
//                 href="/services/website-development"
//                 className="block rounded-xl p-3 hover:bg-blue-50"
//               >
//                 Website Development
//               </Link>

//               <Link
//                 href="/services/website-design"
//                 className="block rounded-xl p-3 hover:bg-blue-50"
//               >
//                 Website Design
//               </Link>

//               <Link
//                 href="/services/seo-services"
//                 className="block rounded-xl p-3 hover:bg-blue-50"
//               >
//                 SEO Services
//               </Link>

//               <Link
//                 href="/services/google-ads"
//                 className="block rounded-xl p-3 hover:bg-blue-50"
//               >
//                 Google Ads
//               </Link>

//               <Link
//                 href="/services/meta-ads"
//                 className="block rounded-xl p-3 hover:bg-blue-50"
//               >
//                 Meta Ads
//               </Link>

//               <Link
//                 href="/services/social-media-marketing"
//                 className="block rounded-xl p-3 hover:bg-blue-50"
//               >
//                 Social Media Marketing
//               </Link>
//             </div>
//           </div>

//           {/* Locations Dropdown */}
//           <div className="group relative">
//             <button className="flex items-center gap-1 font-medium text-slate-700 hover:text-blue-600">
//               Locations
//               <ChevronDown size={16} />
//             </button>

//             <div className="invisible absolute left-0 top-12 w-80 rounded-3xl border border-slate-200 bg-white p-4 opacity-0 shadow-2xl transition-all duration-300 group-hover:visible group-hover:opacity-100">

//               <Link
//                 href="/locations/hyderabad"
//                 className="block rounded-xl p-3 hover:bg-blue-50"
//               >
//                 Digital Marketing Hyderabad
//               </Link>

//               <Link
//                 href="/locations/hyderabad"
//                 className="block rounded-xl p-3 hover:bg-blue-50"
//               >
//                 Website Development Hyderabad
//               </Link>

//               <Link
//                 href="/locations/bengaluru"
//                 className="block rounded-xl p-3 hover:bg-blue-50"
//               >
//                 Digital Marketing Bengaluru
//               </Link>

//               <Link
//                 href="/locations/bengaluru"
//                 className="block rounded-xl p-3 hover:bg-blue-50"
//               >
//                 Website Development Bengaluru
//               </Link>

//             </div>
//           </div>

//           <Link
//             href="/portfolio"
//             className="font-medium text-slate-700 transition hover:text-blue-600"
//           >
//             Portfolio
//           </Link>

//           <Link
//             href="/blog"
//             className="font-medium text-slate-700 transition hover:text-blue-600"
//           >
//             Blog
//           </Link>

//           <Link
//             href="/contact"
//             className="font-medium text-slate-700 transition hover:text-blue-600"
//           >
//             Contact
//           </Link>
//         </nav>

//         {/* Right Side */}
//         <div className="hidden items-center gap-4 lg:flex">

//           <a
//             href="mailto:contact@d4interactive.in"
//             className="flex items-center gap-2 text-sm text-slate-600"
//           >
//             <Mail size={16} />
//             contact@d4interactive.in
//           </a>

//           <a
//             href="tel:+917675921117"
//             className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
//           >
//             Call Now
//           </a>

//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           onClick={() => setMobileMenu(!mobileMenu)}
//           className="lg:hidden"
//         >
//           {mobileMenu ? (
//             <X className="h-7 w-7" />
//           ) : (
//             <Menu className="h-7 w-7" />
//           )}
//         </button>

//       </div>

//       {/* Mobile Menu */}
//       {mobileMenu && (
//         <div className="border-t border-slate-200 bg-white lg:hidden">

//           <div className="space-y-2 p-6">

//             <Link href="/" className="block rounded-lg p-3 hover:bg-blue-50">
//               Home
//             </Link>

//             <Link href="/about" className="block rounded-lg p-3 hover:bg-blue-50">
//               About
//             </Link>

//             <Link href="/services" className="block rounded-lg p-3 hover:bg-blue-50">
//               Services
//             </Link>

//             <Link href="/locations/hyderabad" className="block rounded-lg p-3 hover:bg-blue-50">
//               Hyderabad Services
//             </Link>

//             <Link href="/locations/bengaluru" className="block rounded-lg p-3 hover:bg-blue-50">
//               Bengaluru Services
//             </Link>

//             <Link href="/portfolio" className="block rounded-lg p-3 hover:bg-blue-50">
//               Portfolio
//             </Link>

//             <Link href="/blog" className="block rounded-lg p-3 hover:bg-blue-50">
//               Blog
//             </Link>

//             <Link href="/contact" className="block rounded-lg p-3 hover:bg-blue-50">
//               Contact
//             </Link>

//             <a
//               href="tel:+917675921117"
//               className="mt-4 block rounded-xl bg-blue-600 px-5 py-4 text-center font-semibold text-white"
//             >
//               Call +91 76759 21117
//             </a>

//           </div>

//         </div>
//       )}
//     </header>
//   );
// }




"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Mail,
} from "lucide-react";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link href="/" className="group">
          <h2 className="text-2xl font-extrabold text-blue-600">
            D4 Interactive
          </h2>
          <p className="text-xs text-slate-500">
            IT & Web Services Pvt Ltd
          </p>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 lg:flex">

          <Link
            href="/"
            className="font-medium text-slate-700 transition hover:text-blue-600"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="font-medium text-slate-700 transition hover:text-blue-600"
          >
            About
          </Link>

          {/* Services Dropdown */}
          <div className="group relative">
            <button className="flex items-center gap-1 font-medium text-slate-700 hover:text-blue-600">
              Services
              <ChevronDown size={16} />
            </button>

            <div className="invisible absolute left-0 top-12 w-80 rounded-3xl border border-slate-200 bg-white p-4 opacity-0 shadow-2xl transition-all duration-300 group-hover:visible group-hover:opacity-100">

              <Link
                href="/services/website-development"
                className="block rounded-xl p-3 hover:bg-blue-50"
              >
                Website Development
              </Link>

              <Link
                href="/services/website-design"
                className="block rounded-xl p-3 hover:bg-blue-50"
              >
                Website Design
              </Link>

              <Link
                href="/services/seo-services"
                className="block rounded-xl p-3 hover:bg-blue-50"
              >
                SEO Services
              </Link>

              <Link
                href="/services/google-ads"
                className="block rounded-xl p-3 hover:bg-blue-50"
              >
                Google Ads
              </Link>

              <Link
                href="/services/meta-ads"
                className="block rounded-xl p-3 hover:bg-blue-50"
              >
                Meta Ads
              </Link>

              <Link
                href="/services/social-media-marketing"
                className="block rounded-xl p-3 hover:bg-blue-50"
              >
                Social Media Marketing
              </Link>
            </div>
          </div>

          {/* Locations Dropdown */}
        {/* Locations Dropdown */}
<div className="group relative">
  <button className="flex items-center gap-1 font-medium text-slate-700 hover:text-blue-600">
    Locations
    <ChevronDown size={16} />
  </button>

  <div className="invisible absolute left-0 top-12 w-96 rounded-3xl border border-slate-200 bg-white p-4 opacity-0 shadow-2xl transition-all duration-300 group-hover:visible group-hover:opacity-100">

    <div className="mb-3 border-b pb-2">
      <h4 className="font-bold text-blue-600">
        Hyderabad Services
      </h4>
    </div>

    <Link
      href="/website-development-hyderabad"
      className="block rounded-xl p-3 hover:bg-blue-50"
    >
      Website Development Hyderabad
    </Link>

    <Link
      href="/seo-services-hyderabad"
      className="block rounded-xl p-3 hover:bg-blue-50"
    >
      SEO Services Hyderabad
    </Link>

    <Link
      href="/google-ads-hyderabad"
      className="block rounded-xl p-3 hover:bg-blue-50"
    >
      Google Ads Hyderabad
    </Link>

    <Link
      href="/meta-ads-hyderabad"
      className="block rounded-xl p-3 hover:bg-blue-50"
    >
      Meta Ads Hyderabad
    </Link>

    <div className="my-3 border-b pt-2 pb-2">
      <h4 className="font-bold text-blue-600">
        Bengaluru Services
      </h4>
    </div>

    <Link
      href="/website-development-bengaluru"
      className="block rounded-xl p-3 hover:bg-blue-50"
    >
      Website Development Bengaluru
    </Link>

    <Link
      href="/seo-services-bengaluru"
      className="block rounded-xl p-3 hover:bg-blue-50"
    >
      SEO Services Bengaluru
    </Link>

    <Link
      href="/google-ads-bengaluru"
      className="block rounded-xl p-3 hover:bg-blue-50"
    >
      Google Ads Bengaluru
    </Link>

    <Link
      href="/meta-ads-bengaluru"
      className="block rounded-xl p-3 hover:bg-blue-50"
    >
      Meta Ads Bengaluru
    </Link>

  </div>
</div>

          <Link
            href="/portfolio"
            className="font-medium text-slate-700 transition hover:text-blue-600"
          >
            Portfolio
          </Link>

          <Link
            href="/blog"
            className="font-medium text-slate-700 transition hover:text-blue-600"
          >
            Blog
          </Link>

          <Link
            href="/contact"
            className="font-medium text-slate-700 transition hover:text-blue-600"
          >
            Contact
          </Link>
        </nav>

        {/* Right Side */}
        <div className="hidden items-center gap-4 lg:flex">

          <a
            href="mailto:contact@d4interactive.in"
            className="flex items-center gap-2 text-sm text-slate-600"
          >
            <Mail size={16} />
            contact@d4interactive.in
          </a>

          <a
            href="tel:+917675921117"
            className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Call Now
          </a>

        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="lg:hidden"
        >
          {mobileMenu ? (
            <X className="h-7 w-7" />
          ) : (
            <Menu className="h-7 w-7" />
          )}
        </button>

      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="border-t border-slate-200 bg-white lg:hidden">

          <div className="space-y-2 p-6">

            <Link href="/" className="block rounded-lg p-3 hover:bg-blue-50">
              Home
            </Link>

            <Link href="/about" className="block rounded-lg p-3 hover:bg-blue-50">
              About
            </Link>

            <Link href="/services" className="block rounded-lg p-3 hover:bg-blue-50">
              Services
            </Link>

            <Link href="/locations/hyderabad" className="block rounded-lg p-3 hover:bg-blue-50">
              Hyderabad Services
            </Link>

            <Link href="/locations/bengaluru" className="block rounded-lg p-3 hover:bg-blue-50">
              Bengaluru Services
            </Link>

            <Link href="/portfolio" className="block rounded-lg p-3 hover:bg-blue-50">
              Portfolio
            </Link>

            <Link href="/blog" className="block rounded-lg p-3 hover:bg-blue-50">
              Blog
            </Link>

            <Link href="/contact" className="block rounded-lg p-3 hover:bg-blue-50">
              Contact
            </Link>

            <a
              href="tel:+917675921117"
              className="mt-4 block rounded-xl bg-blue-600 px-5 py-4 text-center font-semibold text-white"
            >
              Call +91 76759 21117
            </a>

          </div>

        </div>
      )}
    </header>
  );
}