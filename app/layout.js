import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fruit Shop",
  description: "Hyper inflated Fruit Store - best prices 2033",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head> 
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body className={' min-h-screen flex flex-col relative ' + inter.className}>
      <header className=" sticky top-0 p-6 bg-white border-b border-solid border-blue-900 shadow-medium z-50 text-2xl sm:text-3xl md:text-4xl sm:p-8 flex items-center justify-between">
        <Link href={'/'}> 
        <h1 className="uppercase cursor-pointer hover:scale-110"> Fruit Shop</h1>
       </Link> 
       <i className="fa-solid cursor-pointer hover:text-slate-500 fa-cart-shopping"></i>
      </header>
      <div> 
      {children}
      </div> 
      <footer> FOOTER </footer>
    </body>
    </html>
  );
}
