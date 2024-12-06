import "./globals.css";
import { skranji, hind_madurai } from "./fonts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Foo Fest",
  description: "School project by Nicole, Jules and Julie",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
