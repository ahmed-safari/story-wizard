"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import StoryCard from "./components/StoryCard";

export default function Home() {
  const [username, setUsername] = useState("");
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const username = "710x";
    // console.log(username);
    const response = await fetch(`api/get-stories/${username}`);
    const data = await response.json();
    if (response.status != 200) {
      console.log("Error:", data.message);
      setError(data.message);
    } else {
      // console.log(data);
      // console.log(data.stories);
      setError(null);
      setStories(data.stories);
      console.log(stories);
    }

    // setStories(data);
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center  min-h-screen p-4">
      <Image src="/wizard.png" width={130} height={130} alt="wizard" />
      <h1 className="text-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-500 m-6">
        The Story Wizard
      </h1>

      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">
            Enter the Instagram username
          </h5>
          <div>
            <input
              type="text"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Username or URL"
              required
            />
          </div>
          {error && (
            <div
              className="flex p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800"
              role="alert"
            >
              <svg
                aria-hidden="true"
                className="flex-shrink-0 inline w-5 h-5 mr-3"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Info</span>
              <div>
                <span className="font-bold">Error:</span> {error}
              </div>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full text-white bg-gradient-to-r from-red-600 to-purple-600 hover:from-red-700 hover:to-purple-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-white"
          >
            {loading ? "Fetching.. " : "Fetch Story/Stories"}
          </button>
          <p>
            Made with {"<3"} By{" "}
            <Link href="https://instagram.com/710x">
              <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-red-500 to-purple-500">
                Ahmed
              </span>
            </Link>
          </p>
        </form>
      </div>
      {loading && (
        <div
          role="status"
          className="w-full max-w-sm p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700 mt-8"
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
              <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
          </div>
          <div className="flex items-center justify-between pt-4">
            <div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
              <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
          </div>
          <div className="flex items-center justify-between pt-4">
            <div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
              <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
          </div>
          <div className="flex items-center justify-between pt-4">
            <div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
              <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
          </div>
          <div className="flex items-center justify-between pt-4">
            <div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
              <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
          </div>
          <span className="sr-only">Loading...</span>
        </div>
      )}
      {stories.length > 0 && (
        <ul className="w-full max-w-sm  divide-y divide-gray-200 dark:divide-gray-700 px-4 py-2 mt-8">
          {/* <StoryCard story={stories[0]} /> */}
          {stories.map((story, index) => {
            return <StoryCard story={story} key={index} />;
          })}
        </ul>
      )}
    </div>
  );
}
