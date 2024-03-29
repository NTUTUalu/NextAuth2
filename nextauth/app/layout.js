
import { Inter } from "next/font/google";
import {AuthProvider} from "./Providers"
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* the children below represents all other content in the application */}
      <body className={inter.className}><AuthProvider>{children}</AuthProvider></body>
    </html>
  );
}
