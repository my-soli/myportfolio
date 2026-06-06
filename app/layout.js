import "./globals.css";

export const metadata = {
  title: "Shalin Rono — Software Engineer",
  description:
    "Software Engineer specializing in Python, Django, Node.js and Next.js. Building scalable web applications and driving product growth.",
  openGraph: {
    title: "Shalin Rono — Software Engineer",
    description: "Software Engineer based in Nairobi, Kenya.",
    images: ["/shalin-img.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
