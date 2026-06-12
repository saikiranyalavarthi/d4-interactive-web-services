import { Metadata } from "next";
import {
  Award,
  Users,
  Target,
  Rocket,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "About Us | D4 Interactive IT & Web Services Pvt Ltd",
  description:
    "Learn about D4 Interactive IT & Web Services Pvt Ltd, a leading Website Development and Digital Marketing Company serving Hyderabad and Bengaluru.",
  keywords: [
    "About D4 Interactive",
    "Website Development Company Hyderabad",
    "Website Development Company Bengaluru",
    "Digital Marketing Company Hyderabad",
    "SEO Services Hyderabad",
    "Google Ads Agency Hyderabad",
    "Website Design Company Bengaluru",
  ],
};

const values = [
  {
    icon: Target,
    title: "Results Driven",
    desc: "We focus on measurable business growth and ROI.",
  },
  {
    icon: Rocket,
    title: "Innovation",
    desc: "Modern technologies and creative digital solutions.",
  },
  {
    icon: Users,
    title: "Client First",
    desc: "Building long-term relationships through trust.",
  },
  {
    icon: Award,
    title: "Quality",
    desc: "Premium standards in design, development and marketing.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-white">

      {/* Hero */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">

            <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
              About D4 Interactive
            </span>

            <h1 className="mt-6 text-5xl font-extrabold text-slate-900 md:text-6xl">
              Driving Digital Growth
              <span className="block text-blue-600">
                Through Innovation
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-4xl text-lg leading-8 text-slate-600">
              D4 Interactive IT & Web Services Pvt Ltd is a leading
              Website Development and Digital Marketing Company
              helping businesses establish a strong online presence
              across Hyderabad, Bengaluru and India.
            </p>

          </div>

        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-16 lg:grid-cols-2">

            <div>
              <span className="font-semibold text-blue-600">
                OUR STORY
              </span>

              <h2 className="mt-4 text-4xl font-bold text-slate-900">
                Helping Businesses Succeed Online
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                D4 Interactive specializes in Website Development,
                Website Design, SEO Services, Google Ads,
                Meta Ads and Social Media Marketing.
              </p>

              <p className="mt-6 leading-8 text-slate-600">
                Our mission is to help startups, SMEs and enterprises
                build powerful digital experiences that generate leads,
                increase visibility and drive business growth.
              </p>

              <p className="mt-6 leading-8 text-slate-600">
                From custom websites to performance marketing campaigns,
                we provide end-to-end solutions tailored to your business goals.
              </p>
            </div>

            <div className="rounded-[40px] bg-blue-600 p-10 text-white">

              <h3 className="text-3xl font-bold">
                Why Businesses Choose Us
              </h3>

              <div className="mt-8 space-y-5">

                {[
                  "Professional Website Development",
                  "SEO & Digital Marketing Experts",
                  "Google Ads Specialists",
                  "Custom Solutions",
                  "Fast Project Delivery",
                  "Dedicated Support",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 size={20} />
                    {item}
                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Core Values */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">

            <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
              Core Values
            </span>

            <h2 className="mt-6 text-4xl font-bold text-slate-900">
              What Drives Our Success
            </h2>

          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
              >
                <value.icon className="h-12 w-12 text-blue-600" />

                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  {value.title}
                </h3>

                <p className="mt-4 text-slate-600">
                  {value.desc}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* SEO Content */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-5xl px-6">

          <h2 className="text-4xl font-bold text-slate-900">
            Website Development & Digital Marketing Company
            in Hyderabad and Bengaluru
          </h2>

          <p className="mt-8 leading-8 text-slate-600">
            As a trusted Website Development Company in Hyderabad and Bengaluru,
            D4 Interactive delivers modern websites designed to improve
            user experience and increase conversions.
          </p>

          <p className="mt-6 leading-8 text-slate-600">
            Our team also provides SEO Services, Google Ads,
            Meta Ads and Social Media Marketing solutions
            to help businesses attract more customers online.
          </p>

          <p className="mt-6 leading-8 text-slate-600">
            Whether you need a business website, eCommerce platform
            or complete digital marketing strategy, D4 Interactive
            is your trusted technology partner.
          </p>

        </div>
      </section>

    </main>
  );
}