import MediaItem from "./MediaItem";
import { motion } from "motion/react";
import { useRef } from 'react';

const mediaItems = [
  {
    type: "video",
    title: "Gründerinterview",
    subtitle: "Warum VEKTOR entstanden ist",
    thumbnail: null,
    url: "https://www.youtube.com/..."
  },
  {
    type: "audio",
    title: "Podcast: KI im Mittelstand",
    subtitle: "20 Minuten Audio-Interview",
    thumbnail: null,
    url: "https://www.example.com/podcast"
  },
  {
    type: "image",
    title: "Bilderserie Digitalmesse Bayern",
    subtitle: "Einblicke in unsere Projekte",
    thumbnail: null
  },
  {
    type: "paper",
    title: "Whitepaper: Responsible AI",
    subtitle: "PDF-Download",
    thumbnail: null,
    url: "/papers/responsible-ai.pdf"
  }
];

function Connect() {
  const scrollRef = useRef(null);
  const handleWheel = (e) => {
    if (e.deltaY === 0) return;
    e.preventDefault();
    scrollRef.current.scrollLeft += e.deltaY;
  };

  return (
    <section id="connect" className="bg-white py-20">
      <div className="mx-auto max-w-screen-xl px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="mb-4 text-4xl font-extrabold text-vektor-dark">
            Connect
          </h2>
          <p className="text-lg text-vektor-navy/80">
            Entdecken Sie Interviews, Podcasts, Bilderserien und weiterführende
            Fachquellen rund um VEKTOR, Künstliche Intelligenz und digitale
            Transformation.
          </p>
        </div>
        <motion.div
            ref={scrollRef}
            onWheel={handleWheel}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex gap-6 overflow-x-auto pt-6 pb-4 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden">
          {mediaItems.map((item) => (
            <div key={item.title} className="snap-start">
              <MediaItem
                type={item.type}
                title={item.title}
                subtitle={item.subtitle}
                thumbnail={item.thumbnail}
                url={item.url}/>
            </div>
          ))}
        </motion.div>
        <div className="mt-10 text-center">
          <p className="text-sm text-vektor-navy/40">
            Weitere Inhalte werden fortlaufend ergänzt. Klicken Sie auf eine
            Kachel, um Details, Videos oder Dokumente zu öffnen.
          </p>
        </div>
      </div>
    </section>
  );
}
export default Connect