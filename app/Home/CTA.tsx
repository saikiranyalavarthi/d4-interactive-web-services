import Link from "next/link";
import {
  ArrowRight,
  Phone,
  Mail,
  CheckCircle2,
} from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-blue-600" />

      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-blue-500/30 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="overflow-hidden rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-sm">

          <div className="grid gap-12 p-8 md:p-12 lg:grid-cols-2 lg:p-16">

            {/* LEFT */}
            <div>

              <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white">
                🚀 Let's Grow Your Business
              </span>

              <h2 className="mt-6 text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl">
                Ready To Build Your
                <span className="block text-blue-100">
                  Dream Website?
                </span>
              </h2>

              <p className="mt-6 text-lg leading-8 text-blue-100">
                Looking for Website Development, Website Design,
                SEO Services, Google Ads, Meta Ads or Social Media Marketing
                in Hyderabad and Bengaluru?
              </p>

              <p className="mt-4 text-lg leading-8 text-blue-100">
                D4 Interactive helps businesses generate leads,
                increase online visibility and grow revenue through
                strategic digital solutions.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">

                {[
                  "Website Development",
                  "SEO Services",
                  "Google Ads",
                  "Meta Ads",
                  "Social Media Marketing",
                  "Website Design",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle2 className="h-5 w-5 text-white" />
                    <span className="text-white">
                      {item}
                    </span>
                  </div>
                ))}

              </div>

            </div>

            {/* RIGHT */}
            <div className="rounded-3xl bg-white p-8 shadow-2xl">

              <h3 className="text-3xl font-bold text-slate-900">
                Get Free Consultation
              </h3>

              <p className="mt-4 text-slate-600">
                Speak with our experts and discover how we can
                help your business grow online.
              </p>

              <div className="mt-8 space-y-4">

                <Link
                  href="/contact"
                  className="flex w-full items-center justify-center rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-700"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>

                <a
                  href="tel:+917675921117"
                  className="flex w-full items-center justify-center rounded-xl border-2 border-blue-600 px-6 py-4 font-semibold text-blue-600 transition hover:bg-blue-50"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  +91 76759 21117
                </a>

                <a
                  href="mailto:contact@d4interactive.in"
                  className="flex w-full items-center justify-center rounded-xl border border-slate-200 px-6 py-4 font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  contact@d4interactive.in
                </a>

              </div>

              <div className="mt-8 rounded-2xl bg-blue-50 p-5">
                <p className="font-semibold text-blue-700">
                  ✓ Free Consultation
                </p>
                <p className="font-semibold text-blue-700">
                  ✓ Custom Solutions
                </p>
                <p className="font-semibold text-blue-700">
                  ✓ Fast Project Delivery
                </p>
                <p className="font-semibold text-blue-700">
                  ✓ Dedicated Support
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}