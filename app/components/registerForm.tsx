"use client";
import Link from "next/link";
import { useState } from "react";

function RegisterForm() {
  const [errorMessage, setErrorMessage] = useState("");

  function handleClick() {
    // Clear error
    //TODO: error handling OR register code and redirect
  }

  return (
    <div className="bg-white pt-10 pb-4 px-12 rounded-sm shadow-2xl">
      <div className="flex justify-center font-bold pb-8">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-gray-800 w-16 h-16">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
        </svg>
      </div>

      <div className="flex justify-center">
        <div className="w-4/5 border-t-2 border-gray-300 pb-8"></div>
      </div>

      <form className="flex flex-col">

        <div className="text-gray-600  flex flex-row py-2 mb-4 text-center border-2 rounded-md bg-gray-50 border-gray-300 drop-shadow-sm active:border-gray-300 active:placeholder-opacity-0">
          <div className="px-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <input
            className="bg-gray-50 w-full !outline-none pr-2"
            type="text"
            name=""
            id=""
            placeholder="Username"
          />
        </div>

        <div className="text-gray-600 flex flex-row py-2 mb-4 text-center border-2 rounded-md bg-gray-50 border-gray-300 drop-shadow-sm active:border-gray-300 active:placeholder-opacity-0">
          <div className="px-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
            </svg>
          </div>
          <input
            className="bg-gray-50 w-full !outline-none pr-2"
            type="password"
            name=""
            id=""
            placeholder="Password"
          />
        </div>

        <div className="text-gray-600  flex flex-row py-2 mb-4 text-center border-2 rounded-md bg-gray-50 border-gray-300 drop-shadow-sm active:border-gray-300 active:placeholder-opacity-0">
          <div className="px-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
            </svg>
          </div>
          <input
            className="bg-gray-50 w-full !outline-none pr-2"
            type="password"
            name=""
            id=""
            placeholder="Confirm Password"
          />
        </div>

        {/* {errorMessage && <p className=""text-center text-red-500"">{errorMessage}</p>} */}
        <p className="text-center text-red-500">errorMessage</p>
        <button className="text-white font-bold mb-10 bg-accent hover:bg-sky-600 py-2 mt-4 border-2 rounded-md border-gray-300" onClick={handleClick}>
          Register
        </button>
      </form>

      <span className="flex flex-row justify-center">
        <p>Already have an account?</p>&nbsp;
        <Link href="/login" className="underline text-accent hover:text-sky-600">Sign In</Link>
      </span>
    </div>
  );
}

export default RegisterForm;
