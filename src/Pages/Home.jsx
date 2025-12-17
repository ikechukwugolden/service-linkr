import { Link } from "react-router-dom";

export default function Home() {
  const serviceCategories = [
    { 
      name: "Plumbing & Water", 
      emoji: "🚰",
      count: "240+ experts",
      description: "Leaks, installations, repairs",
      path: "/services/plumbing"
    },
    { 
      name: "Electrical Services", 
      emoji: "⚡",
      count: "180+ certified",
      description: "Wiring, fixtures, safety checks",
      path: "/services/electrical"
    },
    { 
      name: "Home Repairs", 
      emoji: "🔧",
      count: "300+ professionals",
      description: "Furniture, fixtures, maintenance",
      path: "/services/repairs"
    },
    { 
      name: "Cleaning Services", 
      emoji: "✨",
      count: "150+ teams",
      description: "Deep clean, regular maintenance",
      path: "/services/cleaning"
    },
    { 
      name: "Appliance Repair", 
      emoji: "🏠",
      count: "120+ specialists",
      description: "All major brands & models",
      path: "/services/appliance"
    },
    { 
      name: "Emergency Services", 
      emoji: "🛡️",
      count: "90+ on-call",
      description: "24/7 urgent response",
      path: "/services/emergency"
    }
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Describe Your Need",
      description: "Tell us what service you require and when you need it",
      emoji: "📝"
    },
    {
      step: "2",
      title: "Get Matched Instantly",
      description: "We connect you with verified local professionals",
      emoji: "⚡"
    },
    {
      step: "3",
      title: "Compare & Choose",
      description: "Review quotes, ratings, and availability",
      emoji: "✅"
    }
  ];

  const footerLinks = {
    services: [
      { name: "Plumbing", path: "/services/plumbing" },
      { name: "Electrical", path: "/services/electrical" },
      { name: "Cleaning", path: "/services/cleaning" },
      { name: "Repairs", path: "/services/repairs" },
      { name: "Appliance", path: "/services/appliance" }
    ],
    company: [
      { name: "About Us", path: "/about" },
      { name: "How It Works", path: "/how-it-works" },
      { name: "Careers", path: "/careers" },
      { name: "Press", path: "/press" },
      { name: "Blog", path: "/blog" }
    ],
    support: [
      { name: "Help Center", path: "/help" },
      { name: "Contact Us", path: "/contact" },
      { name: "Safety", path: "/safety" },
      { name: "Terms of Service", path: "/terms" },
      { name: "Privacy Policy", path: "/privacy" }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Background linear Layers */}
      <div className="fixed inset-0 bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 -z-10" />
      
      <div className="grow px-4 sm:px-6 lg:px-8 py-8 lg:py-16 max-w-7xl mx-auto relative">
        {/* Payment Banner */}
        <div className="mb-8 lg:mb-12">
          <div className="bg-linear-to-r from-green-500 to-emerald-600 rounded-2xl p-4 lg:p-6 shadow-lg">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="flex items-center mb-4 lg:mb-0">
                <div className="bg-white/20 p-3 rounded-full mr-4">
                  <span className="text-2xl">💳</span>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg lg:text-xl">Secure Payment Portal</h3>
                  <p className="text-white/90 text-sm lg:text-base">Pay for services securely online. 100% protected payments.</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link 
                  to="/payment" 
                  className="bg-white text-emerald-700 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-all duration-300 text-center"
                >
                  Make a Payment
                </Link>
                <Link 
                  to="/payment/methods" 
                  className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 text-center"
                >
                  Payment Methods
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-16 lg:mb-24 relative">
          <div className="mb-8">
            <span className="inline-block bg-linear-to-r from-blue-500 via-indigo-500 to-purple-500 dark:from-blue-600 dark:via-indigo-600 dark:to-purple-600 text-white text-sm font-semibold px-4 py-2 rounded-full mb-4 shadow-lg">
              Trusted by 50,000+ Homeowners
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-linear-to-r from-gray-900 via-blue-900 to-indigo-900 dark:from-white dark:via-blue-100 dark:to-indigo-100 bg-clip-text text-transparent">
              Find Trusted Local Service 
            </span>
            <span className="bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent block mt-2">
              Providers
            </span>
          </h1>
          
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-8 lg:mb-10 max-w-3xl mx-auto">
            Plumbers, electricians, repairs, cleaning — connect with verified professionals ready to help.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center">
            <Link
              to="/request"
              className="bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 dark:from-blue-500 dark:via-indigo-500 dark:to-purple-500 dark:hover:from-blue-600 dark:hover:via-indigo-600 dark:hover:to-purple-600 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-lg lg:rounded-xl text-base lg:text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
            >
              Request a Service
            </Link>
            <Link
              to="/providers"
              className="bg-linear-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 hover:from-gray-50 hover:to-gray-100 dark:hover:from-gray-700 dark:hover:to-gray-800 text-gray-800 dark:text-gray-200 px-6 lg:px-8 py-3 lg:py-4 rounded-lg lg:rounded-xl text-base lg:text-lg font-semibold border border-gray-200 dark:border-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
            >
              Browse Professionals
            </Link>
          </div>
        </div>

       

        {/* Services Grid */}
        <div className="mb-16 lg:mb-24 relative">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 bg-linear-to-r from-blue-700 via-indigo-700 to-purple-700 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
              Popular Services
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-sm lg:text-base">
              Choose from hundreds of verified professionals across essential home services
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCategories.map((service, index) => (
              <Link 
                to={service.path}
                key={index}
                className="bg-linear-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700 hover:border-transparent hover:scale-[1.02] group cursor-pointer relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-linear-to-br from-blue-500/0 via-indigo-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:via-indigo-500/5 group-hover:to-purple-500/5 dark:group-hover:from-blue-500/10 dark:group-hover:via-indigo-500/10 dark:group-hover:to-purple-500/10 transition-all duration-500 z-0" />
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-linear-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-xl group-hover:from-blue-100 group-hover:to-indigo-100 dark:group-hover:from-blue-800/50 dark:group-hover:to-indigo-800/50 transition-all duration-300">
                      <div className="text-2xl">
                        {service.emoji}
                      </div>
                    </div>
                    <span className="text-sm font-medium bg-linear-to-r from-blue-500 to-indigo-500 dark:from-blue-400 dark:to-indigo-400 text-white px-3 py-1 rounded-full">
                      {service.count}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {service.description}
                  </p>
                  <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                    <span className="text-sm bg-linear-to-r from-blue-500 to-indigo-500 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent font-medium">
                      Find Providers →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Payment & Trust Section */}
        <div className="mb-16 lg:mb-20">
          <div className="bg-linear-to-r from-gray-900 to-gray-800 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                  Secure & Hassle-Free Payments
                </h2>
                <p className="text-gray-300 mb-6">
                  Pay for services securely through our platform. Your payment is protected until the job is completed to your satisfaction.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-300">
                    <span className="text-green-400 mr-2">✓</span> 100% Payment Protection
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-green-400 mr-2">✓</span> Multiple Payment Methods
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-green-400 mr-2">✓</span> Instant Payment Confirmation
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-green-400 mr-2">✓</span> Secure SSL Encryption
                  </li>
                </ul>
                <div className="mt-8">
                  <Link 
                    to="/payment/secure"
                    className="inline-flex items-center text-white hover:text-blue-200 transition-colors"
                  >
                    Learn more about secure payments
                    <span className="ml-2">→</span>
                  </Link>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="bg-linear-to-br from-gray-800 to-gray-900 rounded-2xl p-6 lg:p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-semibold text-white">Accepted Payment Methods</h3>
                    <span className="text-3xl">💳</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="bg-gray-700/50 rounded-lg p-4 flex items-center justify-center">
                      <span className="text-2xl">💎</span>
                    </div>
                    <div className="bg-gray-700/50 rounded-lg p-4 flex items-center justify-center">
                      <span className="text-2xl">🏦</span>
                    </div>
                    <div className="bg-gray-700/50 rounded-lg p-4 flex items-center justify-center">
                      <span className="text-2xl">📱</span>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm mb-6">
                    Credit/Debit Cards, PayPal, Apple Pay, Google Pay, and Bank Transfer
                  </p>
                  <Link 
                    to="/payment/methods"
                    className="block w-full bg-linear-to-r from-blue-500 to-indigo-500 text-white text-center py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-indigo-600 transition-all duration-300"
                  >
                    View All Payment Options
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-linear-to-r from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-800 dark:via-gray-800 dark:to-gray-900 rounded-3xl p-6 lg:p-12 mb-16 lg:mb-20 relative overflow-hidden">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 bg-linear-to-r from-blue-700 via-indigo-700 to-purple-700 dark:from-blue-300 dark:via-indigo-300 dark:to-purple-300 bg-clip-text text-transparent">
              How It Works
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Get help in three simple steps — from request to completion
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="relative">
                {index < 2 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-linear-to-r from-blue-300 via-indigo-300 to-purple-300 dark:from-blue-700 dark:via-indigo-700 dark:to-purple-700 -translate-x-1/2"></div>
                )}
                <div className="bg-linear-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 lg:p-8 shadow-xl h-full hover:scale-[1.02] transition-all duration-300 border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center mb-4 lg:mb-6">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-linear-to-r from-blue-500 via-indigo-500 to-purple-500 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 rounded-full flex items-center justify-center text-white font-bold text-lg lg:text-xl mr-3 lg:mr-4 shadow-lg">
                      {step.step}
                    </div>
                    <div className="text-2xl">
                      {step.emoji}
                    </div>
                  </div>
                  <h3 className="text-lg lg:text-xl font-semibold text-gray-900 dark:text-white mb-2 lg:mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm lg:text-base">
                    {step.description}
                  </p>
                  <div className="mt-4 lg:mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <span className="text-sm bg-linear-to-r from-blue-500 to-indigo-500 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent font-medium">
                      Learn more →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-linear-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold mb-4 bg-linear-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                ServiceHub
              </h2>
              <p className="text-gray-400 mb-4 lg:mb-6 text-sm lg:text-base">
                Connecting you with trusted local professionals for all your home service needs.
              </p>
              <div className="flex space-x-3 lg:space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors hover:scale-110 duration-200">
                  <span className="sr-only">Facebook</span>
                  <span className="text-lg lg:text-xl">f</span>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors hover:scale-110 duration-200">
                  <span className="sr-only">Twitter</span>
                  <span className="text-lg lg:text-xl">𝕏</span>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors hover:scale-110 duration-200">
                  <span className="sr-only">Instagram</span>
                  <span className="text-lg lg:text-xl">📷</span>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors hover:scale-110 duration-200">
                  <span className="sr-only">LinkedIn</span>
                  <span className="text-lg lg:text-xl">in</span>
                </a>
              </div>
            </div>

            {/* Services Links */}
            <div>
              <h3 className="text-lg font-semibold mb-3 lg:mb-4 text-white">Services</h3>
              <ul className="space-y-1 lg:space-y-2">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.path}
                      className="text-gray-400 hover:text-white transition-colors hover:pl-1 lg:hover:pl-2 duration-200 block text-sm lg:text-base"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-lg font-semibold mb-3 lg:mb-4 text-white">Company</h3>
              <ul className="space-y-1 lg:space-y-2">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.path}
                      className="text-gray-400 hover:text-white transition-colors hover:pl-1 lg:hover:pl-2 duration-200 block text-sm lg:text-base"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h3 className="text-lg font-semibold mb-3 lg:mb-4 text-white">Support</h3>
              <ul className="space-y-1 lg:space-y-2">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.path}
                      className="text-gray-400 hover:text-white transition-colors hover:pl-1 lg:hover:pl-2 duration-200 block text-sm lg:text-base"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 dark:border-gray-700 mt-6 lg:mt-8 pt-6 lg:pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-xs lg:text-sm mb-4 md:mb-0">
                © {new Date().getFullYear()} ServiceHub. All rights reserved.
              </div>
              <div className="flex flex-wrap gap-3 lg:gap-4 text-xs lg:text-sm">
                <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
                <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/cookies" className="text-gray-400 hover:text-white transition-colors">
                  Cookie Policy
                </Link>
                <Link to="/sitemap" className="text-gray-400 hover:text-white transition-colors">
                  Sitemap
                </Link>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mt-6 lg:mt-8 flex flex-wrap justify-center gap-4">
            <Link 
              to="/payment" 
              className="bg-linear-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            >
              Make a Payment
            </Link>
            <Link 
              to="/contact" 
              className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-700 transition-all duration-300"
            >
              Contact Support
            </Link>
            <Link 
              to="/book" 
              className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-700 transition-all duration-300"
            >
              Book a Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}