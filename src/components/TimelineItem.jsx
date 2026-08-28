import { useState } from "react";
import { motion } from "motion/react";

function TimelineItem({ year, title, description, media, links }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        hover={{ scale: 1.05 }}
        viewport={{ once: true, amount: 0.3 }}
        className="relative flex gap-6 lg:gap-10">

        {/* Linke Seite */}
        <div className="flex flex-col items-center">
            <div className="h-4 w-4 rounded-full bg-vektor-primary" />
            <div className="mt-2 h-full w-0.5 bg-gray-300" />
        </div>

        {/* Rechte Seite */}
        <div className="pb-14 flex-1">
            <span className="text-sm font-semibold uppercase tracking-wide text-vektor-primary">
            {year}
            </span>

            <h3 className="mt-2 text-2xl font-bold text-vektor-dark">
            {title}
            </h3>

            <p className="mt-4 max-w-2xl text-vektor-navy/80 leading-7">
            {description}
            </p>

            <button onClick={() => setIsOpen(!isOpen)} className="mt-4 inline-flex items-center rounded-lg border border-vektor-primary/80 px-4 py-2 text-sm font-medium text-vektor-primary/80 transition hover:bg-vektor-primary hover:text-vektor-accent">
                {isOpen ? "Weniger anzeigen" : "Mehr anzeigen"}
            </button>
        </div>

        {isOpen && (<motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.4 }}
            className="mt-6 overflow-hidden">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {media.map((item) => (
                    <div key={item.title} className="rounded-2xl border border-gray-200 bg-gray-50 p-4 shadow-sm transition hover:shadow-md">
                        <div className="mb-3 flex h-32 items-center justify-center rounded-xl bg-gray-200">
                            {item.type === "image" && "🖼️"}
                            {item.type === "video" && "▶️"}
                            {item.type === "image" && "🖼️"}
                        </div>

                        <h4 className="font-semibold text-gray-900">
                            {item.title}
                        </h4>
                    </div>
                ))}
            </div>
        </motion.div>)}
        {links.length > 0 && (
            <div className="mt-8 border-t border-gray-200 pt-6">
                <h4 className="mb-3 font-semibold text-gray-900">Weiterführende Quellen</h4>
            <div className="space-y-2">
                {links.map((link) => (
                    <a key={link.url} href={link.url} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-vektor-primary/80 transition hover:text-blue-800 hover:underline">
                    <span>🔗</span>
                    {link.label}
                    </a>
                ))}
            </div>
        </div>)}
    </motion.div>
  );
}

export default TimelineItem;