import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { container, item as itemVar } from '../animations/scroll'

interface QA { q: string; a: string }

const FAQ_LIST: QA[] = [
  {
    q: 'FAQ Title 1?',
    a: 'FAQ Description 1. This is a sample answer to the first FAQ question. It can be as long as needed to provide detailed information.',
  },
  {
    q: 'FAQ Title 2?',
    a: 'FAQ Description 2. This is a sample answer to the second FAQ question. It can be as long as needed to provide detailed information.',
  },
  {
    q: 'FAQ Title 3?',
    a: 'FAQ Description 3. This is a sample answer to the third FAQ question. It can be as long as needed to provide detailed information.',
  },
]

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  return (
    <motion.section
      id="faq"
      className="py-16 bg-gray-800 text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={container}
    >
      <h2 className="text-4xl font-bold text-center mb-12">FAQ</h2>
      <motion.div className="max-w-3xl mx-auto space-y-4">
        {FAQ_LIST.map((itemData, i) => (
          <motion.div
            key={i}
            className="bg-gray-700 rounded-lg overflow-hidden"
            variants={itemVar}
          >
            <button
              className="w-full text-left p-4 flex justify-between items-center focus:outline-none"
              onClick={() => setOpenIdx(openIdx === i ? null : i)}
            >
              <span className="font-medium">{itemData.q}</span>
              <motion.svg
                className="w-6 h-6 text-indigo-400"
                initial={{ rotate: 0 }}
                animate={{ rotate: openIdx === i ? 45 : 0 }}
                transition={{ duration: 0.2 }}
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="10" y1="4" x2="10" y2="16" />
                <line x1="4" y1="10" x2="16" y2="10" />
              </motion.svg>
            </button>

            <AnimatePresence initial={false}>
              {openIdx === i && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="px-4 overflow-hidden"
                >
                  <div className="pb-4 text-gray-300">
                    {itemData.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}
