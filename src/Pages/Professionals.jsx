import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../Firebase.config";

export default function Professionals() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const [professionals, setProfessionals] = useState([]);

  useEffect(() => {
    const col = collection(db, "professionals");
    const unsub = onSnapshot(col, (snapshot) => {
      setProfessionals(snapshot.docs.map((d) => ({ id: d.id, ...d.data() })));
    }, (err) => {
      console.error("Failed to load professionals:", err);
    });

    return () => unsub();
  }, []);

  const categories = [
    { id: "all", name: "All Professionals", count: professionals.length },
    { id: "plumbing", name: "Plumbing", count: 2 },
    { id: "electrical", name: "Electrical", count: 2 },
    { id: "ac", name: "AC & HVAC", count: 2 },
    { id: "cleaning", name: "Cleaning", count: 1 },
    { id: "appliance", name: "Appliance", count: 1 },
    { id: "emergency", name: "Emergency", count: 1 }
  ];

  const filteredProfessionals = professionals.filter(pro => {
    if (activeFilter !== "all") {
      const professionLower = pro.profession.toLowerCase();
      if (activeFilter === "plumbing" && !professionLower.includes("plumb")) return false;
      if (activeFilter === "electrical" && !professionLower.includes("electric")) return false;
      if (activeFilter === "ac" && !professionLower.includes("ac") && !professionLower.includes("hvac")) return false;
      if (activeFilter === "cleaning" && !professionLower.includes("clean")) return false;
      if (activeFilter === "appliance" && !professionLower.includes("appliance")) return false;
      if (activeFilter === "emergency" && !professionLower.includes("emergency")) return false;
    }
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return (
        pro.name.toLowerCase().includes(query) ||
        pro.profession.toLowerCase().includes(query) ||
        pro.location.toLowerCase().includes(query) ||
        (pro.specialties && pro.specialties.some(s => s.toLowerCase().includes(query)))
      );
    }
    
    return true;
  });

  const stats = [
    { label: "Total Professionals", value: "5,000+" },
    { label: "Avg. Rating", value: "4.8★" },
    { label: "Jobs Completed", value: "250K+" },
    { label: "Response Time", value: "< 30 min" }
  ];

  return (
    <div className="relative min-h-screen" style={{ backgroundColor: '#212b3a' }}>
      <div className="relative px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 max-w-7xl mx-auto">
        
        {/* Back Button */}
        <div className="mb-6 sm:mb-8">
          <Link to="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium">
            <span className="mr-2">←</span>
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-block bg-linear-to-r from-blue-600 to-blue-700 text-white text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4 shadow">
            Verified & Trusted
          </span>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
            Find <span className="text-blue-400">Professional</span> Service Providers
          </h1>
          <p className="text-blue-300/80 text-sm sm:text-base max-w-3xl mx-auto">
            Connect with background-checked, highly-rated professionals for all your home service needs.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8 sm:mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gray-800/50 rounded-xl p-4 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-blue-300/80 text-xs sm:text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Search and Filter Section */}
        <div className="mb-8 sm:mb-12">
          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search professionals by name, skill, or location..."
                className="w-full px-4 py-3 pl-12 bg-gray-800 border border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400 transition-all duration-300"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                🔍
              </div>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Category Filters */}
          <div className="overflow-x-auto">
            <div className="flex space-x-2 pb-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`flex-shrink-0 px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeFilter === category.id
                      ? "bg-blue-600 text-white shadow"
                      : "bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700"
                  }`}
                >
                  <span className="font-medium text-sm">{category.name}</span>
                  <span className={`ml-2 text-xs px-1.5 py-0.5 rounded-full ${
                    activeFilter === category.id
                      ? "bg-blue-700"
                      : "bg-gray-700"
                  }`}>
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Professionals Grid */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-white">
              {searchQuery ? `Search Results (${filteredProfessionals.length})` : "Featured Professionals"}
            </h2>
            <div className="text-blue-300/80 text-sm">
              Showing {filteredProfessionals.length} of {professionals.length} professionals
            </div>
          </div>

          {filteredProfessionals.length === 0 ? (
            <div className="bg-gray-800/50 rounded-2xl p-8 sm:p-12 text-center">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-white mb-2">No Professionals Found</h3>
              <p className="text-blue-300/80 mb-6">Try adjusting your search or filter criteria</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveFilter("all");
                }}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {filteredProfessionals.map((pro) => (
                <div
                  key={pro.id}
                  className="bg-gray-800/90 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 overflow-hidden group"
                >
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <div className={`${pro.imageColor || 'bg-gray-600'} w-14 h-14 rounded-xl flex items-center justify-center text-white font-bold text-xl`}>
                        {pro.name ? pro.name.charAt(0) : "P"}
                      </div>
                      <div>
                        <h3 className="font-bold text-white text-lg">{pro.name}</h3>
                        <p className="text-blue-400 text-sm">{pro.profession}</p>
                        <p className="text-gray-400 text-sm">{pro.location}</p>
                        <p className="text-gray-400 text-sm">Experience: <span className="text-white">{pro.experience}</span></p>
                        {pro.phone ? (
                          <div className="flex items-center justify-between mt-3">
                            <div className="text-sm text-gray-400 flex items-center gap-2">
                              <span>📞</span>
                              <a href={`tel:${pro.phone}`} className="text-blue-300 hover:underline">{pro.phoneDisplay || pro.phone}</a>
                            </div>
                            <a href={`tel:${pro.phone}`} className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors">Hire</a>
                          </div>
                        ) : (
                          <div className="text-sm text-gray-500 mt-3">No phone available</div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Why Choose Our Professionals */}
        <div className="bg-gray-800/50 rounded-2xl p-6 sm:p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Why Our <span className="text-blue-400">Professionals</span> Stand Out
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-blue-400">✅</span>
              </div>
              <h3 className="font-semibold text-white mb-2">Thorough Vetting</h3>
              <p className="text-blue-300/80 text-sm">Background checks, license verification, and skill assessment</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-blue-400">⭐</span>
              </div>
              <h3 className="font-semibold text-white mb-2">Customer Ratings</h3>
              <p className="text-blue-300/80 text-sm">Real reviews from verified customers ensure quality service</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-blue-400">🛡️</span>
              </div>
              <h3 className="font-semibold text-white mb-2">Service Guarantee</h3>
              <p className="text-blue-300/80 text-sm">100% satisfaction guarantee on all completed work</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-blue-400">💼</span>
              </div>
              <h3 className="font-semibold text-white mb-2">Insurance Covered</h3>
              <p className="text-blue-300/80 text-sm">All professionals carry liability insurance</p>
            </div>
          </div>
        </div>

        {/* Become a Professional CTA */}
        <div className="bg-linear-to-r from-blue-900/30 to-blue-800/30 rounded-2xl border border-blue-800/50 p-6 sm:p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Are You a <span className="text-blue-400">Service Professional</span>?
          </h2>
          <p className="text-blue-300/80 mb-6 max-w-2xl mx-auto">
            Join our network of trusted professionals and grow your business with ServiceHub. 
            Get access to thousands of customers, flexible scheduling, and secure payments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/provider/login"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Join as Professional
            </Link>
            <Link
              to="/provider/dashboard"
              className="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors border border-gray-700"
            >
              Professional Login
            </Link>
          </div>
        </div>

        {/* Need Help Section */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-bold text-white mb-6">
            Need Help Choosing a Professional?
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/request"
              className="bg-linear-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow"
            >
              Request Service Help
            </Link>
            <a
              href="https://wa.me/+1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-linear-to-r from-green-600 to-emerald-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow"
            >
              <span className="flex items-center justify-center">
                <span className="mr-2">💬</span>
                Chat on WhatsApp
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}