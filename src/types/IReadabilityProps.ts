export interface IReadabilityProps {
  title: string;
  author: string;
  date_published: string;
  dek: string;
  lead_image_url: string;
  content: string;
  next_page_url: string;
  url: string;
  domain: string;
  excerpt: string;
  word_count: number | null | undefined;
  direction: string;
  total_pages: number;
  rendered_pages: number;
}
