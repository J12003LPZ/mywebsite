import Typed from "typed.js";
import { useEffect, useRef } from "react";

function Hero() {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "a designer",
        "a developer",
        "a freelancer",
        "a creative mind",
        "all what you need",
      ],
      startDelay: 300,
      typeSpeed: 150,
      backDelay: 150,
      backSpeed: 150,
      smartBackspace: true,
      showCursor: false,
      loop: true,
    });
  }, []);

  return (
    <section id="hero" className="d-flex flex-column justify-content-center">
      <div className="container" data-aos="zoom-in" data-aos-delay="100">
        <h1>Leonardo Lopez</h1>
        <p>
          I'm&nbsp;
          <span ref={el}></span>
        </p>
      </div>
    </section>
  );
}

export default Hero;
