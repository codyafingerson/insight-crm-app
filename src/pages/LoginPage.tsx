import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { loginUser, getLoggedInUser, resetState } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../assets/insight-logo.webp";

export default function LoginPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { user } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user]);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(!username || !password) {
      toast.error("Please provide both a username and password.");
      return;
    }

    dispatch(loginUser({ username, password }))
      .unwrap()
      .then(() => {
        dispatch(getLoggedInUser());
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  const handleCancel = () => {
    setUsername("");
    setPassword("");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200 dark:bg-gray-800">
      <div className="p-10 bg-white dark:bg-gray-900 rounded-md shadow-xl w-96">
        <img
          src={logo}
          alt="logo"
          className="mx-auto mb-2"
          style={{ width: "175px" }}
        />
        <h2 className="text-center text-3xl text-slate-800 dark:text-white">
          Insight CRM
        </h2>
        <p className="text-center text-sm text-gray-600 dark:text-gray-400">
          Please sign-in to continue
        </p>
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div>
            <label htmlFor="username" className="sr-only">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              value={username}
              className="rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 dark:text-slate-700 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm dark:placeholder-gray-400"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={password}
              className="rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 dark:text-slate-700 focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm dark:placeholder-gray-400"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex justify-center space-x-4">
            <button
              type="submit"
              className="text-white bg-gradient-to-br from-orange-400 to-red-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-orange-200 dark:focus:ring-orange-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Sign in
            </button>
            <button
              type="button"
              className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-gray-500 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}