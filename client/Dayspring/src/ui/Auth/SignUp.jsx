import React from "react";
import { Form, useNavigate } from "react-router-dom";
import { redirect } from "react-router-dom";
import store from "../../store";
import { signUp } from "../../feautures/userSlice";
import { CreateUser } from "../../services/apiAuth";
// import { hover } from "motion";

const SignUpForm = () => {
  
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-white px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold text-center text-blue-600 mb-6">Create your account</h2>

        <Form method="post" className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
            <input
              type="text"
              name="username"
              required
              placeholder="username"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="johndoe@gmail.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              name="password"
              required
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
            <select
              name="role"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select a role</option>
              <option value="GUEST">Guest</option>
              <option value="USER">User</option>
              <option value="ADMIN">Admin</option>
            </select>
          </div>

          { (
            <p className="text-sm text-red-500"></p>
          )}

          <div className="flex justify-between gap-4 ">
           
            <button 
              type="submit"
              className="w-1/2 py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white font-medium flex-1"
            >
              Sign Up
            </button>
          </div>
        </Form>

        <p className="mt-6 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/newuser/login")}
            className="text-blue-600 hover:underline cursor-pointer"
          >
            Log In
          </span>
        </p>
      </div>
    </div>
  );
};

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  console.log("Form Data:", data);
    const user = await CreateUser(data)
  // Optionally call an API
  console.log(user)
  // const newUser = await CreateUser(data);

  // Dispatch to Redux
  store.dispatch(signUp(user));
  const state = store.getState()
  const username = state.user?.data?.username
  console.log(username)

  localStorage.setItem("token",user?.token)
  const roles = user.data.role
  
 
  // Redirect or return something
  return redirect(`/home/${roles}/${username}`); // change as needed}
}
export default SignUpForm;
