import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const sans = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-sans"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-grotesk"
});

export const metadata = {
  title: "PersonaOn — More than meeting notes. Your work memory.",
  description: "PersonaOn joins your calls and turns every decision, follow-up, and detail into a searchable work memory you can recall in seconds."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sans.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
