import React, { useEffect } from "react";
import './Parallax.css';  // Ensure your CSS is in a separate file

const Parallax = () => {
  useEffect(() => {
    const castParallax = () => {
      const handleScroll = () => {
        const top = window.pageYOffset;

        const layers = document.getElementsByClassName("parallax");
        for (let i = 0; i < layers.length; i++) {
          const layer = layers[i] as HTMLElement; // Cast to HTMLElement
          const speed = layer.getAttribute('data-speed');
          const yPos = -(top * parseFloat(speed || "0") / 100);
          layer.style.transform = `translate3d(0px, ${yPos}px, 0px)`;
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    };

    castParallax();
  }, []);

  return (
    <div className="keyart" id="parallax">
      <div className="keyart_layer parallax" id="keyart-0" data-speed="2"></div>
      <div className="keyart_layer" id="keyart-scrim"></div>
      <div className="keyart_layer parallax" id="keyart-7" data-speed="69"></div>
      <div className="keyart_layer" id="keyart-8" data-speed="100"></div>
    </div>
  );
};

export default Parallax;
