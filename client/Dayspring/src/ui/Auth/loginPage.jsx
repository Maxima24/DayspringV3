import React from "react";
import {
  Form,
    useNavigate,
  redirect,
} from "react-router-dom";
import { LoginUser } from "../../services/apiAuth";
import { loginUser } from "../../feautures/userSlice";
import store from "../../store";

// 🚀 This function is used as the route's `action` handler
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log("Login Data:", data);

  
    // const user = await LoginUser(data);

    store.dispatch(data);

    const state = store.getState();
    const username = state.user.username;
    const role = data.role;

    // localStorage.setItem("token", user?.token);

    console.log("Redirecting to:", `/home/${role}/${username}`);
    return redirect(`/home/${role}/${username}`);
 
};

const LoginForm = () => {
  
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-white px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold text-center text-blue-600 mb-6">
          Log in to your account
        </h2>

        <Form method="POST" className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              name="email"
              type="email"
              required
              placeholder="johndoe@gmail.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              name="password"
              type="password"
              required
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

         

          <div className="flex justify-between gap-4">
            <button
              type="submit"
              className="w-1/2 py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white font-medium flex-1"
            >
              Log In
            </button>
          </div>
        </Form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            Don't have an account?{" "}
            <span
              onClick={() => navigate("/newuser/signup")}
              className="text-blue-600 hover:underline cursor-pointer"
            >
              Sign Up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
