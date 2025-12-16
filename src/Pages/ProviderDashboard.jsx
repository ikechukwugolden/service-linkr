import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth  } from "../../Firebase.config.js"; // FIXED
import { useNavigate } from "react-router-dom";

export default function ProviderDashboard() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/provider/login"); // redirect if not logged in
      }
      setLoading(false);
    });

    return () => unsub();
  }, [navigate]);

  if (loading) {
    return <p className="p-8 text-center">Loading...</p>;
  }

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Business Dashboard</h1>
      <p className="text-gray-600 mb-6">
        View service requests and manage your leads.
      </p>

      {/* Example: You can render service requests here later */}
      <div className="bg-white shadow rounded p-4">
        <p>No service requests yet.</p>
      </div>
    </div>
  );
}
