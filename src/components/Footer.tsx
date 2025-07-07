import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="max-w-6xl mx-auto text-center space-y-4">
        <p>&copy; {new Date().getFullYear()} WebsiteName. All rights reserved.</p>
        <p className="text-sm">
          Made with ❤️ by <a href="https://slump.dev" className="hover:text-white">Slump</a>
        </p>
        <div className="flex justify-center space-x-6">
          <a href="#" className="hover:text-white">Terms of Service</a>
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Support</a>
        </div>
      </div>
    </footer>
  )
}
