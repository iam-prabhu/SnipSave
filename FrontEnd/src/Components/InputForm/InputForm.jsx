import { useState } from "react";
import axios from "axios";

const InputForm = () => {
  const [title, setTitle] = useState("");
  const [language, setLanguage] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const snipet = await axios.post(
        "http://localhost:5001/snippet",
        {
          title,
          language,
          content,
        },
        config
      );
      console.log("response", snipet.data);
    } catch (err) {
      console.log("error", err.message);
    }
  };

  return (
    <div className="min-h-screen w-full rounded-2xl m-0 p-0 bg-gray-900 flex items-center justify-center ">
      <div className="bg-gray-800 shadow-lg rounded-2xl p-8 w-full max-w-3xl">
        <h1 className="text-white text-4xl font-extrabold mb-8 mt-2 text-center">
          Your Snippet
        </h1>
        <form className="space-y-4">
          {/* Title Field */}
          <div>
            <label className="text-white block text-lg mb-2">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-3 rounded-lg border-2 border-gray-500 bg-gray-800 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter title"
            />
          </div>

          {/* Language Dropdown */}
          <div>
            <label className="text-white block text-lg mb-2">
              Select Language
            </label>
            <div>
              <input
                list="languages"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                placeholder="Choose or enter a language"
                className="w-full p-3 rounded-lg bg-gray-800 border-2 border-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <datalist id="languages">
                <option value="JavaScript" />
                <option value="Python" />
                <option value="Java" />
                <option value="C#" />
                <option value="Ruby" />
              </datalist>
            </div>
          </div>

          {/* Code TextArea */}
          <div>
            <label className="text-white block text-lg mb-2">Your Code</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full h-48 p-3  rounded-lg border-2 border-gray-500 bg-gray-800 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write your code here..."
            />
          </div>

          {/* Optional Submit and Edit Buttons */}
          <div className="flex justify-center items-center">
            <button className="bg-blue-600 mx-3 rounded-full text-white py-4 px-8  shadow-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Back
            </button>
            <button
              type="submit"
              onClick={handleSubmit}
              className="bg-blue-600 mx-3 rounded-full text-white py-4 px-8  shadow-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InputForm;
