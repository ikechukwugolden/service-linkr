import { useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../../Firebase.config.js";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function RequestService() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    location: "",
    description: "",
    urgency: "normal",
    preferredDate: "",
    preferredTime: ""
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const services = [
    { value: "plumber", label: "Plumber", icon: "🚰" },
    { value: "electrician", label: "Electrician", icon: "⚡" },
    { value: "generator", label: "Generator Repair", icon: "🔌" },
    { value: "ac", label: "AC Repair", icon: "❄️" },
    { value: "cleaning", label: "Cleaning Service", icon: "✨" },
    { value: "carpentry", label: "Carpentry", icon: "🪚" },
    { value: "painting", label: "Painting", icon: "🎨" },
    { value: "pest", label: "Pest Control", icon: "🐜" },
    { value: "appliance", label: "Appliance Repair", icon: "🏠" },
    { value: "other", label: "Other Service", icon: "🔧" }
  ];

  const urgencyOptions = [
    { value: "low", label: "Low Priority", desc: "Within a week", color: "bg-blue-50 text-blue-800 border-blue-200" },
    { value: "normal", label: "Normal", desc: "Next 2-3 days", color: "bg-blue-100 text-blue-800 border-blue-300" },
    { value: "urgent", label: "Urgent", desc: "Within 24 hours", color: "bg-blue-200 text-blue-900 border-blue-400" },
    { value: "emergency", label: "Emergency", desc: "Immediate response", color: "bg-blue-600 text-white border-blue-700" }
  ];

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      await addDoc(collection(db, "requests"), {
        ...form,
        status: "new",
        createdAt: serverTimestamp(),
      });

      setSubmitted(true);
      setForm({
        name: "",
        phone: "",
        service: "",
        location: "",
        description: "",
        urgency: "normal",
        preferredDate: "",
        preferredTime: ""
      });

      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    } catch (err) {
      alert("Something went wrong. Please try again.");
      console.error("Error submitting request:", err);
    }

    setLoading(false);
  }

  return (
    <div className="relative min-h-screen" style={{ backgroundColor: '#212b3a' }}>
      {/* Success Message Overlay */}
      {submitted && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8 max-w-md mx-4 text-center shadow-2xl animate-fadeIn">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl text-white">✓</span>
            </div>
            <h3 className="text-2xl font-bold text-blue-400 mb-2">Request Submitted!</h3>
            <p className="text-gray-300 mb-6">
              We've received your service request. A professional will contact you within 30 minutes.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300"
            >
              Submit Another Request
            </button>
          </div>
        </div>
      )}

      <div className="relative px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 max-w-4xl mx-auto">
        {/* Back Button */}
        <div className="mb-6 sm:mb-8">
          <Link to="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium">
            <span className="mr-2">←</span>
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-block bg-blue-600 text-white text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4 shadow">
            Quick & Easy Booking
          </span>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
            Request a <span className="text-blue-400">Service</span>
          </h1>
          <p className="text-blue-300/80 text-sm sm:text-base max-w-2xl mx-auto">
            Fill out the form below and we'll connect you with the best local professionals within minutes.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-gray-800/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-lg border border-gray-700 p-6 sm:p-8 lg:p-10">
          <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
            {/* Personal Information */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-blue-400 mb-4 flex items-center">
                <span className="mr-2">👤</span>
                Your Information
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-medium text-blue-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    name="name"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400 transition-all duration-300"
                    onChange={handleChange}
                    value={form.name}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-blue-300 mb-2">
                    Phone Number *
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    placeholder="+1 (234) 567-8900"
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400 transition-all duration-300"
                    onChange={handleChange}
                    value={form.phone}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Service Selection */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-blue-400 mb-4 flex items-center">
                <span className="mr-2">🔧</span>
                Service Details
              </h3>
              <div className="mb-6">
                <label className="block text-sm font-medium text-blue-300 mb-3">
                  Select Service Type *
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                  {services.map((service) => (
                    <button
                      type="button"
                      key={service.value}
                      onClick={() => setForm({ ...form, service: service.value })}
                      className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all duration-300 ${
                        form.service === service.value
                          ? "border-blue-500 bg-blue-900/30 scale-105 text-blue-300"
                          : "border-gray-600 hover:border-blue-400 hover:bg-gray-700 text-gray-300 hover:text-blue-300"
                      }`}
                    >
                      <span className="text-2xl mb-2">{service.icon}</span>
                      <span className="text-xs font-medium text-center">
                        {service.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-blue-300 mb-2">
                  Location *
                </label>
                <input
                  name="location"
                  placeholder="Enter your full address"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400 transition-all duration-300"
                  onChange={handleChange}
                  value={form.location}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-blue-300 mb-3">
                  How urgent is this? *
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {urgencyOptions.map((option) => (
                    <button
                      type="button"
                      key={option.value}
                      onClick={() => setForm({ ...form, urgency: option.value })}
                      className={`p-4 rounded-xl border-2 transition-all duration-300 text-center ${option.color} ${
                        form.urgency === option.value
                          ? "border-blue-500 scale-105 shadow"
                          : "hover:border-blue-400"
                      }`}
                    >
                      <div className="font-semibold text-sm">{option.label}</div>
                      <div className="text-xs mt-1 opacity-75">{option.desc}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Scheduling */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-blue-400 mb-4 flex items-center">
                <span className="mr-2">📅</span>
                Preferred Schedule
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-medium text-blue-300 mb-2">
                    Preferred Date
                  </label>
                  <input
                    name="preferredDate"
                    type="date"
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white transition-all duration-300"
                    onChange={handleChange}
                    value={form.preferredDate}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-blue-300 mb-2">
                    Preferred Time
                  </label>
                  <select
                    name="preferredTime"
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white transition-all duration-300"
                    onChange={handleChange}
                    value={form.preferredTime}
                  >
                    <option value="" className="text-gray-400">Select a time slot</option>
                    <option value="morning" className="text-white">Morning (8 AM - 12 PM)</option>
                    <option value="afternoon" className="text-white">Afternoon (12 PM - 4 PM)</option>
                    <option value="evening" className="text-white">Evening (4 PM - 8 PM)</option>
                    <option value="anytime" className="text-white">Anytime</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Problem Description */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-blue-400 mb-4 flex items-center">
                <span className="mr-2">📝</span>
                Problem Description
              </h3>
              <div>
                <label className="block text-sm font-medium text-blue-300 mb-2">
                  Describe the issue in detail *
                </label>
                <textarea
                  name="description"
                  placeholder="Please describe the problem you're facing, any symptoms you've noticed, and what you've tried so far..."
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400 transition-all duration-300 resize-none h-32"
                  rows="4"
                  onChange={handleChange}
                  value={form.description}
                  required
                />
                <p className="text-xs text-blue-400/70 mt-2">
                  The more details you provide, the better we can help you.
                </p>
              </div>
            </div>

            {/* Terms & Submit */}
            <div className="pt-6 border-t border-gray-700">
              <div className="flex items-start mb-6">
                <input
                  type="checkbox"
                  id="terms"
                  required
                  className="mt-1 mr-3 accent-blue-600"
                />
                <label htmlFor="terms" className="text-sm text-blue-300/80">
                  I agree to the <span className="text-blue-400 font-medium">Terms of Service</span> and <span className="text-blue-400 font-medium">Privacy Policy</span>. I understand that submitting this request doesn't guarantee service availability.
                </label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-all duration-300 shadow hover:shadow-lg transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none"
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Processing Request...
                  </div>
                ) : (
                  "Submit Request"
                )}
              </button>

              <p className="text-center text-sm text-blue-400/70 mt-4">
                By submitting, you'll receive a confirmation call within 30 minutes.
              </p>
            </div>
          </form>
        </div>

        {/* Trust Indicators */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <div className="bg-gray-800/90 backdrop-blur-sm rounded-xl p-4 sm:p-6 text-center border border-gray-700">
            <div className="text-2xl mb-2 text-blue-400">⚡</div>
            <h4 className="font-semibold text-blue-300 mb-1">Quick Response</h4>
            <p className="text-sm text-blue-400/80">Get matched within 30 minutes</p>
          </div>
          <div className="bg-gray-800/90 backdrop-blur-sm rounded-xl p-4 sm:p-6 text-center border border-gray-700">
            <div className="text-2xl mb-2 text-blue-400">✅</div>
            <h4 className="font-semibold text-blue-300 mb-1">Verified Pros</h4>
            <p className="text-sm text-blue-400/80">All professionals background checked</p>
          </div>
          <div className="bg-gray-800/90 backdrop-blur-sm rounded-xl p-4 sm:p-6 text-center border border-gray-700">
            <div className="text-2xl mb-2 text-blue-400">💳</div>
            <h4 className="font-semibold text-blue-300 mb-1">Secure Payment</h4>
            <p className="text-sm text-blue-400/80">Pay only after service completion</p>
          </div>
        </div>

        {/* Support Info */}
        <div className="mt-8 sm:mt-12 text-center">
          <p className="text-blue-300/80 text-sm">
            Need immediate help? Call our emergency line:{" "}
            <a href="tel:+18005551234" className="text-blue-400 hover:text-blue-300 font-semibold">
              +1 (800) 555-1234
            </a>
          </p>
          <p className="text-blue-400/60 text-xs mt-2">
            Available 24/7 for emergency services
          </p>
        </div>
      </div>

      {/* Add animation styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}