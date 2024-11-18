import React, { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css"; // Theme import

// Language imports
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-python";
import "prismjs/components/prism-java";
import "prismjs/components/prism-ruby";
import "prismjs/components/prism-go";
import "prismjs/components/prism-rust";
import "prismjs/components/prism-c";
import "prismjs/components/prism-cpp";
import "prismjs/components/prism-csharp";
import "prismjs/components/prism-php";
import "prismjs/components/prism-css";
import "prismjs/components/prism-sql";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-ruby";
import "prismjs/components/prism-kotlin";
import "prismjs/components/prism-swift";
import "prismjs/components/prism-dart";
import "prismjs/components/prism-perl";
import "prismjs/components/prism-markdown";
import "prismjs/components/prism-sass";
import "prismjs/components/prism-scala";
import "prismjs/components/prism-lua";
import "prismjs/components/prism-matlab";
import "prismjs/components/prism-sql";
import "prismjs/components/prism-yaml";
import "prismjs/components/prism-toml";
import "prismjs/components/prism-docker";

const ViewSnippet = ({ snippet, onEditClick, onBack, currentUser }) => {
  useEffect(() => {
    Prism.highlightAll(); // Initialize Prism.js highlighting
  }, [snippet.code]); // Re-run whenever the code snippet changes

  return (
    <div className="min-h-screen w-full rounded-2xl m-0 p-0 py-12 bg-gray-900 flex items-center justify-center">
      <div className="bg-gray-800 shadow-lg rounded-2xl p-8 w-full max-w-3xl">
        <h1 className="text-white text-4xl font-extrabold mb-8 mt-2 text-center">
          {snippet.name}
        </h1>
        <div className="mb-4">
          <p className="text-white text-lg">Author: {snippet.author}</p>
          <p className="text-white text-lg">Date: {snippet.date}</p>
          <p className="text-white text-lg">Language: {snippet.language}</p>

          {/* Apply syntax highlighting using Prism.js */}
          <pre
            className={`language-${snippet.language === "C++" ? "cpp" : snippet.language.toLowerCase()} rounded-xl`}
          >
            <code>{snippet.code}</code>
          </pre>
        </div>

        <div className="flex justify-center items-center">
          <button
            onClick={onBack}
            className="bg-gray-600 mx-3 rounded-full text-white py-2 px-4 shadow-md hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Back
          </button>
          {snippet.author === currentUser && (
            <button
              onClick={onEditClick}
              className="bg-blue-600 mx-3 rounded-full text-white py-2 px-4 shadow-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Edit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewSnippet;
