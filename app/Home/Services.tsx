import {
  Globe,
  Palette,
  Search,
  Megaphone,
  MonitorSmartphone,
  TrendingUp,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Custom websites, corporate websites, business portals and web applications built using Next.js and modern technologies.",
  },
  {
    icon: Palette,
    title: "Website Design",
    description:
      "Modern, responsive and conversion-focused UI/UX designs that engage users and increase conversions.",
  },
  {
    icon: Search,
    title: "SEO Services",
    description:
      "Improve your Google rankings, organic traffic and online visibility with proven SEO strategies.",
  },
  {
    icon: Megaphone,
    title: "Google Ads",
    description:
      "Generate high-quality leads and increase ROI through targeted Google Ads campaigns.",
  },
  {
    icon: MonitorSmartphone,
    title: "Meta Ads",
    description:
      "Reach your audience through Facebook and Instagram advertising campaigns.",
  },
  {
    icon: TrendingUp,
    title: "Social Media Marketing",
    description:
      "Build your brand and engage your audience across all major social media platforms.",
  },
];

export default function Services() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
            Our Services
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            Digital Solutions That
            <span className="text-blue-600"> Drive Growth</span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            D4 Interactive delivers end-to-end digital solutions including
            Website Development, Website Design, SEO Services,
            Google Ads, Meta Ads and Social Media Marketing.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service, index) => (
            <div
              key={index}
              className="group rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <service.icon className="h-14 w-14 text-blue-600" />

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                {service.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {service.description}
              </p>

              <button className="mt-6 font-semibold text-blue-600">
                Learn More →
              </button>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}