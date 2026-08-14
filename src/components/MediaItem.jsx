import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

function MediaItem({ type, title, subtitle, thumbnail, url }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Kachel */}
      <motion.div
        whileHover={{ scale: 1.04, y: -6 }}
        transition={{ duration: 0.2 }}
        onClick={() => setIsOpen(true)}
        className="min-w-[300px] cursor-pointer overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg"
      >
        <div className="flex h-40 items-center justify-center bg-gray-200">
          {thumbnail ? (
            <img
              src={thumbnail}
              alt={title}
              className="h-full w-full object-cover"
            />
          ) : (
            <span className="text-4xl">
              {type === "video" && "▶️"}
              {type === "audio" && "🎧"}
              {type === "image" && "🖼️"}
              {type === "paper" && "📄"}
            </span>
          )}
        </div>

        <div className="p-5">
          <h3 className="text-lg font-semibold text-gray-900">
            {title}
          </h3>
          {subtitle && (
            <p className="mt-2 text-sm text-gray-600">
              {subtitle}
            </p>
          )}
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
            <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6"
                    onClick={() => setIsOpen(false)}
                >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-full max-w-3xl rounded-2xl bg-white p-8 shadow-2xl"
                    onClick={(e) => e.stopPropagation()}
                    >
                    <h2 className="text-2xl font-bold text-gray-900">
                        {title}
                    </h2>
                    {subtitle && (
                        <p className="mt-2 text-gray-600">
                        {subtitle}
                        </p>
                    )}
                    <div className="mt-6 rounded-xl bg-gray-100 p-8 text-center">
                        {type === "video" && <p>Hier wird später ein Video eingebettet.</p>}
                        {type === "audio" && <p>Hier wird später ein Podcast eingebunden.</p>}
                        {type === "image" && <p>Hier erscheint später eine Bilderserie.</p>}
                        {type === "paper" && <p>Hier wird später ein PDF oder Paper angezeigt.</p>}
                    </div>

                    {url && (
                        <a href={url} target="_blank" rel="noreferrer" className="mt-6 inline-flex rounded-lg bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700">
                            Zum Inhalt
                        </a>
                    )}
                </motion.div>
            </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default MediaItem;