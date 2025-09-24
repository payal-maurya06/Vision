import "./globals.css";
import About from "./sections/About";
import Brand from "./sections/Brand";
// import Category from "./sections/Category";
// import Category2 from "./sections/Category2BB";
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
        
        <Category3/>
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
