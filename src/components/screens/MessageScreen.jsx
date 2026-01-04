import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { MoveRight } from "lucide-react"

const message = `
 Today is your birthday,
but honestly… this day feels special to me for a different reason.

We’ve been friends for a long time,
laughed at stupid things,
shared silence that felt comfortable,
and somehow… you became my favorite part of everyday life.

I don’t know when friendship quietly turned into care,
or when care turned into something deeper,
but somewhere along the way,
you stopped being “just a friend” to me.

You’re the person I want to tell good news to first.
The person whose smile fixes my bad days.
The person who feels like home without trying.

So today, with all the courage I could gather,
I just want to ask you one honest thing

Will you be more than my best friend?
Will you let me hold your hand,
stand by you,
and choose you not just today,
but every day that comes next?Whatever your answer is,
I want you to know this came from a real place.
From years of friendship, trust, and care
that slowly turned into love.

Thank you for being you.
Thank you for being a part of my life.

And once again,
Happy Birthday to the person who means more to me than she knows 
`

export default function MessageScreen({ onNext }) {
  const [currentText, setCurrentText] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const scrollRef = useRef(null)

  useEffect(() => {
    let index = 0

    const timer = setInterval(() => {
      if (index < message.length) {
        setCurrentText(prev => prev + message[index])
        index++

        if (scrollRef.current) {
          scrollRef.current.scrollTop = scrollRef.current.scrollHeight
        }
      } else {
        clearInterval(timer)
        setShowCursor(false)
      }
    }, 22)

    return () => clearInterval(timer)
  }, [])

  return (
    <motion.div className="flex flex-col items-center justify-center px-4 relative">

      {/* Heading */}
      <motion.h2
        className="text-4xl md:text-5xl font-dancing-script text-pink-100 font-semibold leading-tight mb-8 text-center"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        A little note for you
      </motion.h2>

      {/* Message Box */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="
          w-full max-w-lg
          relative p-6 rounded-3xl
          bg-linear-to-br from-pink-500/15 via-rose-500/10 to-pink-400/15
          border border-pink-400/30
          shadow-[0_0_30px_rgba(236,72,153,0.15)]
          backdrop-blur-xl
          mb-8
        "
      >
        <div
          ref={scrollRef}
          className="
            max-h-64 overflow-y-auto
            whitespace-pre-line
            text-[15px] md:text-base
            leading-relaxed
            text-pink-50/90
          "
        >
          {currentText}
          {showCursor && (
            <span className="inline-block w-2 ml-1 animate-pulse text-pink-200">|</span>
          )}
        </div>
      </motion.div>

      {/* Next Button */}
      <motion.div
        className="text-center relative z-10"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <motion.button
          className="
            bg-linear-to-r from-pink-500 via-rose-500 to-pink-500
            text-white px-10 py-4 text-lg rounded-full font-medium
            shadow-2xl hover:shadow-pink-500/25
            transition-all flex items-center gap-2
          "
          onClick={onNext}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span>One more thing</span>
          <MoveRight size={18} />
        </motion.button>
      </motion.div>

    </motion.div>
  )
}
