import Image from "next/image";
import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";

const serviceCards = [
  {
    title: "Services",
    image: "https://lovingafh.com/wp-content/uploads/2015/12/service_health.jpg",
    description:
      "With professional staffing available 24 hours a day, we provide a wide range of services for your loved ones.",
    items: ["Health", "Nutrition", "Transportation", "Beauty"],
    href: "/services",
  },
  {
    title: "Levels of Care",
    image: "https://lovingafh.com/wp-content/uploads/2015/12/service_other.jpg",
    description:
      "Whether single or happily married, independent living at Loving AFH offers flexibility and freedom with peace of mind.",
    items: ["Level 1", "Level 2", "Level 3", "Level 4"],
    href: "/levels-of-care",
  },
  {
    title: "Activities",
    image:
      "https://lovingafh.com/wp-content/uploads/2015/12/activity_health.jpg",
    description:
      "Develop your mind, body and soul. We provide a wide range of activities from art & crafts to exercise programs.",
    items: ["Art & Crafts", "Games", "Recreation", "Religious"],
    href: "/activities",
  },
];

const highlights = [
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
    title: "24/7 Care",
    description: "Round-the-clock professional caregivers ensuring safety and comfort at all hours.",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
    ),
    title: "Family Atmosphere",
    description: "A true home environment where residents are treated like family, not patients.",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75-1.5.75a3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0L3 16.5m15-3.379a48.474 48.474 0 0 0-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 0 1 3 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 0 1 6 13.12M12.265 3.11a.375.375 0 1 1-.53 0L12 2.845l.265.265Z" />
      </svg>
    ),
    title: "Home-Cooked Meals",
    description: "Nutritious, freshly prepared meals tailored to individual dietary needs and preferences.",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
    title: "Safety & Security",
    description: "24-hour emergency call system and comprehensive security for complete peace of mind.",
  },
];

const galleryPreview = [
  { src: "https://lovingafh.com/wp-content/uploads/2024/12/1-1024x684.jpg", width: 1024, height: 684 },
  { src: "https://lovingafh.com/wp-content/uploads/2024/12/3-1024x684.jpg", width: 1024, height: 684 },
  { src: "https://lovingafh.com/wp-content/uploads/2024/12/6-1024x684.jpg", width: 1024, height: 684 },
  { src: "https://lovingafh.com/wp-content/uploads/2024/12/9-1024x768.jpg", width: 1024, height: 768 },
  { src: "https://lovingafh.com/wp-content/uploads/2024/12/21-1024x681.jpg", width: 1024, height: 681 },
  { src: "https://lovingafh.com/wp-content/uploads/2024/12/28-1024x684.jpg", width: 1024, height: 684 },
];

const activityHighlights = [
  {
    title: "Art & Crafts",
    image: "https://lovingafh.com/wp-content/uploads/2015/12/activity_art.jpg",
    description: "Elders can utilize their creative potential and make a variety of items, from simple to elaborate.",
  },
  {
    title: "Games",
    image: "https://lovingafh.com/wp-content/uploads/2015/12/activity_games.jpg",
    description: "Improve memory, dexterity, reduce stress, and enjoy the excitement of friendly competition.",
  },
  {
    title: "Recreation",
    image: "https://lovingafh.com/wp-content/uploads/2015/12/activity_relax.jpg",
    description: "Stay active with walking, strengthening exercises, stretching, and balance programs.",
  },
  {
    title: "Relaxing Massage",
    image: "https://lovingafh.com/wp-content/uploads/2016/02/relaxingmassagemain.jpg",
    description: "Professional massage therapy tailored to senior needs for improved health and well-being.",
  },
];

