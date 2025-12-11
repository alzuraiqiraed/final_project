import React from 'react'
import { Link } from 'react-router-dom'
import { Heart, Coffee, Mail } from 'lucide-react'

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-blue-900 text-gray-300 pt-12 pb-8 mt-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          
          {/* Brand section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-2xl">R</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">
                  Raed<span className="text-blue-400">Al-Zuraiqi</span>
                </h2>
                <p className="text-gray-400 text-sm mt-1">Building connections, one profile at a time</p>
              </div>
            </div>
            <p className="text-gray-400">
              A friendly space to discover amazing people and build meaningful connections in our community.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6 pb-2 border-b border-gray-700">
              Quick Links
            </h3>
            <div className="space-y-3">
              {[
                { path: "/Build-a-Multi-Page-React-Application-with-Routing", label: "🏠 Home" },
                { path: "/Build-a-Multi-Page-React-Application-with-Routing/about", label: "📖 Our Story" },
                { path: "/Build-a-Multi-Page-React-Application-with-Routing/users", label: "👥 Meet Everyone" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="flex items-center gap-3 text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 group"
                >
                  <span className="text-lg">{link.label.split(' ')[0]}</span>
                  <span>{link.label.split(' ').slice(1).join(' ')}</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact/Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6 pb-2 border-b border-gray-700">
              Get in Touch
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
                <span>Raed@gmail.com</span>
              </div>
              <p className="text-gray-400 text-sm">
                Have questions or suggestions? We'd love to hear from you! 
                We're always here to help make your experience better.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        {/* <div className="border-t border-gray-800 my-8"></div> */}

        

        {/* Friendly message */}
        <div className="text-center mt-8 pt-6 border-t border-gray-800">
          <p className="text-gray-500 italic text-sm">
            Thanks for visiting! Come back anytime. We're always happy to see you! 😊
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer