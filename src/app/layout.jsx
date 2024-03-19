import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Web Page Components",
  description:
    "Navbars, Buttons, Forms, Icons, Login and Signup Forms, input fields, for email address, names, usernames and short texts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`inter.className w-screen`}>{children}</body>
    </html>
  );
}
