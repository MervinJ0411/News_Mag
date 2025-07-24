# 📰 React News App

This is a responsive News Application built with **React** that fetches and displays the latest news articles. It features:

- Responsive grid layout with Tailwind CSS
- Individual news article page with image, author, date, content, and description
- Clickable cards to navigate to detailed views

## 🚀 Features

- Fetches news from an external API (like NewsAPI or custom backend)
- Display articles in a 4-column layout (responsive)
- NewsCard component with image + content section
- Clean, modern UI with Tailwind CSS
- Error handling for missing data

## 🖼️ Screenshots

![News List Page](screenshots/news-grid.png)
![News Detail Page](screenshots/news-detail.png)

> 📌 Add your own screenshots in a `/screenshots` folder to help visualize your app.

## 🛠️ Tech Stack

- **React.js** – Frontend UI
- **Tailwind CSS** – Styling
- **Axios / Fetch** – API Requests
- **React Router DOM** – Page navigation
- **Optional**: Express.js + MongoDB for custom backend



## 📦 Installation

git clone https://github.com/your-username/news-app.git
cd news-app
npm install

 Running the App

 npm run dev   

 API Setup

 {
  "author": "Author Name",
  "title": "News Title",
  "description": "Short summary...",
  "content": "Full content...",
  "publishedAt": "2025-07-23T01:00:00Z",
  "urlToImage": "https://image-url.jpg",
  "source": {
    "name": "News Source"
  }
}
  
