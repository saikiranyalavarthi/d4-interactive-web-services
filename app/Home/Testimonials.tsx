import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    company: "Tech Startup",
    review:
      "D4 Interactive built an amazing website and helped us generate leads through SEO and Google Ads.",
  },
  {
    name: "Ananya Sharma",
    company: "Retail Business",
    review:
      "Professional team, excellent support and outstanding website design services.",
  },
  {
    name: "Vikram Reddy",
    company: "Corporate Firm",
    review:
      "Their digital marketing strategies significantly improved our online presence.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
            Client Testimonials
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            What Our
            <span className="text-blue-600"> Clients Say</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl bg-white p-8 shadow-sm"
            >

              <div className="mb-6 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-blue-600 text-blue-600"
                  />
                ))}
              </div>

              <p className="leading-8 text-slate-600">
                "{item.review}"
              </p>

              <div className="mt-8">
                <h3 className="font-bold text-slate-900">
                  {item.name}
                </h3>

                <p className="text-slate-500">
                  {item.company}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}