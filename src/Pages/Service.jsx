import { Link } from "react-router-dom";

const services = [
  { 
    name: "Plumber", 
    icon: "🚰",
    description: "Pipe repairs, installations, leaks",
    count: "240+ experts",
    gradient: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    path: "/services/plumbing"
  },
  { 
    name: "Electrician", 
    icon: "⚡",
    description: "Wiring, fixtures, safety checks",
    count: "180+ certified",
    gradient: "from-yellow-500 to-orange-500",
    bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
    path: "/services/electrical"
  },
  { 
    name: "Generator Repair", 
    icon: "🔌",
    description: "Maintenance, troubleshooting",
    count: "90+ specialists",
    gradient: "from-gray-700 to-gray-900",
    bgColor: "bg-gray-100 dark:bg-gray-800/30",
    path: "/services/generator"
  },
  { 
    name: "AC Repair", 
    icon: "❄️",
    description: "Installation, servicing, repairs",
    count: "150+ technicians",
    gradient: "from-cyan-500 to-blue-500",
    bgColor: "bg-cyan-50 dark:bg-cyan-900/20",
    path: "/services/ac-repair"
  },
  { 
    name: "Phone & Laptop Repair", 
    icon: "💻",
    description: "Screen, battery, software fixes",
    count: "120+ repair centers",
    gradient: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50 dark:bg-purple-900/20",
    path: "/services/electronics"
  },
  { 
    name: "Cleaning", 
    icon: "✨",
    description: "Home, office, deep cleaning",
    count: "200+ cleaning teams",
    gradient: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50 dark:bg-green-900/20",
    path: "/services/cleaning"
  },
  { 
    name: "Carpentry", 
    icon: "🪚",
    description: "Furniture, repairs, installations",
    count: "160+ carpenters",
    gradient: "from-amber-700 to-amber-900",
    bgColor: "bg-amber-50 dark:bg-amber-900/20",
    path: "/services/carpentry"
  },
  { 
    name: "Painting", 
    icon: "🎨",
    description: "Interior, exterior, decorative",
    count: "140+ painters",
    gradient: "from-red-500 to-rose-500",
    bgColor: "bg-red-50 dark:bg-red-900/20",
    path: "/services/painting"
  },
  { 
    name: "Pest Control", 
    icon: "🐜",
    description: "Elimination, prevention",
    count: "110+ exterminators",
    gradient: "from-lime-600 to-green-600",
    bgColor: "bg-lime-50 dark:bg-lime-900/20",
    path: "/services/pest-control"
  },
];