const testimonials = [
  {
    name: "JoAnn's Family",
    quote:
      "The owners, Paul and Monica have become part of our family. The care and attention they and the rest of the staff provide to her is amazing. She is always happy when we see her.",
  },
  {
    name: "A Loving Son",
    quote:
      "My father and I were truly blessed to have found Loving Adult Family Home. LAFH is very special, with extra large, spotless rooms, home-cooked meals tailored to the residents. At LAFH you are truly a family member, not a resident!",
  },
  {
    name: "Karla's Husband",
    quote:
      "The staff enjoys their jobs which are done with efficiency and humor. Every day I rest assured Karla is receiving the best care. The facility is immaculate and the food varied and good.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Slider */}
      <HeroSlider />

      {/* Highlights Bar */}
      <section className="relative z-10 py-8 sm:py-0 sm:-mt-16 bg-muted sm:bg-transparent">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {highlights.map((h) => (
              <div
                key={h.title}
                className="bg-white rounded-2xl p-6 shadow-md sm:shadow-lg border border-gray-100 flex items-start gap-4"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  {h.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm">
                    {h.title}
                  </h3>
                  <p className="text-xs text-text-secondary mt-1 leading-relaxed">
                    {h.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Welcome / About Section */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="w-full lg:w-5/12 shrink-0">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="https://lovingafh.com/wp-content/uploads/2024/12/2-1024x684.jpg"
                  alt="Loving Adult Family Home"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
              </div>
            </div>
            {/* Text */}
            <div className="w-full lg:w-7/12">
              <p className="text-primary font-medium text-sm tracking-wide uppercase mb-3">
                Welcome to Loving AFH
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Where Every Resident Is Family
              </h2>
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  At Loving Adult Family Home, we feel that each person should be
                  treated as a member of a family. We believe our residents who
                  need additional health care deserve the very best that can be
                  provided. Listening is our way to ensure that each resident
                  maintains their individuality and feels like a part of the
                  family.
                </p>
                <p>
                  Because we are a smaller home, we can provide a closer
                  relationship with each resident. We strive for a warm,
                  nurturing, intimate, and caring environment as close to your
                  own home as possible. Each resident receives one-on-one
                  personal attention that focuses on their individual needs.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/about-us"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark transition-colors"
                >
                  Learn About Us
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-primary border border-primary/20 hover:bg-primary/5 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="pb-20 sm:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary font-medium text-sm tracking-wide uppercase mb-3">
              What We Offer
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Comprehensive Senior Care
            </h2>
            <p className="mx-auto max-w-2xl text-text-secondary leading-relaxed">
              From daily health management to enriching activities, we provide
              everything your loved one needs to thrive.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceCards.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <h3 className="absolute bottom-4 left-5 text-xl font-bold text-white">
                    {card.title}
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">
                    {card.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {card.items.map((item) => (
                      <span
                        key={item}
                        className="inline-block rounded-full bg-muted px-3 py-1 text-xs font-medium text-foreground/70"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all">
                    Learn More
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us / Property Highlights */}
      <section className="bg-primary-dark py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-accent font-medium text-sm tracking-wide uppercase mb-3">
              Why Choose Us
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              A Beautiful Place to Call Home
            </h2>
            <p className="mx-auto max-w-2xl text-white/70 leading-relaxed">
              Our home is nestled on a beautiful two-acre gated property in
              Bothell — peaceful, secure, and fully accessible.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
                ),
                title: "Luxurious Rooms",
                description: "Spacious rooms with private bathrooms, walk-in closets, and beautiful hardwood floors.",
              },
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 0 1 6.69 14.036m0 0-.177-.529A2.25 2.25 0 0 0 17.128 15H16.5l-.324-.324a1.453 1.453 0 0 0-2.328.377l-.036.073a1.586 1.586 0 0 1-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.081.49-.032.992-.35 1.39A8.963 8.963 0 0 1 3.75 12a9 9 0 0 1 9-8.97Z" />
                  </svg>
                ),
                title: "Two-Acre Gardens",
                description: "Gated grounds with vegetable gardens, walking paths, and wheelchair-accessible outdoor spaces.",
              },
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
                  </svg>
                ),
                title: "Personal Attention",
                description: "Small home setting means one-on-one care and genuine relationships with every resident.",
              },
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                  </svg>
                ),
                title: "Over a Decade of Care",
                description: "A trusted name in Bothell with years of experience and countless families served.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-white/10 backdrop-blur-sm p-6 border border-white/10"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/20 text-accent mb-4">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-white text-sm mb-2">
                  {item.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <p className="text-primary font-medium text-sm tracking-wide uppercase mb-3">
                Take a Tour
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Our Home in Photos
              </h2>
            </div>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
            >
              View Full Gallery
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryPreview.map((img, idx) => (
              <Link
                key={img.src}
                href="/gallery"
                className="group relative aspect-[3/2] overflow-hidden rounded-2xl"
              >
                <Image
                  src={img.src}
                  alt={`Gallery photo ${idx + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Preview */}
      <section className="bg-muted py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary font-medium text-sm tracking-wide uppercase mb-3">
              Stay Active &amp; Engaged
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Daily Activities
            </h2>
            <p className="mx-auto max-w-2xl text-text-secondary leading-relaxed">
              Develop your mind, body and soul. Our residents enjoy a wide range
              of activities designed to keep them happy, healthy, and connected.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {activityHighlights.map((a) => (
              <div
                key={a.title}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={a.image}
                    alt={a.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-foreground mb-2">
                    {a.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {a.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/activities"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark transition-colors"
            >
              View All Activities
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Levels of Care Overview */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            {/* Text */}
            <div className="w-full lg:w-1/2">
              <p className="text-primary font-medium text-sm tracking-wide uppercase mb-3">
                Personalized Care
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Five Levels of Care
              </h2>
              <p className="text-text-secondary leading-relaxed mb-6">
                From independent living to hospice care, we provide the right
                level of support at every stage. Our experienced RN oversees all
                medical care to ensure the highest standards.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { level: "Level 1", label: "Independent Living", desc: "Freedom with peace of mind — we handle the chores so you can focus on what you love." },
                  { level: "Level 2", label: "Assisted Living", desc: "Personalized assistance with daily activities while maintaining maximum independence." },
                  { level: "Level 3", label: "Extensive Assistance", desc: "Comprehensive support for chronic health conditions and recovery from illness or injury." },
                  { level: "Level 4", label: "Extended & Intensive Care", desc: "Advanced care for complex medical needs including Alzheimer's and dementia." },
                  { level: "Level 5", label: "Hospice Care", desc: "Comfort and dignity for end-of-life care, coordinated with your chosen hospice provider." },
                ].map((l) => (
                  <div key={l.level} className="flex items-start gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-white text-sm font-bold">
                      {l.level.split(" ")[1]}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-sm">
                        {l.label}
                      </h3>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        {l.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                href="/levels-of-care"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark transition-colors"
              >
                Explore Levels of Care
              </Link>
            </div>
            {/* Image */}
            <div className="w-full lg:w-1/2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="https://lovingafh.com/wp-content/uploads/2016/02/rnonstaff.jpg"
                  alt="RN on staff at Loving Adult Family Home"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="mt-4 bg-muted rounded-xl p-4 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                  </svg>
                </div>
                <p className="text-sm text-text-secondary">
                  <span className="font-semibold text-foreground">Registered Nurse on Staff</span> — Cynthia L. Nelson, RN, with 20+ years of geriatric care experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-muted py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary font-medium text-sm tracking-wide uppercase mb-3">
              What Families Say
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Trusted by Families
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
              >
                <svg
                  className="h-8 w-8 text-accent/50 mb-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179Zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179Z" />
                </svg>
                <p className="text-text-secondary text-sm leading-relaxed mb-6">
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
          <div className="text-center mt-10">
            <Link
              href="/testimonials"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark transition-colors"
            >
              Read All Testimonials
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-primary-dark px-8 py-16 sm:px-16 sm:py-20 text-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(64,145,108,0.3),_transparent_60%)]" />
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Ready to Learn More?
              </h2>
              <p className="mx-auto max-w-lg text-white/70 leading-relaxed mb-8">
                We&apos;d love to show you around our home and discuss how we can
                provide the best care for your loved one. Schedule a tour today.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="tel:+12063699906"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-primary-dark shadow-lg hover:bg-gray-100 transition-colors"
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    />
                  </svg>
                  Call (206) 369-9906
                </a>
                <a
                  href="mailto:loving_afh@yahoo.com"
                  className="inline-flex items-center gap-2 rounded-full bg-white/15 px-7 py-3.5 text-sm font-semibold text-white border border-white/25 hover:bg-white/25 transition-colors"
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                  Email Us
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-white/15 px-7 py-3.5 text-sm font-semibold text-white border border-white/25 hover:bg-white/25 transition-colors"
                >
                  Contact Page
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
