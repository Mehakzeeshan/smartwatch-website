import Navbar from "@/components/navbar";
import HeroSection from "@/components/heroSection";
import Brands from "@/components/brands";
import Products from "@/components/products";
import About from "@/components/about";
import Contact from "@/components/contact";


export default function Home() {
  return (
    <main>
      <div className= "bg-gradient-to-l from-[#383638] to-[#0B0B0B]">
        <Navbar />
        <HeroSection />
      </div>

      <div>
        <div>
          <Brands />
          </div> 
          <Products /> 
          <About />
          <Contact />
      </div>
    </main>
  )
}