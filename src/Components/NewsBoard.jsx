import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import NewsCard from "./NewsCard";
import { AppContext } from "../Context/AppContext";

export const NewsBoard = () => {

  const {article} = useContext(AppContext); 

  return (
    <div>
      <div className="flex items-center justify-center h-24">
        <div className="text-2xl font-bold">
          Latest{" "}
          <span className="bg-red-600 text-white text-base font-semibold px-3 py-0.5 rounded-full">
            News
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 pb-8">
        {article.map((article, index) => (
          <NewsCard article={article} key={index} />
        ))}
      </div>
    </div>
  );
};

export default NewsBoard;
