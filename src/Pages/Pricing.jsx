// pages/Pricing.jsx
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState("monthly"); // "monthly" or "annual"

  const pricingPlans = [
    {
      name: "Basic",
      tagline: "For occasional home services",
      monthlyPrice: 0,
      annualPrice: 0,
      features: [
        "Browse service providers",
        "Basic customer support",
        "Standard booking system",
        "Service provider ratings",
        "Email notifications"
      ],
      excludedFeatures: [
        "Priority support",
        "Advanced booking features",
        "Service guarantee",
        "Premium matching"
      ],
      linear: "from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900",
      buttonStyle: "bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600",
      popular: false
    },
    {
      name: "Professional",
      tagline: "For regular home maintenance",
      monthlyPrice: 9.99,
      annualPrice: 99.99,
      features: [
        "Everything in Basic",
        "Priority customer support",
        "Advanced booking features",
        "Service guarantee (up to $500)",
        "Premium provider matching",
        "24/7 emergency line access",
        "Digital service history",
        "Discount on services (5%)"
      ],
      excludedFeatures: [],
      linear: "from-blue-500 to-purple-500",
      buttonStyle: "bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700",
      popular: true
    },
    {
      name: "Enterprise",
      tagline: "For property managers & businesses",
      monthlyPrice: 29.99,
      annualPrice: 299.99,
      features: [
        "Everything in Professional",
        "Dedicated account manager",
        "Multi-property management",
        "Bulk service discounts (10-20%)",
        "Custom reporting & analytics",
        "API access",
        "White-label solutions",
        "Priority emergency response",
        "Service guarantee (up to $2000)",
        "Training & onboarding"
      ],
      excludedFeatures: [],
      linear: "from-indigo-600 to-purple-700 dark:from-indigo-700 dark:to-purple-800",
      buttonStyle: "bg-linear-to-r from-indigo-600 to-purple-700 hover:from-indigo-700 hover:to-purple-800",
      popular: false
    }
  ];

  const servicePackages = [
    {
      name: "Single Service",
      description: "One-time service booking",
      price: "Varies by service",
      features: ["Pay per service", "No subscription", "Flexible scheduling", "Service guarantee"],
      linear: "from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20",
      icon: "🔧"
    },
    {
      name: "Maintenance Plan",
      description: "Regular home maintenance",
      price: "$49.99/month",
      features: ["Monthly check-ups", "Priority scheduling", "20% discount on repairs", "Annual safety inspection"],
      linear: "from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20",
      icon: "📅"
    },
    {
      name: "Emergency Package",
      description: "24/7 emergency coverage",
      price: "$19.99/month",
      features: ["24/7 emergency line", "60-minute response guarantee", "No extra emergency fees", "Priority dispatch"],
      linear: "from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20",
      icon: "🚨"
    }
  ];

  const calculateSavings = (monthly, annual) => {
    const yearlyFromMonthly = monthly * 12;
    const savings = yearlyFromMonthly - annual;
    const percentage = ((savings / yearlyFromMonthly) * 100).toFixed(0);
    return { savings, percentage };
  };

  return (
    <div className="relative min-h-screen">
      {/* Background linear Layers */}
      <div className="fixed inset-0 bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 -z-10" />
      <div className="fixed inset-0 bg-linear-to-tr from-transparent via-white/30 to-transparent dark:via-white/5 -z-10" />
      
      {/* Animated linear Orbs */}
      <div className="fixed top-1/4 left-1/4 w-64 h-64 sm:w-80 sm:h-80 bg-linear-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/5 dark:to-purple-500/5 rounded-full blur-3xl -z-5" />
      <div className="fixed bottom-1/4 right-1/4 w-64 h-64 sm:w-80 sm:h-80 bg-linear-to-r from-green-500/10 to-emerald-500/10 dark:from-green-500/5 dark:to-emerald-500/5 rounded-full blur-3xl -z-5" />

      <div className="relative px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 xl:py-20 max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 max-w-4xl mx-auto">
          <span className="inline-block bg-linear-to-r from-blue-500 to-purple-500 text-white text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4 shadow-lg">
            Simple, Transparent Pricing
          </span>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            Choose Your <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Perfect Plan</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto">
            Flexible plans for every need. Start with Basic for free or upgrade for premium features.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="bg-white/80 dark:bg-gray-800/80 p-1 rounded-xl shadow-inner border border-gray-200 dark:border-gray-700">
            <div className="flex">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-6 py-2 sm:px-8 sm:py-3 rounded-lg text-sm sm:text-base font-semibold transition-all duration-300 ${
                  billingCycle === "monthly"
                    ? "bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                    : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle("annual")}
                className={`px-6 py-2 sm:px-8 sm:py-3 rounded-lg text-sm sm:text-base font-semibold transition-all duration-300 relative ${
                  billingCycle === "annual"
                    ? "bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                    : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                Annual
                <span className="absolute -top-2 -right-2 bg-linear-to-r from-green-500 to-emerald-500 text-white text-xs px-2 py-1 rounded-full">
                  Save 20%
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Plans */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
          {pricingPlans.map((plan, index) => {
            const price = billingCycle === "monthly" ? plan.monthlyPrice : plan.annualPrice;
            const savings = calculateSavings(plan.monthlyPrice, plan.annualPrice);
            
            return (
              <div
                key={index}
                className={`relative rounded-2xl overflow-hidden border-2 ${
                  plan.popular
                    ? "border-blue-500 shadow-2xl transform lg:scale-105"
                    : "border-gray-200 dark:border-gray-700 shadow-lg"
                } bg-white dark:bg-gray-900 backdrop-blur-sm`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-linear-to-r from-blue-600 to-purple-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="p-6 sm:p-8">
                  {/* Plan Header */}
                  <div className="mb-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {plan.tagline}
                    </p>
                  </div>

                  {/* Price Display */}
                  <div className="mb-6">
                    <div className="flex items-baseline">
                      <span className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
                        ${price === 0 ? "0" : price.toFixed(2)}
                      </span>
                      <span className="text-gray-600 dark:text-gray-300 ml-2">
                        /{billingCycle === "monthly" ? "month" : "year"}
                      </span>
                    </div>
                    {billingCycle === "annual" && plan.monthlyPrice > 0 && (
                      <p className="text-green-600 dark:text-green-400 text-sm mt-1">
                        Save ${savings.savings.toFixed(2)} ({savings.percentage}%) annually
                      </p>
                    )}
                    {price === 0 && (
                      <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                        Free forever
                      </p>
                    )}
                  </div>

                  {/* CTA Button */}
                  <Link
                    to={price === 0 ? "/request" : "/request"}
                    className={`block w-full text-center text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 mb-6 ${plan.buttonStyle}`}
                  >
                    {price === 0 ? "Get Started Free" : "Choose Plan"}
                  </Link>

                  {/* Features List */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                      Included features:
                    </h4>
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span className="text-gray-600 dark:text-gray-300 text-sm">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {plan.excludedFeatures.length > 0 && (
                    <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                          Not included:
                        </h4>
                        {plan.excludedFeatures.map((feature, idx) => (
                          <div key={idx} className="flex items-start opacity-50">
                            <span className="text-gray-400 mr-2">✗</span>
                            <span className="text-gray-500 text-sm">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Service Packages */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
              Service <span className="bg-linear-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Packages</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
              Special packages for specific service needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {servicePackages.map((pkg, index) => (
              <div
                key={index}
                className={`bg-linear-to-br ${pkg.linear} rounded-2xl p-6 sm:p-8 border border-gray-200 dark:border-gray-700 backdrop-blur-sm`}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                    <span className="text-2xl">{pkg.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {pkg.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {pkg.description}
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {pkg.price}
                  </div>
                  <Link
                    to="/request"
                    className="block w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-center font-semibold py-2.5 px-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300"
                  >
                    Book Now
                  </Link>
                </div>

                <div className="space-y-2">
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <span className="text-blue-500 mr-2">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
              Frequently Asked <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
              Everything you need to know about our pricing
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {[
              {
                q: "Can I switch plans anytime?",
                a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately."
              },
              {
                q: "Is there a contract or cancellation fee?",
                a: "No contracts. Cancel anytime with no fees. We'll refund any unused portion of your subscription."
              },
              {
                q: "Do you offer discounts for annual billing?",
                a: "Yes! Annual billing saves you 20% compared to monthly payments."
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept all major credit cards, PayPal, Apple Pay, Google Pay, and bank transfers."
              },
              {
                q: "Can I get a custom plan for my business?",
                a: "Absolutely! Contact our sales team for custom enterprise solutions."
              },
              {
                q: "Is there a free trial for paid plans?",
                a: "Yes, all paid plans come with a 14-day free trial. No credit card required."
              }
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white/80 dark:bg-gray-800/80 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700 backdrop-blur-sm"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {faq.q}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-linear-to-r from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 sm:p-10 lg:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-300 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto mb-6 sm:mb-8">
            Join thousands of satisfied customers who trust ServiceHub for their home service needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/request"
              className="bg-linear-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start Free Trial
            </Link>
            <Link
              to="/request"
              className="bg-white/20 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300 border border-white/30"
            >
              Contact Sales
            </Link>
          </div>
          <p className="text-gray-400 text-xs sm:text-sm mt-4">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>

        {/* Price Comparison */}
        <div className="mt-12 sm:mt-16 text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Compare with Traditional Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { label: "Average hourly rate", traditional: "$85", servicehub: "$65", savings: "24%" },
              { label: "Emergency call fee", traditional: "$150", servicehub: "Free", savings: "100%" },
              { label: "Booking convenience", traditional: "2-3 days", servicehub: "Same day", savings: "Instant" }
            ].map((item, index) => (
              <div key={index} className="bg-white/80 dark:bg-gray-800/80 rounded-xl p-6 backdrop-blur-sm border border-gray-200 dark:border-gray-700">
                <div className="text-gray-600 dark:text-gray-300 text-sm mb-4">{item.label}</div>
                <div className="flex justify-between items-center mb-2">
                  <div className="text-left">
                    <div className="text-xs text-gray-500">Traditional</div>
                    <div className="text-lg font-semibold text-gray-700 dark:text-gray-300 line-through">{item.traditional}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-green-600 dark:text-green-400">Savings</div>
                    <div className="text-lg font-bold text-green-600 dark:text-green-400">{item.savings}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-500">ServiceHub</div>
                    <div className="text-lg font-bold text-blue-600 dark:text-blue-400">{item.servicehub}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}