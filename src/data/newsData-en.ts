// Import each article from individual files
// To add a new article:
// 1. Create src/data/news-en/{id}.ts
// 2. Add import and newsArticles array below

import article1 from './news-en/1';

// All articles array
export const newsArticles = [
  article1,
];

// For list display: extract only title, date, and category
export const newsItems = newsArticles.map(({ id, date, category, title }) => ({
  id,
  date,
  category,
  title
}));
