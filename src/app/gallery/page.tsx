import type { Metadata } from "next";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Photo Gallery - Loving Adult Family Home",
  description:
    "Tour our beautiful two-acre property, spacious rooms, and engaging activities at Loving Adult Family Home in Bothell, WA.",
};

const homeImages = [
  { src: "https://lovingafh.com/wp-content/uploads/2024/12/1-1024x684.jpg", width: 1024, height: 684 },
  { src: "https://lovingafh.com/wp-content/uploads/2024/12/2-1024x684.jpg", width: 1024, height: 684 },
  { src: "https://lovingafh.com/wp-content/uploads/2024/12/3-1024x684.jpg", width: 1024, height: 684 },
  { src: "https://lovingafh.com/wp-content/uploads/2024/12/4-1024x684.jpg", width: 1024, height: 684 },
  { src: "https://lovingafh.com/wp-content/uploads/2024/12/5-684x1024.jpg", width: 684, height: 1024 },
  { src: "https://lovingafh.com/wp-content/uploads/2024/12/6-1024x684.jpg", width: 1024, height: 684 },
  { src: "https://lovingafh.com/wp-content/uploads/2024/12/7-1024x684.jpg", width: 1024, height: 684 },
  { src: "https://lovingafh.com/wp-content/uploads/2024/12/8-1024x684.jpg", width: 1024, height: 684 },
  { src: "https://lovingafh.com/wp-content/uploads/2024/12/9-1024x768.jpg", width: 1024, height: 768 },
  { src: "https://lovingafh.com/wp-content/uploads/2024/12/10-1024x768.jpg", width: 1024, height: 768 },
  { src: "https://lovingafh.com/wp-content/uploads/2024/12/11-1024x576.jpg", width: 1024, height: 576 },
  { src: "https://lovingafh.com/wp-content/uploads/2024/12/12-576x1024.jpg", width: 576, height: 1024 },
  { src: "https://lovingafh.com/wp-content/uploads/2024/12/13-576x1024.jpg", width: 576, height: 1024 },
  { src: "https://lovingafh.com/wp-content/uploads/2024/12/14-576x1024.jpg", width: 576, height: 1024 },
  { src: "https://lovingafh.com/wp-content/uploads/2024/12/15-576x1024.jpg", width: 576, height: 1024 },
  { src: "https://lovingafh.com/wp-content/uploads/2024/12/16-1024x576.jpg", width: 1024, height: 576 },
  { src: "https://lovingafh.com/wp-content/uploads/2024/12/17-1024x576.jpg", width: 1024, height: 576 },
  { src: "https://lovingafh.com/wp-content/uploads/2024/12/18-1024x576.jpg", width: 1024, height: 576 },
  { src: "https://lovingafh.com/wp-content/uploads/2024/12/19-1024x576.jpg", width: 1024, height: 576 },
  { src: "https://lovingafh.com/wp-content/uploads/2024/12/20-1024x576.jpg", width: 1024, height: 576 },
  { src: "https://lovingafh.com/wp-content/uploads/2024/12/21-1024x681.jpg", width: 1024, height: 681 },
  { src: "https://lovingafh.com/wp-content/uploads/2024/12/22-576x1024.jpg", width: 576, height: 1024 },
  { src: "https://lovingafh.com/wp-content/uploads/2024/12/23-1024x681.jpg", width: 1024, height: 681 },
  { src: "https://lovingafh.com/wp-content/uploads/2024/12/24-1024x681.jpg", width: 1024, height: 681 },
  { src: "https://lovingafh.com/wp-content/uploads/2024/12/25-1024x681.jpg", width: 1024, height: 681 },
  { src: "https://lovingafh.com/wp-content/uploads/2024/12/26-1024x681.jpg", width: 1024, height: 681 },
  { src: "https://lovingafh.com/wp-content/uploads/2024/12/27-681x1024.jpg", width: 681, height: 1024 },
  { src: "https://lovingafh.com/wp-content/uploads/2024/12/28-1024x684.jpg", width: 1024, height: 684 },
  { src: "https://lovingafh.com/wp-content/uploads/2024/12/29-1024x684.jpg", width: 1024, height: 684 },
  { src: "https://lovingafh.com/wp-content/uploads/2024/12/30-1024x684.jpg", width: 1024, height: 684 },
  { src: "https://lovingafh.com/wp-content/uploads/2024/12/31-1024x684.jpg", width: 1024, height: 684 },
  { src: "https://lovingafh.com/wp-content/uploads/2024/12/32-1024x684.jpg", width: 1024, height: 684 },
  { src: "https://lovingafh.com/wp-content/uploads/2024/12/33-1024x684.jpg", width: 1024, height: 684 },
  { src: "https://lovingafh.com/wp-content/uploads/2024/12/34-1024x684.jpg", width: 1024, height: 684 },
  { src: "https://lovingafh.com/wp-content/uploads/2024/12/35-1024x684.jpg", width: 1024, height: 684 },
  { src: "https://lovingafh.com/wp-content/uploads/2024/12/36-1024x684.jpg", width: 1024, height: 684 },
  { src: "https://lovingafh.com/wp-content/uploads/2024/12/37-684x1024.jpg", width: 684, height: 1024 },
  { src: "https://lovingafh.com/wp-content/uploads/2024/12/38-1024x684.jpg", width: 1024, height: 684 },
  { src: "https://lovingafh.com/wp-content/uploads/2024/12/39-1024x684.jpg", width: 1024, height: 684 },
  { src: "https://lovingafh.com/wp-content/uploads/2024/12/40-1024x684.jpg", width: 1024, height: 684 },
  { src: "https://lovingafh.com/wp-content/uploads/2024/12/41-684x1024.jpg", width: 684, height: 1024 },
  { src: "https://lovingafh.com/wp-content/uploads/2024/12/42-1024x684.jpg", width: 1024, height: 684 },
  { src: "https://lovingafh.com/wp-content/uploads/2024/12/43-684x1024.jpg", width: 684, height: 1024 },
  { src: "https://lovingafh.com/wp-content/uploads/2024/12/44-1024x684.jpg", width: 1024, height: 684 },
];

