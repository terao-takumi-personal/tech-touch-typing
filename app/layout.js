// TODO: ノーマライズについて調べる
import "normalize.css/normalize.css";
import "./globals.css";

export const metadata = {
  title: "Tech Touch Typing",
  description: "Typing Practice for Engineers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
