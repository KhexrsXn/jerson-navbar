import "./globals.css";

export const metadata = {
  title: "Jerson Navbar",
  description: "Jerson Technical Exam",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
