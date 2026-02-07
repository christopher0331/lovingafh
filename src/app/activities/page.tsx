import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Activities - Loving Adult Family Home",
  description:
    "Engaging activities to develop mind, body and soul. Art & crafts, games, recreation, movies, massage, and more at Loving Adult Family Home.",
};

const activities = [
  {
    id: "art-crafts",
    title: "Art & Crafts",
    image:
      "https://lovingafh.com/wp-content/uploads/2015/12/activity_art.jpg",
    paragraphs: [
      "Art and crafts are the most common activities elders can indulge in. Elders can utilize their creative potential to their maximum ability and make a variety of items. Even low functioning seniors can do it — crafts do not need to be difficult or elaborate.",
      "Most seniors would be able to handle many of the supplies required to make most projects, and there are even some good craft ideas for dementia patients, and those with arthritis and even some visual impairment.",
    ],
    items: [],
  },
  {
    id: "games",
    title: "Games",
    image:
      "https://lovingafh.com/wp-content/uploads/2015/12/activity_games.jpg",
    paragraphs: [
      "Games and activities can bring people together in groups and enhance a sense of belonging and participation. Laughter has its own benefit but games can also help improve memory, dexterity, reduce stress and remove a sense of isolation.",
      "Winning prizes is exciting and can quickly become the highlight of the day.",
    ],
    items: [],
  },
  {
    id: "religious",
    title: "Religious",
    image:
      "https://lovingafh.com/wp-content/uploads/2015/12/activity_religious.jpg",
    paragraphs: [
      "Loving Adult Family Home will help residents attend religious services if they wish. Ministers, priests, and rabbis often visit the home if asked, while for others we can arrange transportation to and from local churches and synagogues.",
    ],
    items: [],
  },
  {
    id: "movies",
    title: "Movies",
    image:
      "https://lovingafh.com/wp-content/uploads/2015/12/activity_movie.jpg",
    paragraphs: [
      "Movie time is a time to relax with other residents and enjoy favorite movies. We provide a big range of movie selections that will leave everyone smiling.",
    ],
    items: [],
  },
  {
    id: "recreation",
    title: "Recreation",
    image:
      "https://lovingafh.com/wp-content/uploads/2015/12/activity_relax.jpg",
    paragraphs: [
      "The secret to feeling better and living longer is staying active. Loving Adult Family Home will help you find a program that works best for you. Regular exercise can prevent or delay diabetes and heart trouble, reduce arthritis pain, anxiety and depression, and help older people stay independent.",
      "Patients who have difficulty moving around because of illness or injury may benefit from physical therapy. An occupational therapist helps people with illness or injury become as independent as possible in their everyday activities.",
    ],
    items: [
      "Endurance activities — like walking — which build \"staying power\" and improve cardiovascular health",
      "Strengthening exercises which build muscle tissue and reduce age-related muscle loss",
      "Stretching exercises to keep the body limber and flexible",
      "Balance exercises to reduce the chances of a fall",
    ],
  },
  {
    id: "massage",
    title: "Relaxing Massage",
    image:
      "https://lovingafh.com/wp-content/uploads/2016/02/relaxingmassagemain.jpg",
    paragraphs: [
      "Massage for our residents has various physical and mental benefits, which results in the improvement of health and general well-being. The techniques used for senior citizens differ greatly from those used with younger individuals so our massage therapists strive to understand those differences in order to better treat our residents.",
    ],
    items: [],
  },
  {
    id: "other",
    title: "Other Activities",
    image:
      "https://lovingafh.com/wp-content/uploads/2015/12/activity_health.jpg",
    paragraphs: [],
    items: [
      "Exercise Programs",
      "Daily one-on-one activities",
      "Trips and Outings",
      "Live Entertainment",
      "Discussion Groups",
      "Planned Leisure & Social Events",
      "Hobby and Game Groups",
      "Traveling Library",
      "Outdoor games",
      "Cultural Enrichment Programs",
      "Christmas Carolers",
      "Off-Site Excursions",
      "Birthday Celebrations",
      "Holiday Celebrations",
    ],
  },
];

export default function ActivitiesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-primary-dark py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent font-medium text-sm tracking-wide uppercase mb-3">
            Stay Engaged
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Activities
          </h1>
          <p className="mx-auto max-w-2xl text-white/70 text-lg leading-relaxed">
            Develop your mind, body and soul with our wide range of activities —
            from art & crafts and games to exercise programs and more.
          </p>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 sm:space-y-24">
            {activities.map((activity, idx) => (
              <div
                key={activity.id}
                id={activity.id}
                className={`flex flex-col gap-8 lg:gap-14 ${
                  idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-start`}
              >
                {/* Image */}
                <div className="w-full lg:w-5/12 shrink-0">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
                    <Image
                      src={activity.image}
                      alt={activity.title}
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
                      Activity
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-5">
                    {activity.title}
                  </h2>

                  {activity.paragraphs.length > 0 && (
                    <div className="space-y-4 mb-6">
                      {activity.paragraphs.map((p, i) => (
                        <p
                          key={i}
                          className="text-text-secondary leading-relaxed"
                        >
                          {p}
                        </p>
                      ))}
                    </div>
                  )}

                  {activity.items.length > 0 && (
                    <ul
                      className={`grid gap-x-6 gap-y-2.5 ${
                        activity.items.length > 6
                          ? "grid-cols-1 sm:grid-cols-2"
                          : "grid-cols-1"
                      }`}
                    >
                      {activity.items.map((item) => (
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
            Keeping Your Loved Ones Engaged
          </h2>
          <p className="text-text-secondary leading-relaxed mb-8">
            An active life is a happy life. Contact us to learn more about our
            daily activity programs and how they benefit our residents.
          </p>
          <a
            href="tel:+12063699906"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark transition-colors"
          >
            Schedule a Visit
          </a>
        </div>
      </section>
    </>
  );
}
