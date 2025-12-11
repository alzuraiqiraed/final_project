import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Users, Info } from "lucide-react";

function Navbar() {
  const location = useLocation();
  
  const navItems = [
    { path: "/Build-a-Multi-Page-React-Application-with-Routing", label: "Home", icon: Home },
    { path: "/Build-a-Multi-Page-React-Application-with-Routing/about", label: "About", icon: Info },
    { path: "/Build-a-Multi-Page-React-Application-with-Routing/users", label: "Community", icon: Users },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-blue-100 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* Logo/Brand */}
          <Link 
            to="/Build-a-Multi-Page-React-Application-with-Routing" 
            className="group flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
              <span className="text-white font-bold text-xl">R</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Raed Al-Zuraiqi
              </span>
              <span className="text-xs text-gray-500 -mt-1">Where people connect</span>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-1 bg-white/50 rounded-2xl p-1 shadow-inner">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all duration-300 ${
                    active
                      ? "bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 border border-blue-100"
                      : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${active ? "text-blue-500" : "text-gray-400"}`} />
                  <span>{item.label}</span>
                  {active && (
                    <div className="w-2 h-2 bg-blue-500 rounded-full ml-1"></div>
                  )}
                </Link>
              );
            })}
          </div>

          {/* Welcome message */}
          <div className="hidden md:block text-sm text-gray-500 italic">
            Nice to see you! 👋
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;