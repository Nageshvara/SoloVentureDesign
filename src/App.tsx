import React,{useRef,useEffect} from 'react';
import './App.css';
import { Navbarcomp } from './components/Navbarcomp';
import { ShimmerButtonDemo } from './components/ShimmerButton';
import CuriousAdventureSection from './components/AdventureSection';
import FooterComp from './components/FooterComp';
import WhyTravelWithUs from './components/WhyTravelWithUs';
import AboutUs from './components/AboutUs';
import ContactPage from './components/ContactPage';
import { InfiniteMovingCardsDemo } from './components/InfiniteMovingCards';

function App() {
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          } else {
            entry.target.classList.remove('show');
          }
        });
      },
      { threshold: 0.05 }
    );

    // Create a stable reference for the current sections
    const refs = sectionsRef.current;

    // Observe each section
    refs.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      // Unobserve each section using the stable reference
      refs.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);
  return (
    <div className='h-screen bg-black bg-cover bg-center'>
      <Navbarcomp />
      <section className="w-full py-48 md:py-30 lg:py-36 xl:py-48 bg-cover bg-center bg-image">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
              <div className="space-y-8 text-center">
                <h1 className='text-5xl font-bold tracking-[-0.02em] md:text-7xl md:leading-[5rem] text-[#F7DC6F] text-center' style={{ fontFamily: 'Habanero, sans-serif' }}>
                  SoloVenture
                </h1>
                <h3 className="text-md md:text-2xl text-center mt-12 text-[#FCF6F5FF]" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                  Explore Alone, Conquer Beyond
                </h3>
              </div>
              <div className="space-x-4 space-y-6">
                <ShimmerButtonDemo/>
              </div>
            </div>
          </div>
        </section>
        <div className='abtsection' ref={(el) => sectionsRef.current.push(el)}>
          <AboutUs/>
        </div>
        <div className='whytravel' ref={(el) => sectionsRef.current.push(el)}>
          <WhyTravelWithUs/>
        </div>
        <div className='adventure' ref={(el) => sectionsRef.current.push(el)}>
          <CuriousAdventureSection/>
        </div>
        <div className='testimo' ref={(el) => sectionsRef.current.push(el)}>
          <InfiniteMovingCardsDemo/>
        </div>
        <div className='contact' ref={(el) => sectionsRef.current.push(el)}>
          <ContactPage/>
        </div>
        <FooterComp/>
    </div>
  );
}

export default App;
  