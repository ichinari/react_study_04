import { useEffect, useState } from "react";
import { useAuth } from "./context/AuthContext";

function UseContext_1() {
  const [loginForm, setLoginForm] = useState({ username: "", email: "" });

  const { user, login, logout } = useAuth();

  const handleLogin = () => {
    try {
      login({ id: 1, username: loginForm.username, email: loginForm.email });
    } catch (error) {
      console.error(error);
    }
  };

  // NOTE: userの状態変化を監視してフォームをリセットする
  useEffect(() => {
    if (user) {
      setLoginForm({ username: "", email: "" });
    }
  }, [user]);

  const handleLogout = () => {
    logout();
  };
  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <div className="flex flex-col gap-2">
        <p className="text-lg font-bold">User: test</p>
        <p className="text-lg font-bold">Email: test@example.com</p>
      </div>
      {user ? (
        <div className="flex gap-2 items-center">
          <p className="text-lg font-bold mr-5">logged in</p>
          <button
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          <input
            type="text"
            placeholder="username"
            className="border border-gray-300 rounded-md p-2"
            value={loginForm.username}
            onChange={(e) => setLoginForm({ ...loginForm, username: e.target.value })}
          />
          <input
            type="email"
            placeholder="email"
            className="border border-gray-300 rounded-md p-2"
            value={loginForm.email}
            onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
          />
          <button
            type="button"
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
}

export default UseContext_1;
