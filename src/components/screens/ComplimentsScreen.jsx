import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Heart, MoveRight } from "lucide-react"

const compliments = [
  "You look adorable",
  "You have the sweetest vibe",
  "You make things feel lighter",
  "You are naturally charming",
  "You make everything feel more special",
]

/* SINGLE ROW */
function ComplimentRow({ text }) {
  const [revealed, setRevealed] = React.useState(false)

  return (
    <div className="w-full">
      <AnimatePresence mode="wait">
        {!revealed ? (
          /* HEART BAR */
          <motion.button
            key="heart"
            onClick={() => setRevealed(true)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            whileTap={{ scale: 0.96 }}
            className="
              w-full h-14
              rounded-2xl
              bg-linear-to-r from-pink-500/20 to-rose-500/20
              border border-pink-400/30
              flex items-center justify-center
              backdrop-blur-md
            "
          >
            <Heart className="w-5 h-5 text-pink-300 fill-pink-300" />
          </motion.button>
        ) : (
          /* TEXT BAR */
          <motion.div
            key="text"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="
              w-full h-14
              rounded-2xl
              bg-black/40
              border border-pink-400/20
              flex items-center justify-center
              px-4
              text-center
              text-zinc-100 text-sm md:text-base
              backdrop-blur-md
            "
          >
            <span className="block w-full truncate">
              {text}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}


/* MAIN SCREEN */
export default function ComplimentsScreen({ onNext }) {
  return (
    <motion.div className="flex flex-col items-center justify-center h-full w-full text-center">
      <div className="w-full max-w-xl mx-auto flex flex-col items-center gap-8">

        {/* CENTER HEART */}
        <motion.div
          className="w-28 h-28 rounded-full bg-linear-to-br from-pink-500/15 to-rose-500/15 border border-pink-400/30 flex items-center justify-center backdrop-blur-md"
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Heart className="w-14 h-14 text-pink-400 fill-pink-400" />
        </motion.div>

        {/* HEADING */}
        <motion.h2
          className="text-4xl md:text-5xl font-dancing-script text-zinc-50 font-semibold"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          Just for you
        </motion.h2>

        {/* HEART ROWS */}
        <motion.div
          className="grid grid-cols-1 gap-4 w-full px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {compliments.map((line, index) => (
            <ComplimentRow key={index} text={line} />
          ))}
        </motion.div>

        {/* NEXT BUTTON */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          <motion.button
            onClick={onNext}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-linear-to-r from-pink-500 via-rose-500 to-pink-500 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-2xl hover:shadow-pink-500/25 transition-all flex items-center gap-2"
          >
            <span>See more</span>
            <MoveRight size={20} />
          </motion.button>
        </motion.div>

      </div>
    </motion.div>
  )
}
