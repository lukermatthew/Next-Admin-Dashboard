import "./ui/globals.css";
import { Inter, DM_Sans } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const dm = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm",
});

export const metadata = {
  title: "Next.js Admin Dashboard",
  description: "Next.js Tutorial",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${dm.variable}  `}>{children}</body>
    </html>
  );
}
