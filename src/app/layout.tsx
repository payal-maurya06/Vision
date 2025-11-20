
"use client";

import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { usePathname } from "next/navigation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Sections (All imports from your original code)
import About from "./sections/About";
import Brand from "./sections/Brand";
import Category2 from "./sections/Category2BB";
import Category3 from "./sections/Category3DD";
import Counting from "./sections/Counting";
import Eyewear from "./sections/Eyewear";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import NavBar from "./sections/NavBar";
import Services from "./sections/Services";
import Testimonial from "./sections/Testimonial";
import Visit from "./sections/Visit";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  
  const isSpecialLayoutPage =
    pathname === "/login" ||
    pathname === "/signup" ||
    pathname === "/verify-otp" ||
    pathname === "/forgot-password" ||   
    pathname === "/reset-password";  


  const isHomePage = pathname === "/";

  return (
    <html lang="en">
      <body>
        <ToastContainer position="top-right" autoClose={2000} />
        <SessionProvider refetchInterval={0}>
          

          {isSpecialLayoutPage ? (
         
            <div className="min-h-screen flex items-center justify-center">
              {children} 
            </div>
          ) : (
          
            <>
              <Header />
              <NavBar />
              
  
              {isHomePage && (
                <>
                  <Hero />
                  <Category2 />
                  <Eyewear />
                  <Brand />
                  <Services />
                  <Counting />
                  <Testimonial />
                  <About />
                  <Visit />
                </>
              )}

              {children} 

            
              <Footer /> 
            </>
          )}
        </SessionProvider>
      </body>
    </html>
  );
}