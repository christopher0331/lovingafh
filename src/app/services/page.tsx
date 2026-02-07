import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Services - Loving Adult Family Home",
  description:
    "Comprehensive senior care services including health, nutrition, transportation, beauty, and more at Loving Adult Family Home in Bothell, WA.",
};

const services = [
  {
    id: "health",
    title: "Health",
    image: "https://lovingafh.com/wp-content/uploads/2015/12/service_health.jpg",
    paragraphs: [
      "Individuals working with memory loss must have compassion, understanding and creativity. Our staff is carefully selected and trained to understand and manage the unique challenges associated with dementia. Many of the same caregivers are with a resident throughout the day, helping with all their needs.",
      "Alzheimer's and dementia care experts work with Loving Adult Family Home to provide training, ongoing support, and creative problem-solving to all memory care staff.",
    ],
    items: [
      "Alzheimer's and related Dementias certified",
      "Mental Health",
      "Vital Sign Monitoring",
      "Medication Administration",
      "Medical Supervision",
      "Bathing Assistance",
      "Behavioral support",
      "Depression",
      "Stroke patients",
      "Parkinson patients",
      "Respite and Hospice care",
      "Developmentally disabled",
      "Diabetic management and injections",
      "Incontinence Care Management",
      "Special diet requirements",
      "Congestive Heart Failure",
      "Enteral feeding",
      "Ostomy care",
      "Colostomy care",
      "Foley care",
      "24-Hour Personalized Care",
      "Nurse Delegated wounds care and dressing changes",
      "Blood draw and regular UTI testing available on-site",
      "Special dietary needs and preferences accommodated",
      "Medication Management",
    ],
  },
  {
    id: "nutrition",
    title: "Nutrition",
    image:
      "https://lovingafh.com/wp-content/uploads/2015/12/service_nutrition.jpg",
    paragraphs: [
      "Eating well is important at any age. But health issues and physical limitations sometimes make it difficult for seniors to get the nutrients they need for a balanced diet. Poor nutrition and malnutrition occur in 15 to 50 percent of the elderly population.",
      "We offer nutritionally-dense foods including healthy fats, whole grains, fresh fruits and vegetables, and protein-rich options. This ensures residents receive all the vitamins and minerals needed to maintain proper health.",
      "Many seniors don't like to eat large meals or don't feel hungry enough to eat three full meals a day. We encourage several mini-meals throughout the day, making sure each is nutritionally-dense with plenty of fruits, vegetables, and whole grains.",
      "We enhance aromas and flavors with herbs, marinades, dressings, and sauces. Switching between a variety of foods during one meal keeps meals interesting and appetizing.",
    ],
    items: [
      "Fresh home-cooked meals",
      "Daily baked goods",
      "Individual preferences respected",
      "Special diets accommodated",
      "Weekly group menu planning",
      "Snacks offered between meals",
    ],
  },
  {
    id: "transportation",
    title: "Transportation",
    image:
      "https://lovingafh.com/wp-content/uploads/2015/12/service_transport.jpg",
    paragraphs: [
      "Transportation is available upon request for appointments and outings.",
    ],
    items: [],
  },
  {
    id: "beauty",
    title: "Beauty",
    image: "https://lovingafh.com/wp-content/uploads/2015/12/service_beauty.jpg",
    paragraphs: [],
    items: [
      "Hair care services",
      "Makeup services",
      "Podiatry services",
      "Manicures",
      "Barber services",
    ],
  },
  {
    id: "other",
    title: "Other Services",
    image: "https://lovingafh.com/wp-content/uploads/2015/12/service_dine.jpg",
    paragraphs: [],
    items: [
      "Behavioral & Needs Assessments",
      "Individualized Plan of Care",
      "Recreation Room with Daily Activities",
      "Housekeeping",
      "Laundry Service",
      "Guest Meals",
      "Party Facilities",
      "Safety and security systems, including a 24-hour emergency call system",
      "Professional staffing 24 hours a day",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-primary-dark py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent font-medium text-sm tracking-wide uppercase mb-3">
            What We Offer
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Our Services
          </h1>
          <p className="mx-auto max-w-2xl text-white/70 text-lg leading-relaxed">
            Comprehensive senior care with professional staffing available 24
            hours a day, providing a wide range of services for your loved ones.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-20 sm:space-y-28">
            {services.map((service, idx) => (
              <div
                key={service.id}
                id={service.id}
                className={`flex flex-col gap-8 lg:gap-16 ${
                  idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-start`}
              >
                {/* Image */}
                <div className="w-full lg:w-5/12 shrink-0">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 42vw"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-7/12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-1 w-10 rounded-full bg-accent" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-text-secondary">
                      Service
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-5">
                    {service.title}
                  </h2>

                  {service.paragraphs.length > 0 && (
                    <div className="space-y-4 mb-6">
                      {service.paragraphs.map((p, i) => (
                        <p
                          key={i}
                          className="text-text-secondary leading-relaxed"
                        >
                          {p}
                        </p>
                      ))}
                    </div>
                  )}

                  {service.items.length > 0 && (
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                      {service.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-sm text-foreground/80"
                        >
                          <svg
                            className="h-5 w-5 text-primary shrink-0 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m4.5 12.75 6 6 9-13.5"
                            />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Have Questions About Our Services?
          </h2>
          <p className="text-text-secondary leading-relaxed mb-8">
            We&apos;re here to help you find the best care solution for your
            loved one. Contact us today to learn more.
          </p>
          <a
            href="tel:+12063699906"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark transition-colors"
          >
            Call Us: (206) 369-9906
          </a>
        </div>
      </section>
    </>
  );
}
