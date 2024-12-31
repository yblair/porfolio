import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Porfolio Yamila",
  description:
    "En este documento se encuentra una breve descripcion sobre mi experiencia y mis tareas realizadas como frontend developer",
};

export default function RootLayout({ children }) {
  return (
    <>
      <head>
        <head>
          <link rel="icon" href="./images/bel.jpg" sizes="any" />
        </head>
      </head>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {children}
        </body>
      </html>
    </>
  );
}
