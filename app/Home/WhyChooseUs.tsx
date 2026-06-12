import {
  ShieldCheck,
  Clock3,
  BadgeCheck,
  Headphones,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Trusted Experts",
    description:
      "Experienced developers and digital marketing specialists.",
  },
  {
    icon: Clock3,
    title: "On-Time Delivery",
    description:
      "Projects completed within deadlines without compromising quality.",
  },
  {
    icon: BadgeCheck,
    title: "Quality Focused",
    description:
      "Premium design, development and marketing standards.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description:
      "Continuous support and maintenance for your business.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
            Why Choose Us
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            Why Businesses Trust
            <span className="text-blue-600"> D4 Interactive</span>
          </h2>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {features.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm"
            >
              <item.icon className="mx-auto h-14 w-14 text-blue-600" />

              <h3 className="mt-6 text-xl font-bold">
                {item.title}
              </h3>

              <p className="mt-4 text-slate-600">
                {item.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}