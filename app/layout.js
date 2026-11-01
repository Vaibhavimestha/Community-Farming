import "./globals.css";

export const metadata = {
  title: "Community Farming Hub",
  description:
    "A platform that connects farmers to share resources, purchase together, and sell their crops.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}