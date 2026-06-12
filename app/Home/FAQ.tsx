"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question:
      "Why choose D4 Interactive for Website Development in Hyderabad?",
    answer:
      "D4 Interactive provides custom website development solutions using modern technologies like Next.js, React, Node.js and scalable cloud infrastructure. We focus on performance, SEO and lead generation.",
  },
  {
    question:
      "Do you provide Website Development services in Bengaluru?",
    answer:
      "Yes. We offer website development, website design, SEO services, Google Ads, Meta Ads and digital marketing services for businesses across Bengaluru.",
  },
  {
    question:
      "How much does a business website cost?",
    answer:
      "The cost depends on the number of pages, features, integrations and custom functionality required. Contact us for a free quote tailored to your business.",
  },
  {
    question:
      "Do you provide SEO Services in Hyderabad and Bengaluru?",
    answer:
      "Yes. Our SEO services include keyword research, technical SEO, local SEO, on-page SEO, content optimization and link building strategies.",
  },
  {
    question:
      "Do you manage Google Ads and Meta Ads campaigns?",
    answer:
      "Yes. We create and manage Google Ads, Facebook Ads and Instagram Ads campaigns focused on lead generation and business growth.",
  },
  {
    question:
      "Can you redesign my existing website?",
    answer:
      "Absolutely. We redesign outdated websites with modern UI/UX, improved performance, better SEO and mobile responsiveness.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-5xl px-6">

        <div className="text-center">
          <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            Questions About
            <span className="text-blue-600">
              {" "}Website Development & Digital Marketing
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Get answers about Website Development, SEO Services,
            Google Ads, Meta Ads and Digital Marketing solutions.
          </p>
        </div>

        <div className="mt-16 space-y-4">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-slate-200"
            >
              <button
                onClick={() =>
                  setActive(active === index ? null : index)
                }
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-semibold text-slate-900">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`h-5 w-5 transition ${
                    active === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {active === index && (
                <div className="border-t border-slate-100 px-6 py-5 text-slate-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}