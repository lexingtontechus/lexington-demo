import Script from "next/script";
import NewsPage from "./news";

export const metadata = {
  title: "News",
};

export default function News() {
  return (
    <div>
      <NewsPage />
    </div>
  );
}
