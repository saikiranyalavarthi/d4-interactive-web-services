import { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Globe, Search, Megaphone } from "lucide-react";

export const metadata: Metadata = {
  title: "Portfolio | D4 Interactive IT & Web Services Pvt Ltd",
  description:
    "Explore our portfolio of Website Development, Website Design, SEO Services, Google Ads, Meta Ads and Digital Marketing projects across Hyderabad and Bengaluru.",
  keywords: [
    "Website Development Portfolio",
    "SEO Portfolio Hyderabad",
    "Digital Marketing Portfolio",
    "Google Ads Portfolio",
    "Website Design Portfolio",
    "D4 Interactive Projects",
  ],
};

const projects = [
  {
    title: "Corporate Business Website",
    category: "Website Development",
    icon: Globe,
    description:
      "Modern responsive corporate website designed for lead generation and SEO.",
  },
  {
    title: "E-Commerce Store",
    category: "Website Development",
    icon: Globe,
    description:
      "Custom online store with payment gateway integration and product management.",
  },
  {
    title: "SEO Growth Campaign",
    category: "SEO Services",
    icon: Search,
    description:
      "Increased organic traffic and improved Google rankings for local businesses.",
  },
  {
    title: "Google Ads Lead Campaign",
    category: "Google Ads",
    icon: Megaphone,
    description:
      "Generated qualified leads through high-converting Google Ads campaigns.",
  },
  {
    title: "Meta Ads Campaign",
    category: "Meta Ads",
    icon: Megaphone,
    description:
      "Facebook and Instagram advertising campaigns focused on conversions.",
  },
  {
    title: "Digital Marketing Strategy",
    category: "Digital Marketing",
    icon: Search,
    description:
      "Comprehensive digital growth strategy including SEO and paid marketing.",
  },
];

export default function PortfolioPage() {
  return (
    <main className="bg-white">

      {/* Hero */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">

          <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
            Our Portfolio
          </span>

          <h1 className="mt-6 text-5xl font-extrabold text-slate-900 md:text-6xl">
            Projects That Drive
            <span className="block text-blue-600">
              Business Growth
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600">
            Explore our website development, SEO, Google Ads,
            Meta Ads and digital marketing projects delivered
            for businesses across Hyderabad and Bengaluru.
          </p>

        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {projects.map((project, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >

                {/* Image Placeholder */}
                <div className="flex h-64 items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
                  <project.icon className="h-20 w-20 text-blue-600" />
                </div>

                <div className="p-8">

                  <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-600">
                    {project.category}
                  </span>

                  <h2 className="mt-5 text-2xl font-bold text-slate-900">
                    {project.title}
                  </h2>

                  <p className="mt-4 leading-7 text-slate-600">
                    {project.description}
                  </p>

                  <Link
                    href="/contact"
                    className="mt-6 inline-flex items-center gap-2 font-semibold text-blue-600"
                  >
                    Start Similar Project
                    <ArrowUpRight className="h-5 w-5" />
                  </Link>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-6xl px-6">

          <div className="text-center">

            <h2 className="text-4xl font-bold text-slate-900">
              Why Businesses Choose D4 Interactive
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
              We combine creative design, modern development
              and performance-driven digital marketing strategies
              to help businesses grow online.
            </p>

          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-4">

            <div className="rounded-3xl bg-white p-8 text-center shadow-sm">
              <h3 className="text-4xl font-bold text-blue-600">
                100+
              </h3>
              <p className="mt-2 text-slate-600">
                Projects Completed
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 text-center shadow-sm">
              <h3 className="text-4xl font-bold text-blue-600">
                50+
              </h3>
              <p className="mt-2 text-slate-600">
                Happy Clients
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 text-center shadow-sm">
              <h3 className="text-4xl font-bold text-blue-600">
                98%
              </h3>
              <p className="mt-2 text-slate-600">
                Client Satisfaction
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 text-center shadow-sm">
              <h3 className="text-4xl font-bold text-blue-600">
                24/7
              </h3>
              <p className="mt-2 text-slate-600">
                Support
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">

          <h2 className="text-4xl font-bold text-slate-900 md:text-5xl">
            Ready To Start Your Project?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            Let's build a high-performing website and digital
            marketing strategy for your business.
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-flex rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
          >
            Get Free Consultation
          </Link>

        </div>
      </section>

    </main>
  );
}