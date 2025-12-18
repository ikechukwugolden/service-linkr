import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  Building2,
  Briefcase,
  Shield,
  Users,
  BarChart,
  CheckCircle,
} from "lucide-react";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../Firebase.config";
import { setDoc, doc, serverTimestamp } from "firebase/firestore";
import { db } from "../../Firebase.config";
import { useNavigate } from "react-router-dom";

export default function ProviderLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [occupation, setOccupation] = useState("");
  const [experience, setExperience] = useState("");
  const [contact, setContact] = useState("");
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const occupations = [
    "Real Estate Agent",
    "Financial Advisor",
    "Insurance Broker",
    "Marketing Consultant",
    "Business Coach",
    "Lawyer",
    "Accountant",
    "Healthcare Provider",
    "Technology Consultant",
    "Other Professional Service",
  ];

  const features = [
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Enterprise Security",
      description: "Bank-level encryption for your data",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Client Management",
      description: "Organize and grow your client base",
    },
    {
      icon: <BarChart className="w-5 h-5" />,
      title: "Advanced Analytics",
      description: "Track performance with detailed insights",
    },
  ];

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);

    async function registerProfessional() {
      try {
        // Create user with email and password
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;
        console.log("Professional registered:", user);
      } catch (error) {
        console.error("Error registering professional:", error);
      }
    }
    

    async function saveProfessionalData() {
      try {
        await addDoc(collection(db, "professionals"), {
          username,
          email,
          password,
          occupation,
          location,
          experience,
          contact,
        });
      } catch (error) {
        console.error("Error saving professional data:", error);
      } finally {
        navigate("/provider/Dashboard");
      }
    }

    registerProfessional();
    saveProfessionalData();
    setLoading(false);
  };

  const signInWithGoogle = async () => {
    // setError(null);
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Google sign-in user:", user.uid);
      navigate("/provider/dashboard");

      // Create/merge professional document
      await setDoc(doc(db, "professionals", user.uid), {
        uid: user.uid,
        username: user.displayName || username || "",
        email: user.email || "",
        contact: user.phoneNumber || contact || "",
        location: location || "",
        occupation: occupation || "",
        createdAt: serverTimestamp(),
      }, { merge: true });

    } catch (err) {
      console.error("Google sign-in error:", err);
      // setError(err?.message || "Google sign-in failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-[#212b3a] flex items-center justify-center p-4 lg:p-8">
      {/* Decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-linear-to-r from-transparent via-blue-500/5 to-transparent"></div>
      </div>

      {/* Main Container - Two Columns */}
      <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-8 relative z-10">
        {/* Left Column - Features/Benefits */}
        <div className="lg:w-1/2 flex flex-col justify-center">
          {/* Logo/Brand Section */}
          <div className="mb-8 lg:mb-12">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-linear-to-br from-blue-500 to-indigo-600 rounded-xl mb-4 shadow-lg">
              <Building2 className="w-7 h-7 text-white" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-3">
              Elevate Your <span className="text-blue-400">Professional</span>{" "}
              Practice
            </h1>
            <p className="text-gray-300 text-lg">
              Join thousands of professionals managing their business
              efficiently
            </p>
          </div>

          {/* Features List */}
          <div className="space-y-6 mb-8 lg:mb-12">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gray-800/50 rounded-lg flex items-center justify-center">
                  <div className="text-blue-400">{feature.icon}</div>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonials/Stats */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-linear-to-br from-blue-400 to-indigo-500 border-2 border-gray-900"
                  ></div>
                ))}
              </div>
              <div>
                <p className="text-white font-semibold">
                  Join 5,000+ Professionals
                </p>
                <p className="text-gray-400 text-sm">
                  Trusted by industry leaders
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-gray-800/30 rounded-lg">
                <p className="text-2xl font-bold text-white">99.9%</p>
                <p className="text-gray-400 text-xs">Uptime</p>
              </div>
              <div className="text-center p-3 bg-gray-800/30 rounded-lg">
                <p className="text-2xl font-bold text-white">24/7</p>
                <p className="text-gray-400 text-xs">Support</p>
              </div>
            </div>
          </div>

          {/* Already have account link for mobile */}
          <div className="mt-8 lg:hidden">
            <p className="text-center text-gray-400">
              Already have an account?{" "}
              <Link
                to="/provider/signin"
                className="text-blue-400 hover:text-blue-300 font-semibold hover:underline"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="lg:w-1/2">
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-gray-800">
            <div className="p-6 lg:p-8">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-white">
                  Create Your Account
                </h2>
                <p className="text-gray-400 text-sm mt-1">
                  Complete your professional profile in minutes
                </p>
              </div>

              {/* simplified form: errors and backend removed - submit logs data to console */}

              <form onSubmit={handleLogin} className="space-y-5">
                {/* Two-column fields for Occupation and Experience */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Occupation Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4" />
                        Occupation
                      </div>
                    </label>
                    <div className="relative">
                      <select
                        value={occupation}
                        onChange={(e) => setOccupation(e.target.value)}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 outline-none appearance-none"
                        required
                        disabled={loading}
                      >
                        <option value="" className="text-gray-500">
                          Select business
                        </option>
                        {occupations.map((occ) => (
                          <option key={occ} value={occ} className="bg-gray-800">
                            {occ}
                          </option>
                        ))}
                      </select>
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <svg
                          className="w-5 h-5 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Username Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        Username
                      </div>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Your display name"
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 outline-none"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        disabled={loading}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        Location
                      </div>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="City, State"
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 outline-none"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        required
                        disabled={loading}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        Experience
                      </div>
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        placeholder="Years of experience"
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 outline-none"
                        value={experience}
                        onChange={(e) => setExperience(e.target.value)}
                        required
                        disabled={loading}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        Contact
                      </div>
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        placeholder="Your contact"
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 outline-none"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                        required
                        disabled={loading}
                      />
                    </div>
                  </div>
                </div>

                {/* Email and Password in a column */}
                <div className="space-y-5">
                  {/* Email Input */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Business Email
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-500" />
                      </div>
                      <input
                        type="email"
                        placeholder="you@business.com"
                        className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 outline-none placeholder-gray-500"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        disabled={loading}
                      />
                    </div>
                  </div>

                  {/* Password Input */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="block text-sm font-medium text-gray-300">
                        Password
                      </label>
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="text-sm text-blue-400 hover:text-blue-300 font-medium"
                      >
                        {showPassword ? "Hide" : "Show"}
                      </button>
                    </div>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-gray-500" />
                      </div>
                      <input 
                      value={password}
                        type={showPassword ? "text" : "password"}
                        placeholder="Create a secure password"
                        className="w-full pl-10 pr-12 py-3 bg-gray-800 border border-gray-700 text-white rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 outline-none placeholder-gray-500"
                        
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        disabled={loading}
                        minLength={6}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      >
                        {showPassword ? (
                          <EyeOff className="h-5 w-5 text-gray-400" />
                        ) : (
                          <Eye className="h-5 w-5 text-gray-400" />
                        )}
                      </button>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      Must be at least 6 characters long
                    </p>
                  </div>
                </div>

                {/* Terms removed for local-only demo form */}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3.5 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2`}
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Creating Account...
                    </>
                  ) : (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Create Professional Account
                    </>
                  )}
                </button>

                {/* no additional warnings - this demo logs data to console */}
              </form>

              {/* Divider */}
              <div className="my-6 flex items-center">
                <div className="flex-grow border-t border-gray-700"></div>
                <span className="mx-4 text-sm text-gray-500">
                  or continue with
                </span>
                <div className="flex-grow border-t border-gray-700"></div>
              </div>

              {/* Google Sign In */}
              <button
                type="button" onClick={signInWithGoogle}
                className="w-full py-3 px-4 bg-gray-800 border border-gray-700 rounded-xl hover:bg-gray-700/50 transition-colors duration-200 flex items-center justify-center gap-3"
                disabled={loading}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                <span  className="text-gray-300 font-medium">
                  Sign up with Google
                </span>
              </button>

              {/* Sign In Link for desktop */}
              <p className="text-center text-gray-400 mt-6 hidden lg:block">
                Already have a professional account?{" "}
                <Link
                  to="/login"
                  className="text-blue-400 hover:text-blue-300 font-semibold hover:underline"
                >
                  Sign in to your dashboard
                </Link>
              </p>
            </div>

            {/* Footer */}
            <div className="bg-gray-800/50 px-6 py-4 border-t border-gray-800">
              <p className="text-xs text-gray-500 text-center">
                Secured with 256-bit encryption • GDPR compliant • SOC2
                certified
              </p>
            </div>
          </div>

          {/* Back to Home */}
          <div className="text-center mt-6">
            <Link
              to="/"
              className="inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
