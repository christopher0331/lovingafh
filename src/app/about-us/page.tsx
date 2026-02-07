import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Loving Adult Family Home",
  description:
    "Learn about Loving Adult Family Home in Bothell, WA — our mission, our experienced RN, and the management team dedicated to compassionate senior care.",
};

export default function AboutUsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-primary-dark py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent font-medium text-sm tracking-wide uppercase mb-3">
            Who We Are
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            About Us
          </h1>
          <p className="mx-auto max-w-2xl text-white/70 text-lg leading-relaxed">
            A family-first approach to senior care in Bothell, Washington.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-1 w-12 rounded-full bg-accent" />
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              The Loving Difference
            </h2>
          </div>

          <div className="space-y-6 text-text-secondary leading-relaxed text-[17px]">
            <p>
              At Loving Adult Family Home, the Loving difference for our adult
              years is that we feel that each person should be treated as a
              member of a family. We also believe that our residents who need
              additional health care deserve the very best health care that can
              be provided. We feel that listening is a way to ensure that each
              resident maintains their individuality and feels like a part of
              the family.
            </p>
            <p>
              We understand that finding the perfect adult family home for your
              loved one can be a very difficult and challenging task; a task that
              we hope to make a little easier for you by providing Loving Care,
              and Stability.
            </p>
            <p>
              Because we are a smaller home, we can provide a closer
              relationship with each resident so that they can feel more at home
              with the others. We strive for a warm, nurturing, intimate, and
              caring environment as close to your own home as possible. Each
              resident receives one-on-one personal and special attention that
              focuses on their individual needs. Our residents enjoy our
              luxurious, spacious rooms, which can accommodate two beds if
              companionship is desired.
            </p>
            <p>
              Our residents feel right at home in the smaller, more personal
              setting that our adult family home provides.
            </p>
          </div>
        </div>
      </section>

      {/* Community & Surroundings */}
      <section className="bg-muted py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-1 w-12 rounded-full bg-accent" />
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Our Community
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-5">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 0 1 6.69 14.036m0 0-.177-.529A2.25 2.25 0 0 0 17.128 15H16.5l-.324-.324a1.453 1.453 0 0 0-2.328.377l-.036.073a1.586 1.586 0 0 1-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.081.49-.032.992-.35 1.39A8.963 8.963 0 0 1 3.75 12a9 9 0 0 1 9-8.97Z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground text-lg mb-3">
                Local Attractions
              </h3>
              <p className="text-text-secondary leading-relaxed text-sm">
                Blyth Park is Bothell&apos;s largest park, conveniently located
                along the river with many walking trails. Country Village is
                only a few miles away, filled with boutiques, antiques, a
                bakery, a tea room, a seasonal farmers market, a glass blowing
                studio, and various events throughout the year.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-5">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground text-lg mb-3">
                Seattle &amp; Beyond
              </h3>
              <p className="text-text-secondary leading-relaxed text-sm">
                Seattle is 30 minutes away and includes wonderful places to
                visit such as Pike Place Market, Seattle Art Museum, the Seattle
                Aquarium, Woodland Park Zoo, and the Seattle Center.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 md:col-span-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-5">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground text-lg mb-3">
                Northshore Senior Center
              </h3>
              <p className="text-text-secondary leading-relaxed text-sm mb-3">
                The Northshore Senior Center is nationally recognized for its
                services and activities that enhance the well-being and
                independence and encourage the involvement in the community of
                its 7,000 members. Their 700 volunteers form the heart of the
                Center.
              </p>
              <p className="text-text-secondary leading-relaxed text-sm mb-3">
                They offer health clinics, classes, clubs, a computer lab,
                special events, Wellness Project, Adult Day Centers, social
                services, and trips galore. Their coffee bar and lounges offer
                great opportunities for meeting old friends and making new ones.
              </p>
              <p className="text-sm text-foreground/70 font-medium">
                The facility is completely handicapped accessible and is only 8
                miles from Loving Adult Family Home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Our RN */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-1 w-12 rounded-full bg-accent" />
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              About Our RN
            </h2>
          </div>

          <div className="bg-muted rounded-2xl p-8 sm:p-10 border border-gray-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white font-bold text-xl">
                CN
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">
                  Cynthia L. Nelson, RN
                </h3>
                <p className="text-sm text-text-secondary">
                  Registered Nurse &bull; Geriatrics Specialist
                </p>
              </div>
            </div>

            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                Geriatrics, that is, the care and support of the elderly, has
                always been the focus of my nursing career.
              </p>
              <p>
                I have over 20 years of experience working in acute care,
                long-term care, and home settings. In high school, I worked as a
                nursing assistant in long-term care and also while studying for
                my LPN licensure. I was able to continue practicing nursing in
                oncology and orthopedics as an LPN while completing my RN
                degree, graduating from UW Nursing School in 2001.
              </p>
              <p>
                In the academic year 2004-2005, I was an instructor for the
                nursing assistant program at Seattle Vocational Institute as well
                as a clinical instructor for LPNs at South Seattle Community
                College.
              </p>
              <p>
                Since 2008, I have worked as a case manager in the home health
                setting. I studied foot care in 2010 with Dr. Overstreet at UW
                and began my own foot care business in 2011.
              </p>
              <p className="italic text-foreground/70 font-medium">
                &ldquo;It is always my pleasure and delight to work with the
                elderly and provide the best care possible while supporting our
                wonderful caregivers.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Management */}
      <section className="bg-muted py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-1 w-12 rounded-full bg-accent" />
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Management
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-gray-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white font-bold text-xl">
                OG
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">
                  Otilia M. Girjoaba
                </h3>
                <p className="text-sm text-text-secondary">
                  Home Manager
                </p>
              </div>
            </div>

            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                Loving Adult Family Home of Bothell has been part of our family
                for over a decade.
              </p>
              <p>
                Our commitment is to maintain an enhanced quality and enjoyment
                of life. Respecting that each resident is unique, we tailor our
                services to each individual according to his/her needs, all in a
                warm, loving environment.
              </p>
              <p>
                Our home care and nursing services are built around your specific
                needs. We offer solutions for today and the security of knowing
                that there are options for tomorrow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-primary-dark px-8 py-16 sm:px-16 sm:py-20 text-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(64,145,108,0.3),_transparent_60%)]" />
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                We&apos;d Love to Meet You
              </h2>
              <p className="mx-auto max-w-lg text-white/70 leading-relaxed mb-8">
                Let us show you why so many families have chosen Loving Adult
                Family Home. Schedule a visit or reach out with any questions.
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
                  (206) 369-9906
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
                  loving_afh@yahoo.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
