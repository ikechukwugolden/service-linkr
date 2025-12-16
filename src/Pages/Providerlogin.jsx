import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth }from "../../Firebase.config";
import { useNavigate } from "react-router-dom";

export default function ProviderLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            navigate("/provider/dashboard"); // Redirect to dashboard on success
        } catch (err) {
            setError(err.message);
        }
        setLoading(false);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <form
                onSubmit={handleLogin}
                className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
            >
                <h2 className="text-2xl font-bold mb-2 text-center">Business Login</h2>
                <p className="text-gray-500 text-center mb-6">
                    Access your leads and customers
                </p>

                {error && (
                    <div className="bg-red-100 text-red-600 p-3 rounded mb-4 text-sm">
                        {error}
                    </div>
                )}

                <input
                    type="email"
                    placeholder="Business Email"
                    className="w-full border p-3 rounded mb-4"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="w-full border p-3 rounded mb-6"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <button
                    className="w-full bg-blue-600 text-white py-3 rounded font-medium"
                    disabled={loading}
                >
                    {loading ? "Signing in..." : "Sign In"}
                </button>

                <p className="text-sm text-center text-gray-500 mt-6">
                    Already an account?{" "}
                    <span className="text-blue-600 cursor-pointer">Sign up</span>
                </p>
            </form>
        </div>
    );
}
