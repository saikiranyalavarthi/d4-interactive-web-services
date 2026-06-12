import Link from "next/link";
import {
  ArrowRight,
  Globe,
  Search,
  Megaphone,
  CheckCircle2,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background Blur */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-100/40 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid min-h-screen items-center gap-16 py-20 lg:grid-cols-2">

          {/* LEFT CONTENT */}
          <div>

            <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-700">
              🚀 Hyderabad & Bengaluru Digital Growth Partner
            </span>

            <h1 className="mt-8 text-5xl font-extrabold leading-tight text-slate-900 sm:text-6xl lg:text-7xl">
              Best
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                {" "}Website Development
              </span>
              <br />
              & Digital Marketing
              <br />
              Company
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 lg:text-xl">
              D4 Interactive IT & Web Services Pvt Ltd helps startups,
              businesses and enterprises grow through professional
              Website Development, SEO Services, Google Ads,
              Meta Ads and Social Media Marketing solutions across
              Hyderabad and Bengaluru.
            </p>

            {/* Service Badges */}
            <div className="mt-8 flex flex-wrap gap-3">

              {[
                "Website Development",
                "SEO Services",
                "Google Ads",
                "Meta Ads",
                "Social Media Marketing",
                "Website Design",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700"
                >
                  {item}
                </span>
              ))}

            </div>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                href="/contact"
                className="group inline-flex items-center rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-blue-700"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 transition group-hover:translate-x-1" />
              </Link>

              <Link
                href="/portfolio"
                className="rounded-xl border-2 border-blue-600 px-8 py-4 font-semibold text-blue-600 transition hover:bg-blue-50"
              >
                View Portfolio
              </Link>

            </div>

            {/* Trust Points */}
            <div className="mt-10 grid gap-3 sm:grid-cols-2">

              {[
                "100+ Projects Delivered",
                "SEO Experts",
                "Google Ads Specialists",
                "Dedicated Support",
              ].map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-2"
                >
                  <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  <span className="text-slate-700">
                    {point}
                  </span>
                </div>
              ))}

            </div>

            {/* Contact */}
            <div className="mt-10 flex flex-col gap-2">

              <a
                href="tel:+917675921117"
                className="font-semibold text-blue-600"
              >
                📞 +91 76759 21117
              </a>

              <a
                href="mailto:contact@d4interactive.in"
                className="font-semibold text-blue-600"
              >
                ✉️ contact@d4interactive.in
              </a>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="relative">

            <div className="rounded-[40px] border border-blue-100 bg-white p-8 shadow-2xl">

              <div className="space-y-6">

                <div className="rounded-3xl border border-blue-100 p-6 transition hover:shadow-lg">
                  <Globe className="h-12 w-12 text-blue-600" />
                  <h3 className="mt-4 text-xl font-bold text-slate-900">
                    Website Development
                  </h3>
                  <p className="mt-2 text-slate-600">
                    Custom websites built with Next.js, React and modern technologies.
                  </p>
                </div>

                <div className="rounded-3xl border border-blue-100 p-6 transition hover:shadow-lg">
                  <Search className="h-12 w-12 text-blue-600" />
                  <h3 className="mt-4 text-xl font-bold text-slate-900">
                    SEO Services
                  </h3>
                  <p className="mt-2 text-slate-600">
                    Improve rankings, traffic and business visibility.
                  </p>
                </div>

                <div className="rounded-3xl border border-blue-100 p-6 transition hover:shadow-lg">
                  <Megaphone className="h-12 w-12 text-blue-600" />
                  <h3 className="mt-4 text-xl font-bold text-slate-900">
                    Google & Meta Ads
                  </h3>
                  <p className="mt-2 text-slate-600">
                    Generate quality leads through paid advertising.
                  </p>
                </div>

              </div>
            </div>

            {/* Stats */}
            <div className="absolute -left-5 top-10 hidden rounded-2xl border border-blue-100 bg-white px-6 py-4 shadow-xl lg:block">
              <h4 className="text-3xl font-bold text-blue-600">
                100+
              </h4>
              <p className="text-sm text-slate-600">
                Projects Delivered
              </p>
            </div>

            <div className="absolute -right-5 bottom-10 hidden rounded-2xl border border-blue-100 bg-white px-6 py-4 shadow-xl lg:block">
              <h4 className="text-3xl font-bold text-blue-600">
                98%
              </h4>
              <p className="text-sm text-slate-600">
                Client Satisfaction
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}