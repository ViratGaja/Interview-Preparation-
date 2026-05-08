import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Mini Blog",
  description: "Learning Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        <nav style={{ display: "flex", gap: "20px" }}>
          <Link href="/">Home</Link>
          <Link href="/blogs">Blogs</Link>
        </nav>

        {children}

      </body>
    </html>
  );
}