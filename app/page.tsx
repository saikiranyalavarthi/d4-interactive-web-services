import CTA from "./Home/CTA";
import FAQ from "./Home/FAQ";
import Hero from "./Home/Hero";
import Portfolio from "./Home/Portfolio";
import Services from "./Home/Services";
import Stats from "./Home/Stats";
import Testimonials from "./Home/Testimonials";
import WhyChooseUs from "./Home/WhyChooseUs";


export const metadata = {
  title:
    "D4 Interactive IT & Web Services Pvt Ltd | Website Development & Digital Marketing Company Hyderabad & Bengaluru",
  description:
    "D4 Interactive provides Website Development, Website Design, SEO Services, Google Ads, Meta Ads, Social Media Marketing and Branding solutions in Hyderabad and Bengaluru.",
  keywords: [
    "Website Development Company Hyderabad",
    "Website Design Company Hyderabad",
    "SEO Services Hyderabad",
    "Digital Marketing Company Hyderabad",
    "Google Ads Agency Hyderabad",
    "Meta Ads Agency Hyderabad",
    "Website Development Company Bengaluru",
    "Website Design Company Bengaluru",
    "SEO Services Bengaluru",
    "Digital Marketing Company Bengaluru",
  ],
};

export default function HomePage() {
  return (
    <main className="bg-white text-slate-900">

      <Hero />

      <Services />

      <WhyChooseUs />

      <Stats />

      {/* SEO CONTENT */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-6xl px-6">

          <div className="text-center">
            <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
              Digital Growth Solutions
            </span>

            <h2 className="mt-6 text-4xl font-bold md:text-5xl">
              Leading Website Development &
              <span className="text-blue-600">
                {" "}Digital Marketing Company
              </span>
            </h2>
          </div>

          <div className="mt-12 space-y-6 text-lg leading-8 text-slate-600">

            <p>
              D4 Interactive IT & Web Services Pvt Ltd is a trusted
              Website Development Company in Hyderabad and Bengaluru,
              helping businesses build modern websites that drive growth.
            </p>

            <p>
              We specialize in Website Design, SEO Services,
              Google Ads, Meta Ads, Social Media Marketing,
              E-Commerce Development and Branding Solutions.
            </p>

            <p>
              Our team combines creativity, technology and marketing
              expertise to help businesses generate leads, improve
              search rankings and increase revenue.
            </p>

            <p>
              Whether you are a startup, local business or enterprise,
              we deliver scalable digital solutions tailored to your goals.
            </p>

          </div>
        </div>
      </section>

      <Portfolio />

      <Testimonials />

      <FAQ />

      <CTA />

    </main>
  );
}