export default function Service() {
  return (
    <div className="relative min-h-screen">
      {/* Background Gradient Layers */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 -z-10" />
      <div className="fixed inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent dark:via-white/5 -z-10" />
      
      {/* Animated Gradient Orbs */}
      <div className="fixed top-1/4 left-1/4 w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/5 dark:to-purple-500/5 rounded-full blur-3xl -z-5 animate-pulse" />
      <div className="fixed bottom-1/4 right-1/4 w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-r from-indigo-500/10 to-pink-500/10 dark:from-indigo-500/5 dark:to-pink-500/5 rounded-full blur-3xl -z-5" />
      
      <div className="relative px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 xl:py-20 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <span className="inline-block bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 dark:from-blue-600 dark:via-indigo-600 dark:to-purple-600 text-white text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4 shadow-lg">
            Professional Services
          </span>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            Trusted <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base lg:text-lg max-w-2xl sm:max-w-3xl mx-auto px-4">
            Connect with verified professionals across a wide range of essential services
          </p>
        </div>

        {/* Service Grid - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
          {services.map((service, index) => (
            <Link 
              to={service.path}
              key={index}
              className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800/80 dark:to-gray-900/80 border border-gray-200 dark:border-gray-700 p-4 sm:p-6 shadow-md sm:shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2 backdrop-blur-sm"
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-500 from-blue-500 via-purple-500 to-pink-500" />
              
              {/* Service Icon */}
              <div className="flex items-start justify-between mb-3 sm:mb-4">
                <div className={`p-2 sm:p-3 rounded-lg ${service.bgColor} group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-2xl sm:text-3xl">{service.icon}</span>
                </div>
                <span className="text-xs font-semibold bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-800 text-white px-2 sm:px-3 py-1 rounded-full">
                  {service.count}
                </span>
              </div>

              {/* Service Info */}
              <div className="relative z-10">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r transition-all duration-300">
                  {service.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4">
                  {service.description}
                </p>
                
                {/* Progress Indicator */}
                <div className="mb-3 sm:mb-4">
                  <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
                    <span>Availability</span>
                    <span>95%</span>
                  </div>
                  <div className="h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${service.gradient} rounded-full`}
                      style={{ width: '95%' }}
                    />
                  </div>
                </div>

                {/* Action Button */}
                <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-gray-100 dark:border-gray-700">
                  <span className="text-xs sm:text-sm font-medium bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                    Book Now →
                  </span>
                  <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                    <span className="mr-1">⭐</span>
                    <span>4.8+</span>
                  </div>
                </div>
              </div>

              {/* Hover Effect Indicator */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 from-blue-500 to-purple-500" />
            </Link>
          ))}
        </div>

        {/* Featured Services Banner */}
        <div className="mb-12 sm:mb-16 lg:mb-20 bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-900 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-2/3 mb-6 lg:mb-0 lg:pr-8">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">
                Need Immediate Assistance?
              </h3>
              <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6">
                Our emergency services are available 24/7. Get help within 60 minutes for urgent repairs and critical issues.
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <div className="flex items-center text-white">
                  <span className="text-lg sm:text-xl mr-2">🚨</span>
                  <span className="text-xs sm:text-sm">24/7 Emergency</span>
                </div>
                <div className="flex items-center text-white">
                  <span className="text-lg sm:text-xl mr-2">⏱️</span>
                  <span className="text-xs sm:text-sm">60-Min Response</span>
                </div>
                <div className="flex items-center text-white">
                  <span className="text-lg sm:text-xl mr-2">✅</span>
                  <span className="text-xs sm:text-sm">Verified Pros</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3">
              <Link 
                to="/emergency"
                className="inline-flex items-center justify-center w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-semibold py-2.5 sm:py-3 px-5 sm:px-6 rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 sm:hover:-translate-y-1"
              >
                <span className="text-lg sm:text-xl mr-2">🆘</span>
                <span className="text-sm sm:text-base">Emergency Call</span>
              </Link>
              <p className="text-gray-400 text-xs text-center mt-2 sm:mt-3">
                Available 24/7 • No extra charges
              </p>
            </div>
          </div>
        </div>

        {/* Service Categories */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <h3 className="text-xl sm:text-2xl font-bold text-center text-gray-900 dark:text-white mb-6 sm:mb-8">
            Browse by Category
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {[
              { name: "Home Repair", icon: "🏠", color: "bg-blue-100 dark:bg-blue-900/30", count: 12 },
              { name: "Electronics", icon: "📱", color: "bg-purple-100 dark:bg-purple-900/30", count: 8 },
              { name: "Maintenance", icon: "🔧", color: "bg-green-100 dark:bg-green-900/30", count: 15 },
              { name: "Installation", icon: "⚙️", color: "bg-orange-100 dark:bg-orange-900/30", count: 10 },
            ].map((category, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-4 sm:p-5 text-center hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700"
              >
                <div className={`w-10 h-10 sm:w-14 sm:h-14 ${category.color} rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3`}>
                  <span className="text-xl sm:text-2xl">{category.icon}</span>
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">{category.name}</h4>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">{category.count} services</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-50/80 to-indigo-50/80 dark:from-gray-800/80 dark:to-gray-900/80 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
              Can't find your service?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
              Tell us what you need and we'll connect you with the right professional. We cover hundreds of specialized services.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link 
                to="/request"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
              >
                Request Custom Service
              </Link>
              <Link 
                to="/contact"
                className="bg-white/80 dark:bg-gray-800/80 text-gray-800 dark:text-gray-200 px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 text-sm sm:text-base"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {[
            { value: "5000+", label: "Professionals", icon: "👷" },
            { value: "4.8★", label: "Avg Rating", icon: "⭐" },
            { value: "24h", label: "Response Time", icon: "⚡" },
            { value: "98%", label: "Satisfaction", icon: "😊" },
          ].map((stat, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-white/80 to-gray-50/80 dark:from-gray-800/80 dark:to-gray-900/80 rounded-xl p-4 text-center backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50"
            >
              <div className="text-lg sm:text-xl mb-1">{stat.icon}</div>
              <div className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Floating Action Button for Mobile */}
        <div className="fixed bottom-6 right-6 sm:hidden z-40">
          <Link
            to="/request"
            className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 animate-bounce"
          >
            <span className="text-xl">+</span>
          </Link>
        </div>
      </div>
    </div>
  );
}