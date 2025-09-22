import "./globals.css";
import About from "./sections/About";
import Brand from "./sections/Brand";
import Category from "./sections/Category";
import Counting from "./sections/Counting";
import Eyewear from "./sections/Eyewear";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import NavBar from "./sections/NavBar";
import Services from "./sections/Services";
import Testimonial from "./sections/Testimonial";
import Visit from "./sections/Visit";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header/>
        <NavBar/>
        <Hero/>
        <Category/>
        <Eyewear/>
        <Brand/>
        <Services/>
        <Counting/>
        <Testimonial/>
        <About/>
        <Visit/>
        <Footer/>
        {children}
      </body>
    </html>
  );
}
