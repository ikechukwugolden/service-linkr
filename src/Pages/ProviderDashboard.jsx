import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../Firebase.config.js";
import { useNavigate } from "react-router-dom";
import { 
  Bell, 
  Search, 
  Filter, 
  Calendar, 
  TrendingUp, 
  Users, 
  DollarSign, 
  MessageSquare,
  ChevronRight,
  LogOut,
  Settings,
  HelpCircle,
  Star,
  Clock,
  CheckCircle,
  XCircle,
  MoreVertical,
  Download,
  Eye,
  User,
  Building,
  Phone,
  Mail,
  MapPin
} from "lucide-react";

export default function ProviderDashboard() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/provider/login");
      } else {
        setUser(user);
      }
      setLoading(false);
    });

    return () => unsub();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/provider/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const stats = [
    {
      title: "Total Leads",
      value: "0",
      change: "",
      icon: <Users className="w-6 h-6 text-blue-400" />,
      color: "bg-blue-500/10",
      trend: ""
    }
  ];

  const recentLeads = [
    {
      id: 1,
      name: "Sample Lead",
      service: "General Inquiry",
      date: "Today",
      status: "new",
      budget: "--",
      avatarColor: "bg-blue-500"
    }
  ];

  const upcomingTasks = [
    { id: 1, title: "No tasks scheduled", time: "Today", priority: "low" }
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0f172a] flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f172a] text-gray-100">
      {/* Top Navigation */}
      <nav className="sticky top-0 z-50 bg-gray-900/90 backdrop-blur-lg border-b border-gray-800">
        <div className="px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div className="flex items-center gap-2">
              <Building className="w-6 h-6 text-blue-400" />
              <span className="text-xl font-bold">Business-account</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Search */}
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search leads, tasks..."
                className="pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-xl w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Notifications */}
            <button className="relative p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {/* User Menu */}
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className="font-medium">{user?.email || "Business Account"}</p>
                <p className="text-sm text-gray-400">Premium Member</p>
              </div>
              <div className="w-10 h-10 bg-linear-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center font-semibold">
                {user?.email?.charAt(0).toUpperCase() || "B"}
              </div>
              <button
                onClick={handleLogout}
                className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
                title="Logout"
              >
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`fixed inset-y-0 left-0 z-40 w-64 bg-gray-900 border-r border-gray-800 transform transition-transform duration-200 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static`}>
          <div className="h-full flex flex-col">
            {/* User Profile Card */}
            <div className="p-6 border-b border-gray-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Professional Account</h3>
                  <p className="text-sm text-gray-400">{user?.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Star className="w-4 h-4 text-amber-400 fill-current" />
                <span className="text-gray-300">Verified Provider</span>
                <span className="ml-auto bg-blue-500/20 text-blue-400 text-xs px-2 py-1 rounded-full">PRO</span>
              </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4">
              <ul className="space-y-1">
                {[
                  { icon: <TrendingUp className="w-5 h-5" />, label: "Overview", active: true },
                  { icon: <Users className="w-5 h-5" />, label: "Leads", count: 42 },
                  { icon: <MessageSquare className="w-5 h-5" />, label: "Messages", count: 8 },
                  { icon: <Calendar className="w-5 h-5" />, label: "Calendar" },
                  { icon: <DollarSign className="w-5 h-5" />, label: "Revenue" },
                  { icon: <Filter className="w-5 h-5" />, label: "Analytics" }
                ].map((item, index) => (
                  <li key={index}>
                    <button
                      onClick={() => setActiveTab(item.label.toLowerCase())}
                      className={`w-full flex items-center justify-between p-3 rounded-xl transition-colors ${activeTab === item.label.toLowerCase() ? 'bg-blue-500/20 text-blue-400' : 'hover:bg-gray-800'}`}
                    >
                      <div className="flex items-center gap-3">
                        {item.icon}
                        <span>{item.label}</span>
                      </div>
                      {item.count && (
                        <span className="bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded-full">
                          {item.count}
                        </span>
                      )}
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </li>
                ))}
              </ul>

              {/* Settings Section */}
              <div className="mt-8">
                <h4 className="text-xs uppercase text-gray-500 font-semibold tracking-wider mb-2 px-3">Settings</h4>
                <ul className="space-y-1">
                  {[
                    { icon: <Settings className="w-5 h-5" />, label: "Account Settings" },
                    { icon: <HelpCircle className="w-5 h-5" />, label: "Help & Support" }
                  ].map((item, index) => (
                    <li key={index}>
                      <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-gray-800 transition-colors">
                        {item.icon}
                        <span>{item.label}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Welcome Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold">Welcome back, {user?.email?.split('@')[0] || 'Professional'}!</h1>
            <p className="text-gray-400">Here's what's happening with your business today.</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl ${stat.color}`}>
                    {stat.icon}
                  </div>
                  <span className={`text-sm font-medium ${stat.trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
                    {stat.change}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-1">{stat.value}</h3>
                <p className="text-gray-400 text-sm">{stat.title}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Recent Leads */}
            <div className="lg:col-span-2 bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 overflow-hidden">
              <div className="p-6 border-b border-gray-800">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold">Recent Leads</h2>
                  <button className="text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center gap-1">
                    View all <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="divide-y divide-gray-800">
                {recentLeads.map((lead) => (
                  <div key={lead.id} className="p-6 hover:bg-gray-800/50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-full ${lead.avatarColor} flex items-center justify-center text-white font-semibold`}>
                          {lead.name.charAt(0)}
                        </div>
                        <div>
                          <h4 className="font-semibold">{lead.name}</h4>
                          <p className="text-sm text-gray-400">{lead.service}</p>
                          <div className="flex items-center gap-3 mt-1">
                            <span className="flex items-center gap-1 text-xs text-gray-500">
                              <DollarSign className="w-3 h-3" />
                              {lead.budget}
                            </span>
                            <span className="flex items-center gap-1 text-xs text-gray-500">
                              <Clock className="w-3 h-3" />
                              {lead.date}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          lead.status === 'new' ? 'bg-blue-500/20 text-blue-400' :
                          lead.status === 'contacted' ? 'bg-amber-500/20 text-amber-400' :
                          lead.status === 'in-progress' ? 'bg-purple-500/20 text-purple-400' :
                          'bg-green-500/20 text-green-400'
                        }`}>
                          {lead.status.charAt(0).toUpperCase() + lead.status.slice(1)}
                        </span>
                        <button className="p-2 hover:bg-gray-700 rounded-lg">
                          <MoreVertical className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Upcoming Tasks */}
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 overflow-hidden">
                <div className="p-6 border-b border-gray-800">
                  <h2 className="text-xl font-bold">Today's Tasks</h2>
                  <p className="text-sm text-gray-400">Your schedule for today</p>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {upcomingTasks.map((task) => (
                      <div key={task.id} className="flex items-center justify-between p-3 bg-gray-800/50 rounded-xl">
                        <div className="flex items-center gap-3">
                          <div className={`w-2 h-2 rounded-full ${
                            task.priority === 'high' ? 'bg-red-500' :
                            task.priority === 'medium' ? 'bg-amber-500' : 'bg-gray-500'
                          }`}></div>
                          <div>
                            <p className="font-medium">{task.title}</p>
                            <p className="text-sm text-gray-400">{task.time}</p>
                          </div>
                        </div>
                        <button className="p-1 hover:bg-gray-700 rounded-lg">
                          <CheckCircle className="w-5 h-5 text-gray-400" />
                        </button>
                      </div>
                    ))}
                  </div>
                  <button className="w-full mt-4 py-3 bg-gray-800 hover:bg-gray-700 rounded-xl text-center transition-colors">
                    + Add New Task
                  </button>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-linear-to-br from-blue-900/30 to-indigo-900/30 backdrop-blur-sm rounded-2xl border border-blue-800/30 p-6">
                <h3 className="text-lg font-bold mb-4">Quick Actions</h3>
                <div className="grid grid-cols-2 gap-3">
                  <button className="p-4 bg-blue-500/20 hover:bg-blue-500/30 rounded-xl flex flex-col items-center justify-center transition-colors">
                    <MessageSquare className="w-6 h-6 text-blue-400 mb-2" />
                    <span className="text-sm font-medium">New Message</span>
                  </button>
                  <button className="p-4 bg-purple-500/20 hover:bg-purple-500/30 rounded-xl flex flex-col items-center justify-center transition-colors">
                    <Users className="w-6 h-6 text-purple-400 mb-2" />
                    <span className="text-sm font-medium">Add Lead</span>
                  </button>
                  <button className="p-4 bg-green-500/20 hover:bg-green-500/30 rounded-xl flex flex-col items-center justify-center transition-colors">
                    <Calendar className="w-6 h-6 text-green-400 mb-2" />
                    <span className="text-sm font-medium">Schedule</span>
                  </button>
                  <button className="p-4 bg-amber-500/20 hover:bg-amber-500/30 rounded-xl flex flex-col items-center justify-center transition-colors">
                    <Download className="w-6 h-6 text-amber-400 mb-2" />
                    <span className="text-sm font-medium">Export</span>
                  </button>
                </div>
              </div>

              {/* Performance */}
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 p-6">
                <h3 className="text-lg font-bold mb-4">Performance</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Lead Conversion</span>
                      <span className="text-green-400">78%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '78%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Response Time</span>
                      <span className="text-blue-400">2.4h</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '65%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Client Satisfaction</span>
                      <span className="text-amber-400">4.8/5</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div className="bg-amber-500 h-2 rounded-full" style={{ width: '96%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Mobile overlay for sidebar */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
}