const activityImages = [
  { src: "https://lovingafh.com/wp-content/uploads/2024/12/45-765x1024.jpg", width: 765, height: 1024 },
  { src: "https://lovingafh.com/wp-content/uploads/2024/12/46-765x1024.jpg", width: 765, height: 1024 },
  { src: "https://lovingafh.com/wp-content/uploads/2024/12/47-765x1024.jpg", width: 765, height: 1024 },
  { src: "https://lovingafh.com/wp-content/uploads/2024/12/48-1024x678.jpg", width: 1024, height: 678 },
  { src: "https://lovingafh.com/wp-content/uploads/2024/12/49-1024x678.jpg", width: 1024, height: 678 },
  { src: "https://lovingafh.com/wp-content/uploads/2024/12/50-1024x847.jpg", width: 1024, height: 847 },
  { src: "https://lovingafh.com/wp-content/uploads/2024/12/51-1024x678.jpg", width: 1024, height: 678 },
  { src: "https://lovingafh.com/wp-content/uploads/2024/12/52-1024x613.jpg", width: 1024, height: 613 },
  { src: "https://lovingafh.com/wp-content/uploads/2024/12/53-1024x613.jpg", width: 1024, height: 613 },
  { src: "https://lovingafh.com/wp-content/uploads/2024/12/54-1024x678.jpg", width: 1024, height: 678 },
  { src: "https://lovingafh.com/wp-content/uploads/2024/12/55-1024x678.jpg", width: 1024, height: 678 },
  { src: "https://lovingafh.com/wp-content/uploads/2024/12/56-1024x613.jpg", width: 1024, height: 613 },
  { src: "https://lovingafh.com/wp-content/uploads/2024/12/57-1024x686.jpg", width: 1024, height: 686 },
  { src: "https://lovingafh.com/wp-content/uploads/2024/12/58-1024x686.jpg", width: 1024, height: 686 },
  { src: "https://lovingafh.com/wp-content/uploads/2024/12/59-1024x686.jpg", width: 1024, height: 686 },
  { src: "https://lovingafh.com/wp-content/uploads/2024/12/60-1024x683.jpg", width: 1024, height: 683 },
];

export default function GalleryPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-primary-dark py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent font-medium text-sm tracking-wide uppercase mb-3">
            Take a Tour
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Photo Gallery
          </h1>
          <p className="mx-auto max-w-2xl text-white/70 text-lg leading-relaxed">
            Our home is nestled on a beautiful two-acre gated land. The entire
            property is easily accessed, even by wheelchair, so that all
            residents may enjoy full use of the gardens.
          </p>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 sm:py-20 bg-muted">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 0 1 6.69 14.036m0 0-.177-.529A2.25 2.25 0 0 0 17.128 15H16.5l-.324-.324a1.453 1.453 0 0 0-2.328.377l-.036.073a1.586 1.586 0 0 1-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.081.49-.032.992-.35 1.39A8.963 8.963 0 0 1 3.75 12a9 9 0 0 1 9-8.97Z" />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Two-Acre Property</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Vegetable gardens are available for the resident&apos;s use. The
                environment is very quiet, peaceful and enriching.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Luxurious Rooms</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Beautiful hardwoods, private bathrooms, walk-in closets, central
                air-conditioning & air filtration system.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Large Picture Windows</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Enjoy natural light and scenic views through large picture
                windows throughout the home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Home Gallery */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <GalleryGrid images={homeImages} title="The Home" />
        </div>
      </section>

      {/* Activities Gallery */}
      <section className="pb-16 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <GalleryGrid images={activityImages} title="Activities" />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-dark py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            See It for Yourself
          </h2>
          <p className="text-white/70 leading-relaxed mb-8">
            Photos can only show so much. Schedule an in-person tour to
            experience the warmth and beauty of our home firsthand.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+12063699906"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-primary-dark shadow-lg hover:bg-gray-100 transition-colors"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
              (206) 369-9906
            </a>
            <a
              href="mailto:loving_afh@yahoo.com"
              className="inline-flex items-center gap-2 rounded-full bg-white/15 px-7 py-3.5 text-sm font-semibold text-white border border-white/25 hover:bg-white/25 transition-colors"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
              Email Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
