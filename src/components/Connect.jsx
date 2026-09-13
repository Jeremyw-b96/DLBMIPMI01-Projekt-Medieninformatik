import MediaItem from "./MediaItem";
import { motion } from "motion/react";
import { useRef } from 'react';
import Interview from "../assets/videos/Interview_Neu.mp4";
import Podcast from "../assets/videos/Podcast_Neu.mp4";
import Messe from "../assets/images/Messe.jpg";

const mediaItems = [
  {
    type: "video",
    title: "Gründerinterview",
    subtitleShort: "Einblick in die Gründungsgeschichte von VEKTOR",
    subtitle: "Unser Gründer gibt uns Einblicke in die Gründungsgeschichte von VEKTOR.",
    src: Interview
  },
  {
    type: "image",
    title: "Digitalmesse Bayern",
    subtitleShort: "VEKTOR präsentiert live eine KI-gestützte Datenanalyse.",
    subtitle: "Bei der Digitalmesse Bayern präsentieren wir live eine KI-gestützte Datenanalyse.",
    src: Messe
  },
  {
    type: "video",
    title: "Markus Heller zu Gast im IT-Talk",
    subtitleShort: "Einblick in die Arbeit mit KI",
    subtitle: "Ein Ausschnitt aus dem IT-Talk Podcast mit unserem CTO",
    src: Podcast
  },
  {
    type: "paper",
    title: "Impact of Artificial Intelligence on Businesses",
    subtitleShort: "Einfluss von KI auf Unternehmen",
    subtitle: "PDF-Version des Papers zu Businnes Impacts of AI",
    src: "https://arxiv.org/pdf/1905.02092"
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
        <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl font-extrabold text-vektor-dark">
            Connect
          </h2>
          <p className="sm:text-xl text-vektor-navy/80">
            Entdecken Sie Interviews, Podcasts, Bilderserien und weiterführende Fachquellen rund um VEKTOR, Künstliche Intelligenz und digitale Transformation.
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
                subtitleShort={item.subtitleShort}
                subtitle={item.subtitle}
                src={item.src}/>
            </div>
          ))}
        </motion.div>
        <div className="mt-10 text-center">
          <p className="text-sm text-vektor-navy/40">Weitere Inhalte werden fortlaufend ergänzt. </p>
        </div>
      </div>
    </section>
  );
}
export default Connect