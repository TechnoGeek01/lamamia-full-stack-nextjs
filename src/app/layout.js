import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer/Footer";
import { ThemeProvider } from "../../context/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lamamia",
  description: "This is Lamamia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <div className="container">
            <Navbar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
