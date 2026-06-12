import { Metadata } from "next";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | D4 Interactive IT & Web Services Pvt Ltd",
  description:
    "Contact D4 Interactive IT & Web Services Pvt Ltd for Website Development, SEO Services, Google Ads, Meta Ads and Digital Marketing solutions in Hyderabad and Bengaluru.",
  keywords: [
    "Contact D4 Interactive",
    "Website Development Company Hyderabad",
    "Digital Marketing Company Hyderabad",
    "SEO Services Hyderabad",
    "Website Development Company Bengaluru",
    "Digital Marketing Company Bengaluru",
  ],
};

export default function ContactPage() {
  return (
    <main className="bg-white">

      {/* Hero */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">

            <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
              Contact Us
            </span>

            <h1 className="mt-6 text-5xl font-extrabold text-slate-900 md:text-6xl">
              Let's Build Something
              <span className="block text-blue-600">
                Amazing Together
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600">
              Looking for Website Development, SEO Services,
              Google Ads, Meta Ads or Digital Marketing?
              Get in touch with our experts today.
            </p>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-12 lg:grid-cols-2">

            {/* Left Side */}
            <div>

              <h2 className="text-4xl font-bold text-slate-900">
                Get In Touch
              </h2>

              <p className="mt-6 text-lg text-slate-600">
                We're here to help your business grow online.
                Contact us for a free consultation.
              </p>

              <div className="mt-10 space-y-6">

                <div className="flex items-start gap-4">
                  <Phone className="mt-1 text-blue-600" />
                  <div>
                    <h3 className="font-bold text-slate-900">
                      Phone
                    </h3>
                    <a
                      href="tel:+917675921117"
                      className="text-slate-600"
                    >
                      +91 76759 21117
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="mt-1 text-blue-600" />
                  <div>
                    <h3 className="font-bold text-slate-900">
                      Email
                    </h3>
                    <a
                      href="mailto:contact@d4interactive.in"
                      className="text-slate-600"
                    >
                      contact@d4interactive.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 text-blue-600" />
                  <div>
                    <h3 className="font-bold text-slate-900">
                      Service Areas
                    </h3>
                    <p className="text-slate-600">
                      Hyderabad & Bengaluru
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="mt-1 text-blue-600" />
                  <div>
                    <h3 className="font-bold text-slate-900">
                      Working Hours
                    </h3>
                    <p className="text-slate-600">
                      Monday - Saturday
                    </p>
                    <p className="text-slate-600">
                      9:00 AM - 7:00 PM
                    </p>
                  </div>
                </div>

              </div>

            </div>

            {/* Right Side Form */}
            <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-xl">

              <h3 className="text-3xl font-bold text-slate-900">
                Request Free Consultation
              </h3>

              <p className="mt-3 text-slate-600">
                Fill out the form and we'll get back to you shortly.
              </p>

              <form className="mt-8 space-y-5">

                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full rounded-xl border border-slate-300 px-4 py-4 outline-none focus:border-blue-600"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-xl border border-slate-300 px-4 py-4 outline-none focus:border-blue-600"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full rounded-xl border border-slate-300 px-4 py-4 outline-none focus:border-blue-600"
                />

                <select
                  className="w-full rounded-xl border border-slate-300 px-4 py-4 outline-none focus:border-blue-600"
                >
                  <option>Select Service</option>
                  <option>Website Development</option>
                  <option>Website Design</option>
                  <option>SEO Services</option>
                  <option>Google Ads</option>
                  <option>Meta Ads</option>
                  <option>Social Media Marketing</option>
                </select>

                <textarea
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="w-full rounded-xl border border-slate-300 px-4 py-4 outline-none focus:border-blue-600"
                />

                <button
                  type="submit"
                  className="flex w-full items-center justify-center rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-700"
                >
                  Send Inquiry
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>

              </form>

            </div>

          </div>

        </div>
      </section>

      {/* SEO Content */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-5xl px-6">

          <h2 className="text-4xl font-bold text-slate-900">
            Website Development & Digital Marketing Company
            in Hyderabad and Bengaluru
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            D4 Interactive IT & Web Services Pvt Ltd provides
            Website Development, Website Design, SEO Services,
            Google Ads, Meta Ads and Social Media Marketing solutions
            for businesses looking to grow online.
          </p>

          <p className="mt-6 leading-8 text-slate-600">
            Contact our team today and discover how we can help
            improve your digital presence and generate more leads.
          </p>

        </div>
      </section>

    </main>
  );
}