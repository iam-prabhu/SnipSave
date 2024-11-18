import React from "react";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const RightDiv = ({ snippets, handleViewSnippet, handleLikeSnippet }) => {
  return (
    <div className="bg-gray-800 rounded-2xl p-4 w-full flex flex-col space-y-3 overflow-hidden">
      <div className="flex flex-col space-y-4 pr-2 py-2 overflow-y-auto h-[100] custom-scrollbar">
        {snippets.map((snippet, index) => (
          <div key={index} className="border-2 border-gray-700 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <div>
                <p className="font-semibold text-white mb-4">{snippet.name}</p>
                <p className="text-sm text-white mb-2">By {snippet.author}</p>
                <p className="text-sm text-white mb-2">
                  Published On {snippet.date}
                </p>
                <div>
                  <div className="bg-slate-700 mt-4 mr-5 text-white rounded-lg px-2 py-1 inline-block">
                    {snippet.language}
                  </div>
                  <button
                    onClick={() => handleViewSnippet(index)}
                    className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-500"
                  >
                    View
                  </button>
                </div>
              </div>
              <div>
                <IconButton onClick={() => handleLikeSnippet(index)}>
                  {snippet.likes > 0 ? (
                    <FavoriteIcon fontSize="medium" className="text-blue-500" />
                  ) : (
                    <FavoriteBorderIcon
                      fontSize="medium"
                      className="text-gray-100"
                    />
                  )}
                </IconButton>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RightDiv;
