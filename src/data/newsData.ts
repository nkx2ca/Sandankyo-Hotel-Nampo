// 各記事を個別ファイルからインポート
// 新しい記事を追加する場合：
// 1. src/data/news/{id}.ts を作成
// 2. 下記のimport文とnewsArticles配列に追加

import article1 from './news/1';
import article2 from './news/2';
import article3 from './news/3';
import article4 from './news/4';
import article5 from './news/5';
import article6 from './news/6';
import article7 from './news/7';
import article8 from './news/8';
import article9 from './news/9';
import article10 from './news/10';
import article11 from './news/11';
import article12 from './news/12';

// 全記事の配列
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

// 一覧表示用：タイトル、日付、カテゴリーのみ抽出
export const newsItems = newsArticles.map(({ id, date, category, title }) => ({
  id,
  date,
  category,
  title
}));
