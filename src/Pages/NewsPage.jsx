import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import NewsCard from "../Components/NewsCard";
import { AppContext } from "../Context/AppContext";

const NewsPage = () => {
  const location = useLocation();

  const [newsData, setNewsData] = useState(location.state.article);

  const { article } = useContext(AppContext);

  useEffect(() => {
    setNewsData(location.state.article);
  }, [location]);

  console.log(newsData);

  if (!newsData) {
    return (
      <h1 className="text-center text-xl font-semibold mt-10">Loading...</h1>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      {/* Article Header */}
      <div className="flex flex-col md:flex-row gap-10">
        {/* Left: Image + author/date overlay */}
        <div className="relative w-full md:w-1/2 h-80 rounded-lg overflow-hidden shadow-lg">
          <img
            src={newsData.urlToImage}
            alt="news"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/60 to-transparent p-4 text-white">
            <h2 className="text-sm font-medium">
              {newsData.author || "Unknown Author"}
            </h2>
            <h3 className="text-xs mt-1">
              {new Date(newsData.publishedAt).toLocaleDateString()}
            </h3>
          </div>
        </div>

        {/* Right: Content */}
        <div className="w-full md:w-1/2 space-y-4">
          <h1 className="text-3xl font-extrabold text-gray-900">
            {newsData.source?.name}
          </h1>
          <p className="text-base text-gray-800 leading-relaxed">
            {newsData.content || "No content available."}
          </p>
          <p className="text-sm text-gray-600">
            {newsData.description || "No description provided."}
          </p>
        </div>
      </div>

      {/* Related News Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          More Headlines
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {article.map((article, index) => (
            <NewsCard article={article} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
