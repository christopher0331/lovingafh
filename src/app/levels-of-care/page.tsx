import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Levels of Care - Loving Adult Family Home",
  description:
    "From independent living to hospice care, Loving Adult Family Home offers five levels of personalized senior care in Bothell, WA.",
};

const levels = [
  {
    level: 1,
    title: "Independent Living",
    image: "https://lovingafh.com/wp-content/uploads/2015/12/level1.jpg",
    paragraphs: [
      "Whether single or happily married, independent living at Loving Adult Family Home will provide the flexibility and freedom you deserve with the peace of mind you desire.",
      "Let us take care of the chores, including cooking, housekeeping, and yard maintenance, so that you can focus on the things you love in life.",
      "If your needs should change, we will gladly assist you by providing an individualized care plan to suit your needs.",
      "We also welcome all the personal touches that make a house a home.",
    ],
    items: [],
  },
  {
    level: 2,
    title: "Assisted Living",
    image: "https://lovingafh.com/wp-content/uploads/2015/12/level2.jpg",
    paragraphs: [
      "Residents at this level have functional limitations and psychosocial needs requiring not only care and supervision but frequent assistance with personal activities of daily living and active intervention to help them maintain their potential for independent living.",
      "Assisted living is aimed at helping residents remain as self-sufficient as possible with the promise of assistance when it's needed.",
      "Loving Adult Family Home offers residents a great amount of independence while still providing assistance in areas where it is needed. Many are here because they want a simple lifestyle without the worry of maintaining a home, and they seek the companionship of other people their own age.",
    ],
    items: [],
  },
  {
    level: 3,
    title: "Extensive Assistance",
    image: "https://lovingafh.com/wp-content/uploads/2015/12/level3.jpg",
    paragraphs: [
      "Residents at this level require the services of lower levels and rely on the facility for extensive assistance with personal activities of daily living. This level includes residents with chronic health problems and residents recovering from illness or injury who also require the occasional services of an appropriate skilled professional.",
    ],
    items: [],
  },
  {
    level: 4,
    title: "Extended & Intensive Care",
    image: "https://lovingafh.com/wp-content/uploads/2015/12/level4.jpg",
    paragraphs: [
      "Extended Care includes residents with incontinence, assistance needed in medication management, eating, bathing, toileting, dressing and transferring.",
      "Intensive Care includes residents with catheter, dressing changes, diabetes and other heavy care needs such as being bedridden, lifting (one or two persons lifting, or Hoyer lift required), total non-ambulatory, or advanced Alzheimer's disease which requires more staff time.",
    ],
    items: [],
  },
  {
    level: 5,
    title: "Hospice Care",
    image:
      "https://lovingafh.com/wp-content/uploads/2015/12/service_other.jpg",
    paragraphs: [
      "Residents who are facing a life threatening illness without a cure are included in this category. The Hospice program follows the Doctor's orders and is performed by skilled, compassionate RN's.",
      "The hospice concept of comfort and dignity is fully embraced by Loving Adult Family Home and we are committed to assisting our residents to access this benefit if desired.",
      "The resident selects a hospice provider, enters into an agreement with the selected hospice provider, and notifies Loving Adult Family Home of their choice. Staff will then meet with the hospice provider to develop a coordinated plan of care.",
      "Services include feeding, positioning every 2 hours, changing depends, bed baths, etc. as needed for the resident's well being and comfort.",
    ],
    items: [
      "Registered Nurse Visits",
      "Social Worker Visits",
      "Chaplain Visits",
      "Home Health Aide Services",
      "Counselors",
      "Medications",
      "Equipment",
    ],
  },
];

export default function LevelsOfCarePage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-primary-dark py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent font-medium text-sm tracking-wide uppercase mb-3">
            Personalized Care
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Levels of Care
          </h1>
          <p className="mx-auto max-w-2xl text-white/70 text-lg leading-relaxed">
            From independent living to hospice care, we provide the right level
            of support at every stage.
          </p>
        </div>
      </section>

      {/* RN Banner */}
      <section className="bg-accent/10 border-b border-accent/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-accent">
              <Image
                src="https://lovingafh.com/wp-content/uploads/2016/02/rnonstaff.jpg"
                alt="RN on Staff"
                fill
                className="object-cover"
                sizes="64px"
              />
            </div>
            <div className="text-center sm:text-left">
              <p className="font-semibold text-foreground">
                Registered Nurse on Staff
              </p>
              <p className="text-sm text-text-secondary">
                Our experienced RN oversees all medical care and ensures the
                highest standards of health management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Levels */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 sm:space-y-24">
            {levels.map((level, idx) => (
              <div
                key={level.level}
                className={`flex flex-col gap-8 lg:gap-14 ${
                  idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-start`}
              >
                {/* Image */}
                <div className="w-full lg:w-5/12 shrink-0">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
                    <Image
                      src={level.image}
                      alt={`Level ${level.level} - ${level.title}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 42vw"
                    />
                    {/* Level badge */}
                    <div className="absolute top-4 left-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white font-bold text-lg shadow-md">
                      {level.level}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-7/12">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                      Level {level.level}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-5">
                    {level.title}
                  </h2>

                  <div className="space-y-4 mb-6">
                    {level.paragraphs.map((p, i) => (
                      <p
                        key={i}
                        className="text-text-secondary leading-relaxed"
                      >
                        {p}
                      </p>
                    ))}
                  </div>

                  {level.items.length > 0 && (
                    <>
                      <p className="text-sm font-semibold text-foreground mb-3">
                        A patient at this level has access to:
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                        {level.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-center gap-2.5 text-sm text-foreground/80"
                          >
                            <svg
                              className="h-5 w-5 text-primary shrink-0"
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
                    </>
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
            Not Sure Which Level Is Right?
          </h2>
          <p className="text-text-secondary leading-relaxed mb-8">
            Every person is unique. Let us help you determine the right level of
            care with a personalized assessment.
          </p>
          <a
            href="tel:+12063699906"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark transition-colors"
          >
            Contact Us for an Assessment
          </a>
        </div>
      </section>
    </>
  );
}
