import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Corporate Website Development",
    category: "Website Development",
    description:
      "Modern responsive business website with SEO optimization and lead generation.",
  },
  {
    title: "E-Commerce Store",
    category: "E-Commerce Development",
    description:
      "High-performance online store with payment gateway integration.",
  },
  {
    title: "SEO Growth Campaign",
    category: "SEO Services",
    description:
      "Improved rankings and generated organic leads through strategic SEO.",
  },
  {
    title: "Google Ads Campaign",
    category: "Digital Marketing",
    description:
      "Generated quality leads with targeted Google Ads campaigns.",
  },
];

export default function Portfolio() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        
        <div className="text-center">
          <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
            Featured Work
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            Recent Projects &
            <span className="text-blue-600"> Success Stories</span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            Explore some of our website development, SEO, digital marketing,
            Google Ads and branding projects delivered for clients.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">

          {projects.map((project, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="h-64 bg-gradient-to-br from-blue-50 to-blue-100" />

              <div className="p-8">

                <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-600">
                  {project.category}
                </span>

                <h3 className="mt-5 text-2xl font-bold text-slate-900">
                  {project.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {project.description}
                </p>

                <Link
                  href="/portfolio"
                  className="mt-6 inline-flex items-center gap-2 font-semibold text-blue-600"
                >
                  View Case Study
                  <ArrowUpRight className="h-5 w-5" />
                </Link>

              </div>
            </div>
          ))}

        </div>

        <div className="mt-14 text-center">
          <Link
            href="/portfolio"
            className="inline-flex rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
          >
            View All Projects
          </Link>
        </div>

      </div>
    </section>
  );
}