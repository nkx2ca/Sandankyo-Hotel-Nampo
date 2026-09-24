// 各記事を個別ファイルからインポート
// 新しい記事を追加する場合：
// 1. src/data/news/{id}.ts を作成
// 2. 下記のimport文とnewsArticles配列に追加

import article1 from './news/1';

// 全記事の配列
export const newsArticles = [
  article1,
];

// 一覧表示用：タイトル、日付、カテゴリーのみ抽出
export const newsItems = newsArticles.map(({ id, date, category, title }) => ({
  id,
  date,
  category,
  title
}));
