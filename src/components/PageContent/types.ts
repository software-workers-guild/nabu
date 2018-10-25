export interface IPageContentProps {
  title: string;
  author: string;
  content?: string;
  datePublished: string;
  wordCount?: number | null | undefined;
  fetchLink: (url: string) => void;
}
