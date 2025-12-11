import React from "react";
import { Link } from "react-router-dom";
import { Users, Info, Sparkles } from "lucide-react"; // You can use react-icons or any icon library

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-2xl text-center">
        {/* Welcome icon/emoji */}
        <div className="mb-6">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg mb-4">
            <span className="text-3xl">👋</span>
          </div>
        </div>

        {/* Friendly greeting */}
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Hello there! Welcome to{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Raed community 
          </span>
        </h1>

        {/* Warm, conversational description */}
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          We're so glad you're here! 😊 Raed community  is your friendly space to 
          discover amazing people, learn about their stories, and build connections. 
          Whether you're looking to network or simply browse interesting profiles, 
          we've got you covered!
        </p>

        {/* Additional friendly point */}
        <div className="flex items-center justify-center gap-2 mb-10 text-gray-500">
          <Sparkles className="w-5 h-5" />
          <span className="text-lg">Start exploring – it's completely free!</span>
        </div>

        {/* Friendly action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/Build-a-Multi-Page-React-Application-with-Routing/users"
            className="group flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl font-medium text-lg hover:from-blue-700 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <Users className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>Meet Our Community</span>
          </Link>

          <Link
            to="/Build-a-Multi-Page-React-Application-with-Routing/about"
            className="group flex items-center justify-center gap-3 px-8 py-4 bg-white border-2 border-blue-100 text-blue-600 rounded-xl font-medium text-lg hover:bg-blue-50 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <Info className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>Learn About Us</span>
          </Link>
        </div>

        {/* Friendly encouragement */}
        <p className="mt-12 text-gray-500 italic">
          P.S. Don't worry, you can explore everything at your own pace. We're here to help!
        </p>

        {/* Decorative elements */}
        <div className="mt-16 flex justify-center gap-2 opacity-60">
          <div className="w-3 h-3 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-3 h-3 rounded-full bg-purple-400 animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-3 h-3 rounded-full bg-pink-400 animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  );
}

export default Home;