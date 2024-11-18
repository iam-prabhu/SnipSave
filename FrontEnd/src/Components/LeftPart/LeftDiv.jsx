import React, { useState } from "react";

const LeftDiv = ({
  snippets,
  sortOrder,
  sortSnippets,
  languages,
  handleCheckboxToggle,
  author,
  handleSortByTime,
  handleSortByLiked,
  handleMySnippetsClick,
  handleFavouritesClick,
}) => {
  const [activeButton, setActiveButton] = useState("");

  const handleSnippetsClick = () => {
    if (activeButton === "snippets") {
      setActiveButton("");
    } else {
      setActiveButton("snippets");
      handleMySnippetsClick();
    }
  };

  const handleFavClick = () => {
    if (activeButton === "favourites") {
      setActiveButton("");
    } else {
      setActiveButton("favourites");
      handleFavouritesClick();
    }
  };

  return (
    <div className="bg-gray-800 rounded-2xl text-white p-4 w-[300px]">
      {/* 1. My Name */}
      <div className="mb-3">
        <p className="font-bold">UserName: {author}</p>
        <div className="w-full bg-gray-500 h-[1px] mt-4 mb-4"></div>
      </div>

      <div className="mb-3">
        <button
          onClick={handleSnippetsClick}
          className={`mb-2 w-full text-left transition duration-300 pl-2 ${
            activeButton === "snippets"
              ? "border-l-4  border-blue-400"
              : "hover:border-l-4 hover:border-blue-400"
          }`}
        >
          My Snippets
        </button>
        <button
          onClick={handleFavClick}
          className={`w-full text-left transition duration-300 pl-2 ${
            activeButton === "favourites"
              ? "border-l-4 border-blue-400"
              : "hover:border-l-4 hover:border-blue-400"
          }`}
        >
          Favourites
        </button>
      </div>

      <div className="w-full bg-gray-500 h-[0.5px] mt-4 mb-4"></div>

      {/* Coding Languages with checkboxes */}
      <div className="mb-4">
        <h2 className="text-lg mb-4">Languages</h2>
        <ul>
          {languages.map((language, index) => (
            <li key={language.name} className="flex items-center mb-2">
              <input
                type="checkbox"
                className="mr-2"
                checked={language.checked}
                onChange={() => handleCheckboxToggle(index)}
              />
              <span className="text-sm">{language.name}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Snippets sorting */}
      <div className="w-full bg-gray-500 h-[1px] mt-4 mb-4"></div>
      <div className="mb-4">
        <h2 className="text-lg mb-2">Sort By</h2>

        <div className="space-y-4">
          {/* Sort by Time */}
          <div>
            <h3 className="text-md mb-2">Sort By Time</h3>
            <div className="flex items-center">
              <input
                type="radio"
                name="sortTime"
                id="newest"
                className="mr-2"
                onChange={() => handleSortByTime("newest")}
                checked={sortOrder === "newest"}
              />
              <label htmlFor="newest" className="text-sm mb-2">
                Newest
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                name="sortTime"
                id="oldest"
                className="mr-2"
                onChange={() => handleSortByTime("oldest")}
                checked={sortOrder === "oldest"}
              />
              <label htmlFor="oldest" className="text-sm">
                Oldest
              </label>
            </div>
          </div>

          {/* Sort by Liked */}
          <div>
            <h3 className="text-md mb-2">Sort By Category</h3>
            <div className="flex items-center">
              <input
                type="radio"
                name="sortCriteria"
                id="mostliked"
                className="mr-2 mb-2"
                onChange={() => handleSortByLiked("mostliked")}
                checked={sortOrder === "mostliked"}
              />
              <label htmlFor="mostliked" className="text-sm mb-2">
                Most Liked
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                name="sortCriteria"
                id="leastliked"
                className="mr-2"
                onChange={() => handleSortByLiked("leastliked")}
                checked={sortOrder === "leastliked"}
              />
              <label htmlFor="leastliked" className="text-sm">
                Least Liked
              </label>
            </div>
            <div className="w-full bg-gray-500 h-[1px] mt-6 mb-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftDiv;
