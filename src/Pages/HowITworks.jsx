import { Link } from "react-router-dom";
import { useState } from "react";

export default function HowITWorks() {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      number: 1,
      title: "Describe Your Need",
      description: "Tell us what service you need, when you need it, and any specific requirements.",
      details: [
        "Select from 50+ service categories",
        "Provide location and preferred time",
        "Add photos or videos of the problem",
        "Get instant cost estimates"
      ],
      icon: "📝",
      color: "from-blue-500 to-cyan-500"
    },
    {
      number: 2,
      title: "Get Matched Instantly",
      description: "Our AI matches you with the best local professionals based on your needs.",
      details: [
        "View verified professional profiles",
        "Check ratings & reviews (4.8+ avg)",
        "Compare quotes from multiple providers",
        "See availability in real-time"
      ],
      icon: "⚡",
      color: "from-purple-500 to-pink-500"
    },
    {
      number: 3,
      title: "Review & Choose",
      description: "Compare professionals, read reviews, and choose the best match for you.",
      details: [
        "Compare prices & availability",
        "Read customer testimonials",
        "Check certifications & experience",
        "View response time history"
      ],
      icon: "⭐",
      color: "from-amber-500 to-orange-500"
    },
    {
      number: 4,
      title: "Book & Relax",
      description: "Confirm your booking and let the professional handle everything.",
      details: [
        "Secure online booking",
        "Live tracking of professional",
        "Real-time updates & notifications",
        "100% payment protection"
      ],
      icon: "✅",
      color: "from-green-500 to-emerald-500"
    },
    {
      number: 5,
      title: "Service & Payment",
      description: "Get quality service and pay securely only after you're satisfied.",
      details: [
        "Quality service guarantee",
        "Secure in-app payment",
        "Post-service support",
        "Easy rebooking options"
      ],
      icon: "💳",
      color: "from-indigo-500 to-blue-500"
    }
  ];

  const features = [
    {
      title: "Verified Professionals",
      description: "All service providers are background-checked and verified",
      icon: "🔒"
    },
    {
      title: "Price Transparency",
      description: "No hidden fees. See all costs upfront",
      icon: "💰"
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock customer support",
      icon: "🕒"
    },
    {
      title: "Satisfaction Guarantee",
      description: "100% satisfaction or your money back",
      icon: "👍"
    }
  ];

  const faqs = [
    {
      question: "How quickly can I get a service professional?",
      answer: "Most requests are matched within 15 minutes, and professionals typically arrive within 1-2 hours for urgent requests."
    },
    {
      question: "Are the service providers background checked?",
      answer: "Yes, every professional on our platform undergoes thorough background checks, license verification, and quality assessment."
    },
    {
      question: "What if I'm not satisfied with the service?",
      answer: "We offer a 100% satisfaction guarantee. If you're not happy with the service, we'll either redo it for free or provide a full refund."
    },
    {
      question: "How does payment work?",
      answer: "Pay securely through our platform after service completion. Your payment is held securely until you confirm satisfaction."
    }
  ];

  const phoneNumber = "+1234567890"; // Replace with your WhatsApp number
  const whatsappMessage = encodeURIComponent("Hi! I need more information about ServiceHub services. Can you help me?");

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
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <span className="inline-block bg-linear-to-r from-blue-600 to-purple-600 text-white text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4 shadow">
            Simple & Transparent Process
          </span>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 sm:mb-4">
            How <span className="text-blue-400">ServiceHub</span> Works
          </h1>
          <p className="text-blue-300/80 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto">
            Get quality home services in 5 simple steps. From request to completion, we've got you covered.
          </p>
        </div>

        {/* Interactive Steps */}
        <div className="mb-16 lg:mb-20">
          {/* Step Navigation */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
            {steps.map((step) => (
              <button
                key={step.number}
                onClick={() => setActiveStep(step.number)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-all duration-300 ${activeStep === step.number
                    ? `bg-linear-to-r ${step.color} text-white shadow-lg scale-105`
                    : "bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700"
                  }`}
              >
                <span className="font-semibold text-sm sm:text-base">Step {step.number}</span>
              </button>
            ))}
          </div>

          {/* Active Step Display */}
          <div className="bg-gray-800/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-gray-700 p-6 sm:p-8 lg:p-10">
            {steps.map((step) => (
              activeStep === step.number && (
                <div key={step.number} className="animate-fadeIn">
                  <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-8">
                    {/* Step Icon */}
                    <div className={`bg-linear-to-r ${step.color} w-20 h-20 sm:w-24 sm:h-24 rounded-2xl flex items-center justify-center shadow-lg`}>
                      <span className="text-3xl sm:text-4xl">{step.icon}</span>
                    </div>

                    {/* Step Content */}
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <span className="text-xs sm:text-sm font-semibold text-blue-400 bg-blue-900/30 px-3 py-1 rounded-full">
                          Step {step.number}
                        </span>
                        <div className="ml-4 h-px flex-1 bg-linear-to-r from-gray-600 to-transparent"></div>
                      </div>

                      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3">
                        {step.title}
                      </h2>

                      <p className="text-blue-300/80 text-sm sm:text-base lg:text-lg mb-6">
                        {step.description}
                      </p>

                      {/* Step Details */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {step.details.map((detail, index) => (
                          <div key={index} className="flex items-start bg-gray-900/50 rounded-lg p-3">
                            <span className="text-blue-400 mr-2">•</span>
                            <span className="text-gray-300 text-sm">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Navigation Arrows */}
                  <div className="flex justify-between mt-8 pt-8 border-t border-gray-700">
                    <button
                      onClick={() => setActiveStep(Math.max(1, activeStep - 1))}
                      disabled={activeStep === 1}
                      className={`flex items-center px-4 py-2 rounded-lg transition-all duration-300 ${activeStep === 1
                          ? "opacity-50 cursor-not-allowed"
                          : "text-blue-400 hover:text-blue-300 hover:bg-gray-700"
                        }`}
                    >
                      <span className="mr-2">←</span>
                      <span>Previous Step</span>
                    </button>

                    <div className="flex items-center space-x-2">
                      {steps.map((s) => (
                        <div
                          key={s.number}
                          className={`w-2 h-2 rounded-full ${activeStep === s.number
                              ? `bg-linear-to-r ${s.color}`
                              : "bg-gray-600"
                            }`}
                        />
                      ))}
                    </div>

                    <button
                      onClick={() => setActiveStep(Math.min(5, activeStep + 1))}
                      disabled={activeStep === 5}
                      className={`flex items-center px-4 py-2 rounded-lg transition-all duration-300 ${activeStep === 5
                          ? "opacity-50 cursor-not-allowed"
                          : "text-blue-400 hover:text-blue-300 hover:bg-gray-700"
                        }`}
                    >
                      <span>Next Step</span>
                      <span className="ml-2">→</span>
                    </button>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 sm:mb-12">
            Why Choose <span className="text-blue-400">ServiceHub</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800/90 backdrop-blur-sm rounded-xl p-6 text-center border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="text-3xl mb-4 text-blue-400">{feature.icon}</div>
                <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-blue-300/80 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Visual Timeline */}
        <div className="mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 sm:mb-12">
            Complete Service <span className="text-blue-400">Timeline</span>
          </h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-linear-to-b from-blue-500 via-purple-500 to-emerald-500"></div>

            {/* Timeline Steps */}
            <div className="space-y-12">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                    <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-linear-to-r ${step.color} flex items-center justify-center shadow-lg`}>
                      <span className="text-white font-bold text-sm">{step.number}</span>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-gray-800/90 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-gray-700">
                      <div className="text-2xl mb-2">{step.icon}</div>
                      <h3 className="font-semibold text-white mb-1">{step.title}</h3>
                      <p className="text-blue-300/80 text-sm">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 sm:mb-12">
            Frequently Asked <span className="text-blue-400">Questions</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-800/90 backdrop-blur-sm rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-700"
              >
                <h3 className="font-semibold text-white mb-3 flex items-start">
                  <span className="text-blue-400 mr-2">Q:</span>
                  {faq.question}
                </h3>
                <p className="text-blue-300/80 text-sm">
                  <span className="text-blue-400 mr-1">A:</span>
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* WhatsApp Support Section */}
        <div className="bg-linear-to-r from-gray-800 to-gray-900 rounded-2xl sm:rounded-3xl border border-gray-700 p-8 sm:p-10 lg:p-12 text-center">
          <div className="max-w-3xl mx-auto">
            {/* WhatsApp Icon */}
            <div className="w-20 h-20 bg-linear-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <span className="text-3xl">💬</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              Need More Details or Support?
            </h2>

            <p className="text-blue-300/80 text-sm sm:text-base lg:text-lg mb-8 max-w-2xl mx-auto">
              Our support team is available 24/7 on WhatsApp. Get instant answers to your questions,
              personalized service recommendations, and quick assistance with bookings.
            </p>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/2349045817261"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-linear-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 mb-6"
            >
              <span className="text-2xl mr-3">💬</span>
              <div className="text-left">
                <div className="text-sm opacity-90">Chat with us on</div>
                <div className="text-xl">WhatsApp</div>
              </div>
            </a>

            {/* Support Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-8">
              <div className="bg-gray-800/50 rounded-lg p-4">
                <div className="text-green-400 text-2xl mb-2">⚡</div>
                <div className="text-white font-medium text-sm">Instant Response</div>
                <div className="text-green-400/80 text-xs">Usually within 2 minutes</div>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-4">
                <div className="text-green-400 text-2xl mb-2">👥</div>
                <div className="text-white font-medium text-sm">Expert Support</div>
                <div className="text-green-400/80 text-xs">Trained professionals</div>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-4">
                <div className="text-green-400 text-2xl mb-2">🕒</div>
                <div className="text-white font-medium text-sm">24/7 Availability</div>
                <div className="text-green-400/80 text-xs">Always here to help</div>
              </div>
            </div>

            {/* Alternative Contact */}
            <div className="mt-8 pt-8 border-t border-gray-700">
              <p className="text-blue-300/80 text-sm mb-4">
                Prefer other ways to contact us?
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="tel:+18005551234"
                  className="text-blue-400 hover:text-blue-300 font-medium text-sm"
                >
                  📞 +1 (800) 555-1234
                </a>
                <a
                  href="mailto:support@servicehub.com"
                  className="text-blue-400 hover:text-blue-300 font-medium text-sm"
                >
                  ✉️ support@servicehub.com
                </a>
                <Link
                  to="/contact"
                  className="text-blue-400 hover:text-blue-300 font-medium text-sm"
                >
                  📋 Contact Form
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 sm:mt-16 text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">
            Ready to Get Started?
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/request"
              className="bg-linear-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow hover:shadow-lg"
            >
              Request a Service Now
            </Link>
            <Link
              to="/services"
              className="bg-gray-800 text-white px-8 py-3 rounded-xl font-semibold hover:bg-gray-700 transition-all duration-300 border border-gray-700"
            >
              Browse All Services
            </Link>
          </div>
        </div>
      </div>

      {/* Add animation styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}