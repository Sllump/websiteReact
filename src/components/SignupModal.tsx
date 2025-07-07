import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface SignupModalProps {
  isOpen: boolean
  onClose: () => void
  onSwitchToLogin: () => void
}

export default function SignupModal({ isOpen, onClose, onSwitchToLogin }: SignupModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <div className="absolute inset-0" onClick={onClose} />

          <motion.div
            className="relative z-10 bg-gray-800 bg-opacity-80 text-white rounded-2xl shadow-2xl w-11/12 max-w-md p-8"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
              onClick={onClose}
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold mb-1">Create Account</h2>
            <p className="text-gray-300 mb-6">Register for your Website account</p>

            <div className="space-y-4 mb-6">
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-4 py-3 bg-gray-700 bg-opacity-50 rounded-lg placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="text"
                placeholder="Username"
                className="w-full px-4 py-3 bg-gray-700 bg-opacity-50 rounded-lg placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-3 bg-gray-700 bg-opacity-50 rounded-lg placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <button
              className="w-full py-3 mb-4 bg-gradient-to-r from-green-400 to-blue-500 text-black font-semibold rounded-lg shadow-lg hover:opacity-90 transition"
              onClick={() => {
                alert('Account created!')
                onClose()
              }}
            >
              Create Account
            </button>

            <p className="text-center text-gray-300 text-sm">
              Already have an account?{' '}
              <button
                className="text-green-400 hover:underline"
                onClick={() => {
                  onClose()
                  onSwitchToLogin()
                }}
              >
                Sign in
              </button>
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
