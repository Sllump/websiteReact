import React from 'react'
import { motion } from 'framer-motion'
import { container, item } from '../animations/scroll'

interface Feature { title: string; desc: string }

const FEATURES: Feature[] = [
  { title: 'Feature 1', desc: 'This is a sample description for feature 1. It can be as long as needed to provide detailed information.' },
  { title: 'Feature 2', desc: 'This is a sample description for feature 2. It can be as long as needed to provide detailed information.' },
  { title: 'Feature 3', desc: 'This is a sample description for feature 3. It can be as long as needed to provide detailed information.' },
  { title: 'Feature 4', desc: 'This is a sample description for feature 4. It can be as long as needed to provide detailed information.' },
  { title: 'Feature 5', desc: 'This is a sample description for feature 5. It can be as long as needed to provide detailed information.' },
  { title: 'Feature 6', desc: 'This is a sample description for feature 6. It can be as long as needed to provide detailed information.' },
]

export default function Features() {
  return (
    <motion.section
      id="features"
      className="py-16 bg-gray-800 text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={container}
    >
      <h2 className="text-4xl font-bold text-center mb-12">Features</h2>
      <motion.div className="max-w-4xl mx-auto grid gap-8 sm:grid-cols-2">
        {FEATURES.map((f) => (
          <motion.div
            key={f.title}
            className="p-6 bg-gray-700 rounded-xl shadow-lg"
            variants={item}
            whileHover={{ scale: 1.03 }}
          >
            <h3 className="text-2xl font-semibold mb-2">{f.title}</h3>
            <p className="text-gray-300">{f.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}
