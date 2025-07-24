import React from "react";
import { useNavigate } from "react-router-dom";

const NewsCard = ({ article }) => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/NewsPage",{state:{article}});
  }

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300"
    >
      <div className="h-48 w-full">
        <img
          src={
            article.urlToImage ||
            "https://via.placeholder.com/400x200?text=No+Image"
          }
          alt="news"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 bg-white">
        <p className="text-gray-800 font-semibold">{article.title}</p>
      </div>
    </div>
  );
};

export default NewsCard;
