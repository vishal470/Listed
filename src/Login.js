import React from 'react';
import './Login.css';



function Login() {
    return (
        <div className="flex flex-col md:flex-row h-screen">
            <div className="w-5/12 bg-black h-screen md:block hidden">
                <div className="flex justify-center items-center h-full">
                    <h1 className="text-white text-5xl">Board.</h1>
                </div>
            </div>
            <div className=" grid items-center my-auto mx-auto justify-center w-7/12  ">
                <h1 className="signin  text-3xl font-bold flex-row text-gray-900 dark:text-black text-left ">
                    Sign In
                </h1>
                <h1 className=" sitya  text-gray-900 dark:text-black text-2sm ">
                    Sign in to your account
                </h1>
                <div className="flex justify-center items-center w-96 ">
                    <div className="flex justify-center items-center max-w-xs mx-auto bg-white-1000 border border-white-100 rounded-lg shadow md:p-2 dark:bg-white-400 dark:border-white-800 hover:bg-slate-200">
                        <button

                            className="flex items-center justify-center p-2 "
                        >
                            <div className="flex items-center justify-center w-4 h-2 mr-5 rounded-full">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                                    alt=""
                                />
                            </div>
                            <h1 className="text-gray-900 dark:text-black text-sm btnsin">
                                Sign in with Google
                            </h1>
                        </button>
                    </div>

                    <div className="flex justify-center items-center max-w-xs mx-auto bg-white-1000 border border-white-100 rounded-lg shadow md:p-2 dark:bg-white-400 dark:border-white-800 m-4 hover:bg-slate-200">
                        <button

                            className="flex justify-center items-center p-2  "
                        >
                            <div className="flex items-center justify-center w-4 h-3 mr-5 rounded-full">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png"
                                    alt=""
                                />
                            </div>
                            <h1 className="text-gray-900 dark:text-black text-sm btnsin">
                                Sign in with Apple
                            </h1>
                        </button>
                    </div>
                </div>

                <div className="flex justify-center items-center w-full max-w-sm p-4 bg-white-1000 border border-white-100 rounded-lg shadow sm:p-6 md:p-8 dark:bg-white-400 dark:border-white-800">
                    <form className="space-y-2  " action="#">
                        <div>
                            <label
                                htmlFor="email"
                                className=" ep block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                            >
                                Email address
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="bg-gray-50 text-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-500 dark:placeholder-gray-400 dark:text-black"
                                placeholder="name@company.com"
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="password"
                                className=" ep block mb-2 text-sm font-medium text-gray-100 dark:text-black"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="••••••••"
                                className="bg-gray-50 border  text-black-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200  dark:placeholder-gray-400 "
                                required
                            />
                        </div>
                        <a
                            href="#"
                            className=" fp ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
                        >
                            Forgot password?
                        </a>
                        <button
                            type="submit"
                            className="w-full text-white bg-black hover:bg-black-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-black-600 dark:hover:bg-black-700 dark:focus:ring-black-800"
                        >
                            Sign In
                        </button>
                        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                            Don't have an account?{" "}
                            <a
                                href="#"
                                className="text-blue-700 hover:underline dark:text-blue-500"
                            >
                                Register here
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
