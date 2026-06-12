import { Metadata } from "next";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog | D4 Interactive IT & Web Services Pvt Ltd",
  description:
    "Read the latest articles on Website Development, SEO Services, Google Ads, Meta Ads, Digital Marketing, Web Design and Business Growth.",
  keywords: [
    "Digital Marketing Blog",
    "Website Development Blog",
    "SEO Blog Hyderabad",
    "Google Ads Blog",
    "Meta Ads Blog",
    "Web Design Blog",
    "Digital Marketing Hyderabad",
    "SEO Services Hyderabad",
    "Website Development Bengaluru",
  ],
};

const blogs = [
  {
    title: "Why Every Business Needs a Professional Website in 2026",
    category: "Website Development",
    date: "June 2026",
    slug: "#",
    excerpt:
      "Discover why a modern business website is essential for building trust, generating leads and growing your brand online.",
  },
  {
    title: "SEO Services vs Google Ads: Which is Better?",
    category: "SEO",
    date: "June 2026",
    slug: "#",
    excerpt:
      "Learn the differences between SEO and Google Ads and how to choose the right strategy for your business growth.",
  },
  {
    title: "Top Digital Marketing Trends for Hyderabad Businesses",
    category: "Digital Marketing",
    date: "June 2026",
    slug: "#",
    excerpt:
      "Explore the latest digital marketing trends helping businesses attract more customers and increase revenue.",
  },
  {
    title: "How Meta Ads Generate Leads for Local Businesses",
    category: "Meta Ads",
    date: "June 2026",
    slug: "#",
    excerpt:
      "Facebook and Instagram advertising can help local businesses generate quality leads at affordable costs.",
  },
  {
    title: "Website Design Best Practices for Higher Conversions",
    category: "Website Design",
    date: "June 2026",
    slug: "#",
    excerpt:
      "Discover design principles that improve user experience and increase conversion rates.",
  },
  {
    title: "Local SEO Strategies for Hyderabad & Bengaluru Businesses",
    category: "SEO",
    date: "June 2026",
    slug: "#",
    excerpt:
      "Improve your local search visibility and attract nearby customers with effective local SEO techniques.",
  },
];

export default function BlogPage() {
  return (
    <main className="bg-white">

      {/* Hero */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">

          <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
            Knowledge Center
          </span>

          <h1 className="mt-6 text-5xl font-extrabold text-slate-900 md:text-6xl">
            Digital Marketing &
            <span className="block text-blue-600">
              Website Development Blog
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600">
            Expert insights on Website Development, SEO Services,
            Google Ads, Meta Ads, Social Media Marketing and
            Digital Growth strategies.
          </p>

        </div>
      </section>

      {/* Blog Grid */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {blogs.map((blog, index) => (
              <article
                key={index}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >

                {/* Image Placeholder */}
                <div className="h-56 bg-gradient-to-br from-blue-50 to-blue-100" />

                <div className="p-8">

                  <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-600">
                    {blog.category}
                  </span>

                  <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
                    <Calendar size={16} />
                    {blog.date}
                  </div>

                  <h2 className="mt-4 text-2xl font-bold text-slate-900">
                    {blog.title}
                  </h2>

                  <p className="mt-4 leading-7 text-slate-600">
                    {blog.excerpt}
                  </p>

                  <Link
                    href={blog.slug}
                    className="mt-6 inline-flex items-center gap-2 font-semibold text-blue-600"
                  >
                    Read More
                    <ArrowRight size={18} />
                  </Link>

                </div>

              </article>
            ))}

          </div>

        </div>
      </section>

      {/* SEO Content */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-5xl px-6">

          <h2 className="text-4xl font-bold text-slate-900">
            Digital Marketing & Website Development Insights
          </h2>

          <p className="mt-8 leading-8 text-slate-600">
            D4 Interactive IT & Web Services Pvt Ltd shares valuable
            insights on Website Development, Website Design,
            SEO Services, Google Ads and Meta Ads to help
            businesses stay ahead in the digital world.
          </p>

          <p className="mt-6 leading-8 text-slate-600">
            Whether you're a startup, small business or enterprise,
            our blog provides actionable strategies to improve
            online visibility, generate leads and increase revenue.
          </p>

          <p className="mt-6 leading-8 text-slate-600">
            We regularly publish articles focused on Hyderabad,
            Bengaluru and businesses across India looking to
            accelerate their digital growth.
          </p>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">

          <h2 className="text-4xl font-bold text-slate-900">
            Need Help Growing Your Business?
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Let's discuss your website development and digital
            marketing goals.
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-flex rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white hover:bg-blue-700"
          >
            Contact Us Today
          </Link>

        </div>
      </section>

    </main>
  );
}