import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { container, item } from '../animations/scroll'
import Modal from './Modal'

interface Tier {
  name: string
  price: string
  benefits: string[]
}

const TIERS: Tier[] = [
  {
    name: 'Basic',
    price: 'Free',
    benefits: ['Access to basic features', 'Community support', 'Manual updates'],
  },
  {
    name: 'Pro',
    price: '$9.99/mo',
    benefits: ['All Basic features', 'Auto-update', 'Priority support', 'Early access to beta'],
  },
  {
    name: 'Enterprise',
    price: 'Contact us',
    benefits: ['Custom integration', 'Dedicated support', 'SLA guarantee'],
  },
]

export default function Pricing() {
  const [viewPlan, setViewPlan] = useState<Tier | null>(null)

  return (
    <>
      <motion.section
        id="pricing"
        className="py-16 bg-gray-900 text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={container}
      >
        <h2 className="text-4xl font-bold text-center mb-12">Pricing</h2>
        <motion.div className="max-w-5xl mx-auto grid gap-8 sm:grid-cols-3">
          {TIERS.map((tier) => (
            <motion.div
              key={tier.name}
              className="relative flex flex-col p-6 bg-gray-800 rounded-2xl shadow-xl"
              variants={item}
              whileHover={{ scale: 1.03 }}
            >
              {tier.name === 'Pro' && (
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 text-xs font-bold rounded-full shadow-[0_0_10px_rgba(59,130,246,0.7)]">
                  Best Seller
                </div>
              )}
              <h3 className="text-2xl font-semibold mb-4">{tier.name}</h3>
              <span className="text-3xl font-bold mb-4">{tier.price}</span>
              <ul className="flex-1 mb-6 space-y-2">
                {tier.benefits.map((b) => (
                  <li key={b} className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-indigo-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" />
                    </svg>
                    {b}
                  </li>
                ))}
              </ul>
              <motion.button
                className="mt-auto px-4 py-2 bg-indigo-600 rounded-lg text-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setViewPlan(tier)}
              >
                View Plan
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      <AnimatePresence>
        {viewPlan && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0"
              onClick={() => setViewPlan(null)}
            />
            <motion.div
              className="relative z-10 bg-gray-800 text-white rounded-2xl shadow-2xl w-11/12 max-w-2xl p-8"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
                onClick={() => setViewPlan(null)}
              >
                ✕
              </button>
              <h3 className="text-3xl font-bold mb-2">{viewPlan.name} Plan</h3>
              <p className="text-2xl font-semibold text-indigo-400 mb-6">{viewPlan.price}</p>
              <h4 className="text-xl font-semibold mb-2">What’s included:</h4>
              <ul className="mb-6 space-y-2">
                {viewPlan.benefits.map((b) => (
                  <li key={b} className="flex items-start">
                    <svg
                      className="w-5 h-5 mt-1 mr-2 text-indigo-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" />
                    </svg>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <h4 className="text-xl font-semibold mb-2">Details:</h4>
              <p className="text-gray-300 mb-6">
                The <strong>{viewPlan.name}</strong> plan gives you access to all core features,
                priority support, and automatic updates. Ideal for{' '}
                <em>
                  {viewPlan.name === 'Basic'
                    ? 'getting started'
                    : viewPlan.name === 'Pro'
                    ? 'getting started'
                    : 'enterprise deployments'}
                </em>.
              </p>
              <div className="flex justify-end space-x-4">
                <button
                  className="px-6 py-2 bg-gray-700 rounded-lg hover:bg-gray-600"
                  onClick={() => setViewPlan(null)}
                >
                  Close
                </button>
                <button
                  className="px-6 py-2 bg-green-600 rounded-lg hover:bg-green-500"
                  onClick={() => {
                    alert(`Purchased ${viewPlan.name} plan!`)
                    setViewPlan(null)
                  }}
                >
                  Purchase
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
