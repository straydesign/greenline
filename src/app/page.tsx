import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Portfolio from '@/components/sections/Portfolio';
import About from '@/components/sections/About';
import Process from '@/components/sections/Process';
import Testimonials from '@/components/sections/Testimonials';
import Pricing from '@/components/sections/Pricing';
import CTA from '@/components/sections/CTA';
import ParallaxWindow from '@/components/ui/ParallaxWindow';

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <Services />
        <ParallaxWindow
          imageUrl="/images/parallax-1.jpg"
          videoUrl="/videos/lawn-mowing.mp4"
          alt="Freshly manicured lawn with crisp edging"
        />
        <Portfolio />
        <About />
        <Process />
        <Testimonials />
        <Pricing />
        <ParallaxWindow
          imageUrl="/images/parallax-2.jpg"
          videoUrl="/videos/aerial-mowing.mp4"
          alt="Close-up of fresh-cut grass blades"
        />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
