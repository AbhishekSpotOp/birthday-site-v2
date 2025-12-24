import "./globals.css";
import MusicButton from "@/components/MusicButton";

export const metadata = {
  title: "Happy Birthday!",
  description:
    "An animated birthday surprise filled with emotions, words from the heart, and a letter that types itself — just for you.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        {children}
        <MusicButton />
      </body>
    </html>
  );
}
