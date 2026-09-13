import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play, Image, FileText } from "lucide-react";

function MediaItem({ type, title, subtitle, subtitleShort, src }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Kachel: motion.div übernimmt NUR die Bewegung (scale/translate) */}
      <motion.div
        whileHover={{ scale: 1.04, y: -6 }}
        transition={{ duration: 0.2 }}
        onClick={() => setIsOpen(true)}
        className="min-w-[300px] cursor-pointer"
      >
        {/* Inneres Element trägt Rundung + overflow-hidden, bleibt selbst untransformiert */}
        <div className="overflow-hidden rounded-2xl border border-vektor-muted/30 bg-white shadow-lg">
          <div className="flex h-40 items-center justify-center bg-vektor-muted/20">
              <span className="text-4xl">
                {type === "video" && <Play size={48} strokeWidth={1.5} />}
                {type === "image" && <Image size={48} strokeWidth={1.5} />}
                {type === "paper" && <FileText size={48} strokeWidth={1.5} />}
              </span>
          </div>
          <div className="p-5">
            <h3 className="text-lg font-semibold text-vektor-dark">
              {title}
            </h3>
            {subtitle && (
              <p className="mt-2 text-sm text-vektor-navy/80">
                {subtitleShort}
              </p>
            )}
          </div>
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
              <p className="mt-2 text-gray-600">{subtitle}</p>
              )}
                <div className="mt-6 rounded-xl bg-gray-100 p-8 text-center">
                  {type === "video" && (<video src={src} className="h-full w-full object-cover rounded-xl" controls />)}
                  {type === "image" && (<img src={src} alt={title} className="h-full w-full object-cover rounded-xl" />)}
                  {type === "paper" && (<a href={src} target="_blank" rel="noopener noreferrer" className="h-full w-full text-blue-600 underline"><img src="https://images.unsplash.com/photo-1706778573673-b976715fbba9?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt={title} className="w-full rounded-xl object-cover transition-transform duration-300 hover:scale-105"/></a>)}
                </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default MediaItem;