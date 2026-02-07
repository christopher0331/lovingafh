import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials - Loving Adult Family Home",
  description:
    "Read what families are saying about Loving Adult Family Home. Trusted senior care reviews from real families in Bothell, WA.",
};

const testimonials = [
  {
    name: "JoAnn's Family",
    quote:
      "Our mother, JoAnn, has been living at the Loving Adult Family Home for over 5 years. The owners, Paul and Monica have become part of our family. The care and attention they and the rest of the staff provide to her is amazing. She is always happy when we see her and most importantly clean and well-fed. The home goes out of their way to make special memories for the residents by providing holiday parties and bringing in individuals to play music and entertain the guests. If you are looking for a place for your loved one, please visit and see for yourself how much love and care they provide their residents.",
  },
  {
    name: "A Grateful Daughter",
    quote:
      "Mom has been at Loving Adult Family Home for about 5 months. The care she is receiving is exceptional and very personalized. Last night the family took her out to a special restaurant for a special occasion. We told Loving AFH when the cabulance was coming and they had her dressed in her finest, lipstick and earrings on, and ready to go. It is a very special and \"loving\" place, although mom still laughs at the name.",
  },
  {
    name: "A Caring Family",
    quote:
      "The staff at Loving AFH is remarkable. We took our mom out for a special dinner the other night. The staff had her all ready to go, lipstick on, earrings in and in her best outfit. She looked great and was happy and relaxed. After dinner they were there waiting for her upon her return. Competence and caring by the caregivers make for a truly great combination.",
  },
  {
    name: "Justine's Family",
    quote:
      "We chose Loving Care Adult Family Home over the other homes and facilities we visited based on the higher level of caregivers to resident ratio, the quality of staff, the low turnover rate of care giving staff and the beautiful setting. We made the right decision. Her care has been exemplary. Her primary relationships are now with her caregivers and the caregivers at Loving Adult Family Home are kind, attentive, patient, caring and responsive to requests from family.",
  },
  {
    name: "Monica's Tribute",
    quote:
      "My mother stayed at Loving Adult Family Home for 3 years before she passed away. The key to success is having somebody in charge who really cares about the quality of care — and that person is Monica Duma. Monica is what really makes Loving Adult Family Home special. Her focus and compassion are reflected in the care provided by the numerous care givers.",
  },
  {
    name: "Karla's Husband",
    quote:
      "My wife, Karla has lived in the Loving Adult Family Home for over two years. She had had a bad fall at a different location, and, after seeing LAFH, I knew she would receive the best care. She has. The staff enjoys their jobs which are done with efficiency and humor. Every day I rest assured Karla is receiving the best care. The facility is immaculate and the food varied and good.",
  },
  {
    name: "A Loving Son",
    quote:
      "My father and I were truly blessed to have found Loving Adult Family Home. I cannot fully express how well everyone cared for Dad with total care and respect while maintaining his independence and dignity. LAFH is very special, with extra large, spotless rooms, home-cooked meals tailored to the residents, but most of all, consistent and dedicated caregivers. At LAFH you are truly a family member, not a resident!",
  },
  {
    name: "Yoshiko's Family",
    quote:
      "Since moving into the Loving Adult Family Home, Yoshiko has become healthier overall. She engages in conversations more, laughs, and seems more alert. The AFH staff provides very personalized care and treats Yoshiko like a family member.",
  },
  {
    name: "The Corwin Family",
    quote:
      "The Corwin Family highly recommends Monica and Paul Duma at Loving Adult Family Home for families of loved ones dealing with Alzheimer and other dementia diseases.",
  },
  {
    name: "Home Health Staff",
    quote:
      "They provide excellent care of the residents and the patients. Residents and families are also very happy with the care provided. They are good at communicating with visiting Home Health Hospice staff and have good experience working with hospice patients.",
  },
  {
    name: "A Relieved Daughter",
    quote:
      "Loving Adult Family Home was one of the last places my dad and I visited after an exhausting search. From the minute we pulled into your driveway and saw your beautiful house and grounds, our hope began to rise again. As we toured your home and spoke to you and your husband, Paul, I knew, without a doubt, that this was the place for my mom.",
  },
];

// Subtle background color palette for cards
const cardColors = [
  "bg-emerald-50",
  "bg-amber-50",
  "bg-sky-50",
  "bg-rose-50",
  "bg-violet-50",
  "bg-teal-50",
  "bg-orange-50",
  "bg-indigo-50",
  "bg-lime-50",
  "bg-pink-50",
  "bg-cyan-50",
];

export default function TestimonialsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-primary-dark py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent font-medium text-sm tracking-wide uppercase mb-3">
            What Families Say
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Testimonials
          </h1>
          <p className="mx-auto max-w-2xl text-white/70 text-lg leading-relaxed">
            Don&apos;t just take our word for it — hear from the families who
            have entrusted us with the care of their loved ones.
          </p>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-16 sm:py-20 bg-muted">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <svg
            className="mx-auto h-12 w-12 text-accent mb-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179Zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179Z" />
          </svg>
          <blockquote className="text-lg sm:text-xl leading-relaxed text-foreground/90 mb-6">
            {testimonials[0].quote}
          </blockquote>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-accent" />
            <p className="text-sm font-semibold text-text-secondary">
              — {testimonials[0].name}
            </p>
            <div className="h-px w-8 bg-accent" />
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
              Stories from Our Families
            </h2>
            <p className="text-text-secondary">
              {testimonials.length} heartfelt testimonials from those who know us
              best.
            </p>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {testimonials.slice(1).map((t, idx) => (
              <div
                key={idx}
                className={`break-inside-avoid rounded-2xl ${
                  cardColors[idx % cardColors.length]
                } p-6 sm:p-8 border border-gray-100`}
              >
                {/* Quote icon */}
                <svg
                  className="h-6 w-6 text-accent/60 mb-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179Zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179Z" />
                </svg>
                <p className="text-sm leading-relaxed text-foreground/80 mb-4">
                  {t.quote}
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <p className="text-sm font-semibold text-foreground/70">
                    {t.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-dark py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Join Our Loving Family
          </h2>
          <p className="text-white/70 leading-relaxed mb-8">
            Experience the care and compassion that families have trusted for
            years. Schedule a tour and see for yourself.
          </p>
          <a
            href="tel:+12063699906"
            className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-primary-dark shadow-lg hover:bg-gray-100 transition-colors"
          >
            Call Us: (206) 369-9906
          </a>
        </div>
      </section>
    </>
  );
}
