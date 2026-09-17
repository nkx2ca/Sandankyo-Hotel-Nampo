// Import each article from individual files
// To add a new article:
// 1. Create src/data/news-en/{id}.ts
// 2. Add import and newsArticles array below

import article1 from './news-en/1';
import article2 from './news-en/2';
import article3 from './news-en/3';
import article4 from './news-en/4';
import article5 from './news-en/5';
import article6 from './news-en/6';
import article7 from './news-en/7';
import article8 from './news-en/8';
import article9 from './news-en/9';
import article10 from './news-en/10';
import article11 from './news-en/11';
import article12 from './news-en/12';

// All articles array
export const newsArticles = [
  article1,
  article2,
  article3,
  article4,
  article5,
  article6,
  article7,
  article8,
  article9,
  article10,
  article11,
  article12,
];

// For list display: extract only title, date, and category
export const newsItems = newsArticles.map(({ id, date, category, title }) => ({
  id,
  date,
  category,
  title
}));
